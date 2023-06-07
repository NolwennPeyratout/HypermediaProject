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

    models.Dog = db.define('dog', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    models.Location = db.define('location', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    models.Location.hasMany(models.Dog)
    models.Dog.belongsTo(models.Location)

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/dogs', async (req, res) => {
        const data = await models.Dog.findAll();

        res.status(200).json(data)
    })

    app.get('/dogs/:id', async (req, res) => {
        const data = await models.Dog.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Location
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.post('/dogs', async (req, res) => {
        const body = req.body;
        if(!body.age) {
            body.age = Math.floor(Math.random() * 14)
        }

        try {
            body.description = loremIpsum({
                count: 4,
                units: "paragraph"
            });
            body.locationId = 1;

            const record = await models.Dog.create(body)

            res.status(200).json({
                name: record.name,
                breed: record.breed,
                id: record.id
            })
        }
        catch {
            res.status(400).send()
        }
    })

    app.get('/locations', async (req, res) => {
        const data = await models.Location.findAll();

        res.status(200).json(data)
    })

    app.get('/locations/:id', async (req, res) => {
        const data = await models.Location.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Dog
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/dogPageSSR/:id', async (req, res) => {
        const data = await models.Dog.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Location
                }
            ]
        })
        if (data) {
            let str = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Dog Shelter - Dog Page</title>
                    <meta name = "description" content = "Page with all the information about the shelter for dogs">
                    <meta name = "keywords" content = "dog, shelter, information">
                    <meta name = "author" content = "Alberto Patti">
                    <link rel = "stylesheet" href = "/assets/css/general.css">
                    <link rel = "stylesheet" href = "/assets/css/dogPage.css">
                </head>
                <body>
                    <header>
                        <h1>The Dog Shelter</h1>
                        <nav>
                            <a href = "/index.html">HOME</a>
                            <a href = "/dogs.html">DOGS</a>
                            <a href = "/about.html">ABOUT US</a>
                            <a href = "/contact.html">CONTACT US</a>
                        </nav>
                    </header>
                    <main>
                        <div class = "info-group">
                            <img id = "main-img" src = "/assets/img/home-image.jpg" />
                            <div id = "data-container">
                                <p class = "data">Name: <span id = "dog-name">${data.name}</span></p>
                                <p class = "data">Breed: <span id = "dog-breed">${data.breed}</span></p>
                                <p class = "data">Age: <span id = "dog-age">${data.age}</span></p>
                            </div>
                        </div>
                        <h2>Description</h2>
                        <p id = "description">${data.description}</p>
                        <a id = "link" href = '/locationPage.html?id=${data.location.id}'>Link to ${data.location.name} in ${data.location.city}</a>
                    </main>
                    <footer>
                        Made by me :)
                    </footer>
                </body>
            </html>`;

            res.status(200).send(str)
        }
        else {
            res.sendStatus(404)
        } 
    })
}

initServer()
console.log("SERVER INITIALIZED")
export default fromNodeMiddleware(app)