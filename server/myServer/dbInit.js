import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const personModel = [
        {
            name: "Mario Rossi",
            role: "CEO",
            cv: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        }
    ]

    const person0 = await models.Person.create(personModel[0])

    const projectModel = [
        {
            name: "Ringo",
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Milan, Italy",
            date: "23/04/2014",
            start_up: "Barilla",
            product_service: "cookies",
            relevant:"true" 
        }
    ]
    
    const project0 = await models.Project.create(projectModel[0])

    const areaModel = [
        {
            name: "Food",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        },
        {
            name: "Health",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        },
        {
            name: "IT",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            })
        }
    ]

    const area0 = await models.Area.create(areaModel[0])
    const area1 = await models.Area.create(areaModel[1])
    const area2 = await models.Area.create(areaModel[2])

    const superviseModel = [
        {
            person_id: person0.id,
            project_name: project0.name
        }
    ]

    await models.Supervise.bulkCreate(superviseModel)

    const concernModel = [
        {
            project_name: project0.name,
            area_name: area0.name
        }
    ]

    await models.Concern.bulkCreate(concernModel)

    /* from here TO REMOVE */

    const locationModel = [
        {
            name: "Dog Paradise",
            city: "Milan"
        },
        {
            name: "Dog City",
            city: "Rome"
        }
    ]

    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])

    const dogModel = [
        {
            name: "Orfeo",
            breed: "Schnauzer",
            age: 14,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Lessie",
            breed: "Collie",
            age: 7,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Rex",
            breed: "German Shepard",
            age: 10,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Balto",
            breed: "???",
            age: 6,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location1.id
        },
        {
            name: "Doggo",
            breed: "Pug",
            age: 110,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location1.id
        }
    ]
    await models.Dog.bulkCreate(dogModel)

    /* until here TO REMOVE */

}
