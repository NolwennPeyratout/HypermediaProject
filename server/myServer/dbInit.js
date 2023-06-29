import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const personModel = [
        {
            name: "Mario Rossi",
            role: "CEO",
            cv: loremIpsum({
                count: 3,
                units: "paragraph"
            }),
            introduction:loremIpsum({
                count: 2,
                units: "paragraph"
            })
            //images are generated with :https://facestudio.app/

        },
        {
            name: "Floria DeAngeli",
            role: "Manager",
            cv: loremIpsum({
                count: 3,
                units: "paragraph"
            }),
            introduction:loremIpsum({
                count: 2,
                units: "paragraph"
            })
        },
        {
            name: "Carolina Reaper",
            role: "Specialist",
            cv: loremIpsum({
                count: 3,
                units: "paragraph"
            }),
            introduction:loremIpsum({
                count: 2,
                units: "paragraph"
            })
        },
        {
            name: "Andrea Pucci",
            role: "Specialist",
            cv: loremIpsum({
                count: 3,
                units: "paragraph"
            }),
            introduction:loremIpsum({
                count: 2,
                units: "paragraph"
            })
        },
    ]

    const person0 = await models.Person.create(personModel[0])
    const person1 = await models.Person.create(personModel[1])
    const person2 = await models.Person.create(personModel[2])
    const person3 = await models.Person.create(personModel[3])

    const projectModel = [
        {
            name: "Ringo",                  //1st project (food)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Milan, Italy",
            date: "23/04/2014",
            start_up: "Barilla",
            product_service: "cookies",
            relevant:"true"
        },
        {
            name: "Apple Visor",            //2nd project (IT)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Cupertino, California",
            date: "15/05/2023",
            start_up: "Apple",
            product_service: "Mobile devices",
            relevant:"true"
        },
        {
            name: "Lidar Scanner",                //3rd project (health)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Bologna, Italy",
            date: "03/12/2007",
            start_up: "Ecolab s.r.l.",
            product_service: "Hospital scanners",
            relevant:"true"
        },
        {
            name: "BioVegan Smoothies",                //4th project (food)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Milan, Italy",
            date: "30/04/2020",
            start_up: "Valfrutta",
            product_service: "smoothies",
            relevant:"true"
        },
        {
            name: "Starlink",                //5th project (IT)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Hawthorne, California",
            date: "01/11/2016",
            start_up: "SpaceX",
            product_service: "Internet system",
            relevant:"true"
        },
        {
            name: "The Next Hambuger",            //6th project (food)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Bruxelles, Belgium",
            date: "13/01/2017",
            start_up: "FoodEvolution",
            product_service: "3D-printed meat",
            relevant:"true"
        },
        {                                       //7th project (health)
            name: "Heartless",                
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "London, England",
            date: "03/12/2021",
            start_up: "Maven Clinic",
            product_service: "3d-printed heart valves",
            relevant:"true"
        },
        {
            name: "Glucometer",                    //8th project (health)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Shanghai, China",
            date: "08/06/2015",
            start_up: "Medely",
            product_service: "Glucose monitoring device",
            relevant:"true"
        },
        {
            name: "VotaMi",                //9th project (IT)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Milan, Italy",
            date: "26/03/2022",
            start_up: "MHackeroni",
            product_service: "fingerprint-based voting system",
            relevant:"true" 
        },
        {
            name: "Nutella",            //10th project (food)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Alba, Italy",
            date: "02/02/2011",
            start_up: "Ferrero S.p.a.",
            product_service: "hazelnut cream",
            relevant:"true"
        },
        {
            name: "DetectionSystem",            //11th project (IT)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Tokyo, Japan",
            date: "31/08/2019",
            start_up: "NewWave Corporation",
            product_service: "Face detector",
            relevant:"true"
        },
        {
            name: "Cancer Destroyer",            //12th project (health)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Indianapolis, Indiana",
            date: "20/06/2023",
            start_up: "Elevance Health",
            product_service: "Pills",
            relevant:"true"
        },
        {
            name: "Doriano Crackers",            //13th project (food)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Treviso, Italy",
            date: "21/03/2013",
            start_up: "Doria",
            product_service: "Crackers",
            relevant:"true"
        },
        {
            name: "Knox",            //14th project (IT)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Seoul, South Korea",
            date: "01/03/2018",
            start_up: "Samsung",
            product_service: "Security framework",
            relevant:"true"
        },
        {
            name: "Paracetamolo",            //15th project (health)
            presentation: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            location: "Rome, Italy",
            date: "17/05/2014",
            start_up: "Angelini Industries",
            product_service: "Analgesic syrup",
            relevant:"true"
        },

    ]
    
    const project0 = await models.Project.create(projectModel[0])
    const project1 = await models.Project.create(projectModel[1])
    const project2 = await models.Project.create(projectModel[2])
    const project3 = await models.Project.create(projectModel[3])
    const project4 = await models.Project.create(projectModel[4])
    const project5 = await models.Project.create(projectModel[5])
    const project6 = await models.Project.create(projectModel[6])
    const project7 = await models.Project.create(projectModel[7])
    const project8 = await models.Project.create(projectModel[8])
    const project9 = await models.Project.create(projectModel[9])
    const project10 = await models.Project.create(projectModel[10])
    const project11 = await models.Project.create(projectModel[11])
    const project12 = await models.Project.create(projectModel[12])
    const project13 = await models.Project.create(projectModel[13])
    const project14 = await models.Project.create(projectModel[14])

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
            person_name: person0.name,
            project_name: project0.name
        },
        {
            person_name: person2.name,
            project_name: project1.name
        },
        {
            person_name: person3.name,
            project_name: project2.name
        },
        {
            person_name: person1.name,
            project_name: project3.name
        },
        {
            person_name: person2.name,
            project_name: project4.name
        },
        {
            person_name: person0.name,
            project_name: project5.name
        },
        {
            person_name: person3.name,
            project_name: project6.name
        },
        {
            person_name: person1.name,
            project_name: project7.name
        },
        {
            person_name: person1.name,
            project_name: project8.name
        },
        {
            person_name: person0.name,
            project_name: project9.name
        },
        {
            person_name: person0.name,
            project_name: project10.name
        },
        {
            person_name: person1.name,
            project_name: project11.name
        },
        {
            person_name: person3.name,
            project_name: project12.name
        },
        {
            person_name: person2.name,
            project_name: project13.name
        },
        {
            person_name: person3.name,
            project_name: project14.name
        }
    ]

    //await models.Supervise.bulkCreate(superviseModel)
    await models.Supervise.create(superviseModel[0])
    await models.Supervise.create(superviseModel[1])
    await models.Supervise.create(superviseModel[2])
    await models.Supervise.create(superviseModel[3])
    await models.Supervise.create(superviseModel[4])
    await models.Supervise.create(superviseModel[5])
    await models.Supervise.create(superviseModel[6])
    await models.Supervise.create(superviseModel[7])
    await models.Supervise.create(superviseModel[8])
    await models.Supervise.create(superviseModel[9])
    await models.Supervise.create(superviseModel[10])
    await models.Supervise.create(superviseModel[11])
    await models.Supervise.create(superviseModel[12])
    await models.Supervise.create(superviseModel[13])
    await models.Supervise.create(superviseModel[14])

    const concernModel = [                      //NB: area0 = food, area1 = health, area2 = it
        {
            project_name: project0.name,
            area_name: area0.name
        },
        {
            project_name: project1.name,
            area_name: area2.name
        },
        {
            project_name: project2.name,
            area_name: area1.name
        },
        {
            project_name: project3.name,
            area_name: area0.name
        },
        {
            project_name: project4.name,
            area_name: area2.name
        },
        {
            project_name: project5.name,
            area_name: area0.name
        },
        {
            project_name: project6.name,
            area_name: area1.name               
        },
        {
            project_name: project7.name,            
            area_name: area1.name
        },
        {
            project_name: project8.name,
            area_name: area2.name
        },
        {
            project_name: project9.name,
            area_name: area0.name
        },
        {
            project_name: project10.name,      
            area_name: area2.name           
        },
        {
            project_name: project11.name,
            area_name: area1.name
        },
        {
            project_name: project12.name,
            area_name: area0.name
        },
        {
            project_name: project13.name,
            area_name: area2.name
        },
        {
            project_name: project14.name,
            area_name: area1.name
        }
    ]

    await models.Concern.create(concernModel[0])
    await models.Concern.create(concernModel[1])
    await models.Concern.create(concernModel[2])
    await models.Concern.create(concernModel[3])
    await models.Concern.create(concernModel[4])
    await models.Concern.create(concernModel[5])
    await models.Concern.create(concernModel[6])
    await models.Concern.create(concernModel[7])
    await models.Concern.create(concernModel[8])
    await models.Concern.create(concernModel[9])
    await models.Concern.create(concernModel[10])
    await models.Concern.create(concernModel[11])
    await models.Concern.create(concernModel[12])
    await models.Concern.create(concernModel[13])
    await models.Concern.create(concernModel[14])

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
