import { loremIpsum } from "lorem-ipsum"

export default async (models) => {

    const personModel = [
        {
            name: "Mario Rossi",
            role: "CEO",
            cv: "Mario Rossi is an accomplished and visionary CEO with expertise in the food and IT industries. He has a proven track record of successfully leading ventures and driving business growth. Mario excels in strategic thinking, innovation, and operational excellence. He has a passion for building high-performing teams and fostering collaborative environments. With a focus on delivering outstanding results and exceeding organizational goals, Mario brings a wealth of experience in business development, financial management, and customer-centricity. He is skilled in identifying investment opportunities and establishing strategic partnerships",
            introduction: "Accomplished and visionary CEO with a proven track record in the food and IT industries. Demonstrated expertise in leading successful ventures and driving business growth. A strategic thinker with a passion for innovation, customer-centricity, and operational excellence. Excels in building high-performing teams and fostering collaborative environments. Committed to delivering outstanding results and exceeding organizational goals.",
            //images are generated with :https://facestudio.app/

        },
        {
            name: "Floria DeAngeli",
            role: "Manager",
            cv:"Floria DeAngeli is a dedicated and detail-oriented project manager with a strong background in overseeing food, health, and IT projects. With a proven ability to coordinate diverse teams and manage budgets, Floria ensures the successful execution of projects while maintaining the highest standards of quality and compliance. She excels in multitasking and problem-solving, thriving in fast-paced environments. Floria's passion for innovation and commitment to delivering exceptional results make her a valuable asset in project management.",
            introduction: "Dedicated and results-driven project manager with expertise in overseeing food, health, and IT projects. Highly skilled in coordinating diverse teams, managing budgets, and ensuring successful project execution. A detail-oriented professional with a passion for driving innovation and delivering exceptional results. Excels in multitasking and problem-solving in fast-paced environments. Committed to meeting project objectives while maintaining the highest standards of quality and compliance.",
        },
        {
            name: "Carolina Reaper",
            role: "Specialist",
            cv: "Carolina Reaper is a highly skilled and experienced IT specialist with a strong passion for technology and a proven track record of delivering innovative solutions. With expertise in managing complex IT projects, optimizing system performance, and providing technical support, Carolina excels in problem-solving and collaborating with cross-functional teams. Stay updated with the latest industry trends, Carolina is dedicated to implementing IT solutions that drive business growth. With a Master in IT and a range of certifications, Carolina brings a comprehensive skill set in IT project management, system optimization, technical support, cybersecurity, and emerging technologies. Fluent in English and Italian, Carolina is an asset to any IT team.",
            introduction:"Highly skilled and experienced IT specialist with a passion for technology and a proven track record of delivering innovative solutions. Adept at managing complex IT projects, optimizing system performance, and providing technical support. Strong problem-solving abilities combined with excellent communication skills to effectively collaborate with cross-functional teams. Committed to staying updated with the latest trends and advancements in the IT industry, Carolina is dedicated to delivering optimal IT solutions that drive business growth."
        },
        {
            name: "Andrea Pucci",
            role: "Specialist",
            cv: "Andrea Pucci is a highly knowledgeable and dedicated health and food specialist with a strong background in the industry. With expertise in promoting healthy eating habits, nutrition education, and sustainable food practices, Andrea is passionate about improving overall wellness and advocating for sustainable food systems. He excels in program development, stakeholder engagement, and research and analysis to ensure the implementation of impactful initiatives. He is committed to delivering positive change and driving awareness in the health and food sectors.",
            introduction:"Highly knowledgeable and dedicated health and food specialist with a strong background in the industry. Demonstrated expertise in promoting health-conscious practices and implementing sustainable food solutions. Skilled in developing and implementing strategies to improve nutritional value and overall wellness. A passionate advocate for healthy lifestyles and sustainable food systems. Committed to delivering impactful results and driving positive change."
        },
    ]

    const person0 = await models.Person.create(personModel[0])
    const person1 = await models.Person.create(personModel[1])
    const person2 = await models.Person.create(personModel[2])
    const person3 = await models.Person.create(personModel[3])

    const projectModel = [
        {
            name: "Ringo",                  //1st project (food)
            presentation: "Introducing the Ringo project by Barilla! Led by CEO Mario Rossi, this exciting food startup aims to produce delicious and innovative cookies. With a passion for quality and taste, Ringo combines Barilla's expertise with cutting-edge technology to create irresistible treats. Join us on this culinary journey as we redefine the cookie experience with our mouthwatering creations. Stay tuned for a delightful blend of tradition and innovation in every bite!",
            location: "Milan, Italy",
            date: "23/04/2014",
            start_up: "Barilla",
            product_service: "cookies",
            relevant:"true"
        },
        {
            name: "Apple Visor",            //2nd project (IT)
            presentation: "Revolutionizing Mobile Devices! This groundbreaking IT project, spearheaded by Apple, aims to redefine the way we experience mobile technology. The Apple Visor combines cutting-edge innovation, sleek design, and advanced features to create a truly immersive and seamless user experience. Get ready to embark on a journey where mobility meets innovation, as Apple brings its signature touch to the world of mobile devices. Stay tuned for a new era of connectivity, convenience, and unparalleled performance with the Apple Visor! ",
            location: "Cupertino, California",
            date: "15/05/2023",
            start_up: "Apple",
            product_service: "Mobile devices",
            relevant:"true"
        },
        {
            name: "Lidar Scanner",                //3rd project (health)
            presentation: "Advancing Hospital Imaging! This state-of-the-art scanner, developed by the innovative startup Ecolab, is set to revolutionize hospital imaging technology. The Lidar Scanner combines cutting-edge lidar technology with precision and accuracy to deliver detailed and real-time imaging results. Designed with the needs of healthcare professionals in mind, this advanced scanner promises enhanced diagnostics and improved patient care. Join us on this transformative journey as Ecolab redefines hospital imaging with the Lidar Scanner. Stay tuned for a new era of medical imaging excellence! ",
            location: "Bologna, Italy",
            date: "03/12/2007",
            start_up: "Ecolab s.r.l.",
            product_service: "Hospital scanners",
            relevant:"true"
        },
        {
            name: "BioVegan Smoothies",                //4th project (food)
            presentation: "This exciting food project brings together the expertise of Valfrutta in organic and vegan products. Led by our dedicated team, we are crafting refreshing smoothies packed with natural goodness. With a focus on quality and sustainability, BioVegan Smoothies combine the best of nature's flavors and nutritional benefits. Join us on this delicious journey as we blend organic fruits and vegetables into vibrant and nourishing drinks. Sip your way to a healthier and tastier lifestyle with Valfrutta's BioVegan Smoothies! ",
            location: "Milan, Italy",
            date: "30/04/2020",
            start_up: "Valfrutta",
            product_service: "smoothies",
            relevant:"true"
        },
        {
            name: "Starlink",                //5th project (IT)
            presentation: "Empowering Global Connectivity! Developed by SpaceX in California, Starlink is a groundbreaking internet system that aims to provide high-speed, reliable, and accessible internet to people worldwide. With a constellation of advanced satellites orbiting the Earth, Starlink revolutionizes connectivity, bridging the digital divide and unlocking new opportunities for communities globally. Join us on this mission to create a more connected world, where everyone can access the power of the internet, no matter where they are. Stay tuned for a future where reliable internet access knows no boundaries with Starlink! ",
            location: "Hawthorne, California",
            date: "01/11/2016",
            start_up: "SpaceX",
            product_service: "Internet system",
            relevant:"true"
        },
        {
            name: "The Next Hambuger",            //6th project (food)
            presentation: "Redefining Meat with 3D Printing! This innovative project, based in Brussels, is pushing the boundaries of food technology by creating 3D-printed meat. FoodEvolution's cutting-edge approach combines sustainability, taste, and nutrition, revolutionizing the way we consume meat. With advanced 3D printing techniques, we are crafting delicious, plant-based alternatives that replicate the texture and flavor of traditional meat products. Join us on this exciting journey as we reshape the future of food, providing sustainable and mouthwatering options with The Next Hamburger by FoodEvolution. ",
            location: "Bruxelles, Belgium",
            date: "13/01/2017",
            start_up: "FoodEvolution",
            product_service: "3D-printed meat",
            relevant:"true"
        },
        {                                       //7th project (health)
            name: "Heartless",                
            presentation: "Revolutionizing Cardiac Care with 3D-Printed Heart Valves! Developed in London, this groundbreaking project is poised to transform the field of cardiology by creating innovative 3D-printed heart valves. Maven Clinic's cutting-edge technology and expertise merge to engineer personalized, high-quality heart valves that offer enhanced functionality and longevity. With a focus on precision and patient well-being, Heartless aims to improve cardiac treatment outcomes and redefine the future of cardiovascular care. Join us on this remarkable journey as we revolutionize the world of cardiology with 3D-printed heart valves by Maven Clinic. ",
            location: "London, England",
            date: "03/12/2021",
            start_up: "Maven Clinic",
            product_service: "3d-printed heart valves",
            relevant:"true"
        },
        {
            name: "Glucometer",                    //8th project (health)
            presentation:"Empowering Diabetic Care with Advanced Glucose Monitoring! Developed by the innovative startup Medely in Shanghai, Glucometer is a state-of-the-art glucose monitoring device designed to revolutionize diabetic care. With its cutting-edge technology and user-friendly interface, Glucometer enables accurate and convenient monitoring of blood glucose levels. This compact and portable device empowers individuals to take control of their health by providing real-time data and insights. Join us on this transformative journey as we redefine diabetic care with Glucometer by Medely. Stay tuned for a future where managing diabetes becomes easier and more efficient!",
            location: "Shanghai, China",
            date: "08/06/2015",
            start_up: "Medely",
            product_service: "Glucose monitoring device",
            relevant:"true"
        },
        {
            name: "VotaMi",                //9th project (IT)
            presentation: "Revolutionizing Voting with Fingerprint Technology! Developed by MHackeroni in Italy, VotaMi is an innovative fingerprint-based voting system. With advanced biometrics, VotaMi ensures secure and accurate voting, enhancing the integrity of elections. This user-friendly system allows voters to cast their ballots confidently. Join us on this transformative journey as we redefine democracy with VotaMi. Stay tuned for a future where voting is secure, accessible, and transparent for all! ",
            location: "Milan, Italy",
            date: "26/03/2022",
            start_up: "MHackeroni",
            product_service: "fingerprint-based voting system",
            relevant:"true" 
        },
        {
            name: "Nutella",            //10th project (food)
            presentation: "This delicious food project aims to produce the iconic hazelnut cream loved by millions worldwide. With a passion for quality and flavor, Ferrero S.p.a combines the finest ingredients to create the perfect blend of creamy chocolate and rich hazelnuts. Join us on this delectable journey as we spread happiness and indulge in the irresistible taste of Nutella. Stay tuned for a world of sweetness and delight with the Nutella Project by Ferrero S.p.a!",
            location: "Alba, Italy",
            date: "02/02/2011",
            start_up: "Ferrero S.p.a.",
            product_service: "hazelnut cream",
            relevant:"true"
        },
        {
            name: "DetectionSystem",            //11th project (IT)
            presentation: "This cutting-edge IT project aims to revolutionize facial recognition technology with its advanced Face Detector. Powered by state-of-the-art algorithms and machine learning, our system offers highly accurate and efficient face detection capabilities. Whether for security, identification, or enhancing user experiences, DetectionSystem is set to redefine how we interact with facial recognition technology. Join us on this transformative journey as we unlock new possibilities and drive innovation with the DetectionSystem project by NewWave Corporation.",
            location: "Tokyo, Japan",
            date: "31/08/2019",
            start_up: "NewWave Corporation",
            product_service: "Face detector",
            relevant:"true"
        },
        {
            name: "Cancer Destroyer",            //12th project (health)
            presentation: "Our mission is to revolutionize cancer treatment through an innovative pill. With a team of dedicated experts, we aim to combat cancer and enhance patient outcomes. Through precision medicine and cutting-edge research, we empower individuals in their fight against cancer. Join us on this transformative journey towards a future where cancer is conquered, one pill at a time. Stay tuned for breakthrough advancements and hope with Cancer Destroyer by Elevance Health.",
            location: "Indianapolis, Indiana",
            date: "20/06/2023",
            start_up: "Elevance Health",
            product_service: "Pills",
            relevant:"true"
        },
        {
            name: "Doriano Crackers",            //13th project (food)
            presentation:"This exciting food project aims to produce delectable and crispy crackers for your snacking pleasure. With a focus on quality ingredients and exceptional taste, Doriano Crackers will elevate your snack time experience. Join us on this flavorful journey as we combine tradition with innovation to create the perfect balance of crunch and flavor. Stay tuned for a delightful assortment of Doriano Crackers that will tantalize your taste buds and leave you craving for more.",
            location: "Treviso, Italy",
            date: "21/03/2013",
            start_up: "Doria",
            product_service: "Crackers",
            relevant:"true"
        },
        {
            name: "Knox",            //14th project (IT)
            presentation: "This cutting-edge IT project is dedicated to developing a state-of-the-art security framework. With a focus on safeguarding digital assets and protecting user privacy, Knox is designed to provide robust security solutions for businesses and individuals alike. Join us on this innovative journey as we redefine digital security, offering peace of mind and enhanced protection in an increasingly interconnected world. Stay tuned for the latest advancements in digital security with the Knox project by Samsung. ",
            location: "Seoul, South Korea",
            date: "01/03/2018",
            start_up: "Samsung",
            product_service: "Security framework",
            relevant:"true"
        },
        {
            name: "Paracetamolo",            //15th project (health)
            presentation:"This vital health project aims to produce an analgesic syrup that provides effective relief from pain and fever. With a commitment to quality and patient well-being, Paracetamolo is designed to deliver fast and reliable relief for individuals of all ages. Join us on this journey to promote better health and well-being as we strive to improve the lives of those in need. Stay tuned for the launch of Paracetamolo, the trusted analgesic syrup by Angelini Industries.",
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

}
