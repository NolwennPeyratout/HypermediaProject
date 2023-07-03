import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import { loremIpsum } from "lorem-ipsum"

import { fileURLToPath } from "url"
import path from "path"
import dbInitialization from "./dbInit.js"
    




const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("DIRNAME --> " + __dirname)
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

const app = express()
app.use(express.json())

async function initDB() {

    const models = {}

    await db.authenticate()

    models.Project = db.define('project', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        presentation: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        start_up: {
            type: DataTypes.STRING,
            allowNull: true
        },
        product_service: {
            type: DataTypes.STRING,
            allowNull: true
        },
        relevant: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    models.Person = db.define('person', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cv: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        introduction: {
            type: DataTypes.TEXT,
            allowNull: true
        },

    });
    
    models.Area = db.define('area', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    models.Supervise = db.define('supervise', {
        person_name: {
            type: DataTypes.INTEGER,
            references: {
                model: 'people',
                key: 'name'
            }
        },
        project_name: {
            type: DataTypes.STRING,
            references: {
                model: 'projects',
                key: 'name'
            }
        }
    });

    models.Concern = db.define('concern', {
        project_name: {
            type: DataTypes.STRING,
            references: {
                model: 'projects',
                key: 'name'
            }
        },
        area_name: {
            type: DataTypes.STRING,
            references: {
                model: 'areas',
                key: 'name'
            }
        }
    });

    models.Project.belongsTo(models.Supervise, { foreignKey: 'project_name' });
    models.Person.hasMany(models.Supervise, { foreignKey: 'person_name' });
    models.Project.hasMany(models.Concern, { foreignKey: 'project_name' });
    models.Area.hasMany(models.Concern, { foreignKey: 'area_name' });

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/areas', async (req, res) => {
        const data = await models.Area.findAll();

        res.status(200).json(data)
    })

    
    app.get('/areas/:id', async (req, res) => {
        const data = await models.Area.findOne({
            where: {
                name: req.params.id
            }
        })
        
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
    
    app.get('/projects', async (req, res) => {
        const data = await models.Project.findAll();

        res.status(200).json(data)
    })

    app.get('/projects/:id', async (req, res) => {
        const data = await models.Project.findOne({
            where: {
                name: req.params.id
            }
        })
        
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    //Needed to display project area
    app.get('/projects/:id/area', async (req, res) => {
        const data = await models.Concern.findOne({
            where: {
                project_name: req.params.id
            }
        })
        
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    //Needed to display project supervisor
    app.get('/projects/:id/supervisor', async (req, res) => {       
        const data = await models.Supervise.findOne({
            where: {
                project_name: req.params.id
            }
        })
        
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects/byarea/:id', async (req, res) => {

        try {
            const data = await db.query(
                'SELECT * FROM projects p WHERE EXISTS(' + 
                    'SELECT * FROM concerns ' + 
                    'WHERE concerns.area_name = :areaId AND concerns.project_name = p.name)', {
                replacements: {areaId: req.params.id},
                model: models.Project,
                mapToModel: true 
              });
        
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    })

    app.get('/team', async (req, res) => {
        const data = await models.Person.findAll();

        res.status(200).json(data)
    })

    app.get('/team/:id', async (req, res) => {
        const data = await models.Person.findOne({
            where: {
                name: req.params.id
            }
        })
        
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/team/:id/project', async (req, res) => {
        const data = await models.Supervise.findAll({
            where: {
                person_name: req.params.id
            }
        })
        
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/team/:id/project/area', async (req, res) => {
        try {
            const data = await db.query(
                'SELECT DISTINCT concerns.area_name ' + 
                    'FROM concerns ' + 
                    'LEFT JOIN supervises '+
                    'ON concerns.project_name=supervises.project_name '+
                    'WHERE supervises.person_name=:personName;', {
                replacements: {personName: req.params.id},
                model: models.Person,
                mapToModel: true 
              });
        
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    })
}

initServer()
console.log("SERVER INITIALIZED")
export default fromNodeMiddleware(app)