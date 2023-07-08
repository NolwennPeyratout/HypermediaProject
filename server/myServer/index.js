import express from "express"
import { DataTypes, Sequelize } from "sequelize"


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
    //To define a project we will need to define its name with a string, a presentation with a text, a location with a string, a date with a Date, the name of the start-up with a string
    //the product delivered with a String, and the fact that is relevant with a boolean
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
    //To define a person we need to define the name of him/her with a string, the role of him/her with a string, a text related to the CV of him or her
    // and a short introduction of the person with the text
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
    
    //To define an area we need to define the name of it with a string and a description for it with a text.
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

    //We define the fact that a project is supervised by one person. And to build a table we will use the person_name and the project_name
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
    //we define the fact that a project has an area. And to build a table with this idea we use the project_name and the area_name
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
    //we get all the area of the database
    app.get('/areas', async (req, res) => {
        const data = await models.Area.findAll();

        res.status(200).json(data)
    })

    //We get the area defined by this id
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
    //We get all the projects of the database
    app.get('/projects', async (req, res) => {
        const data = await models.Project.findAll();

        res.status(200).json(data)
    })
    //We get the project defined by this id
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
    //Get project for a specific area 
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
    //get all the person in the team
    app.get('/team', async (req, res) => {
        const data = await models.Person.findAll();

        res.status(200).json(data)
    })
    //Get a precise person with his / her id
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
    //Get projects done by a specific person
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
    //Get areas for person-specific projects
    app.get('/team/:id/project/area', async (req, res) => {
        try {
            const data = await db.query(
                //We need to make a left join to join 2 differents table to finally have the area_name with a person_name
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