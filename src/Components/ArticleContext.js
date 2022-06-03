import React, { createContext, useState } from "react";


export const ArticleContext = createContext();

export const ArticleProvider = ( props ) => {

    const [article, setArticle] = useState([
        {id:1,category:'Tourism', title:'Kerala God\'s own country', image:'../images/kerala.jpg', text:"Welcome to kerala.Kerala is home to a number of spectacular beaches that will take your breath away. As Kerala is a coastal state, some of the most popular tourist destinations in Kerala are beaches like Kovalam", date:'January 24, 2022'},
    
        {id:2,category:'Tourism', title:'Madhya pradesh : The heart of incredible india', image:'../images/mp.jpg', text:"The area covered by the present-day Madhya Pradesh includes the area of the ancient Avanti Mahajanapada, whose capital Ujjain (also known as Avantika) arose as a major city during the second wave of Indian urbanisation in the sixth century BCE", date:'January 26, 2021'},
    
    
        {id:3,category:'Tourism', title:'Sikkim small but Beautiful', image:'../images/sikkim.jpg', text:"The Kingdom of Sikkim was founded by the Namgyal dynasty in the 17th century. It was ruled by Buddhist priest-kings known as the Chogyal. It became a princely state of British India in 1890. Following Indian independence, Sikkim continued its protectorate status with the Union of India after 1947, and the Republic of India after 1950", date:'January 27, 2020'},
    
    
        {id:4,category:'Tourism', title:'Amritsar : India Begins here', image:'../images/amritsar.jpg', text:"historically also known as Rāmdāspur and colloquially as Ambarsar, is the second largest city in the Indian state of Punjab, after Ludhiana. It is a major cultural and economic centre located in the Majha region of Punjab.", date:'July 24, 20122'},
    
        {id:5,category:'Fitness', title:'Sweat now shine later', image:'../images/sweat-now-shine-later.jpg', text:"Need plenty of room for planning your workout routine and track your exercises and weight loss process? Our new Workout Planner is finally here! This stylish and minimal fitness journal will keep you motivated everywhere you go.", date:'August 29, 2018'},

        {id:6,category:'Fitness', title:'Balance', image:'../images/balance.jpg', text:"Though it might not cross your mind, you need good balance to do just about everything, including walking, getting out of a chair, and leaning over to tie your shoes.", date:'November 24, 2019'},

        {id:7,category:'Fitness', title:'Sprint', image:'../images/sprint.jpg', text:"If you want an efficient way to burn calories, increase your cardiovascular and muscular endurance, and take your physical fitness to the next level, then consider adding sprints and intervals to your workout routine.", date:'March 11, 2019'},

        {id:8,category:'Technology', title:'Blockchain: Prevention is better than cure', image:'../images/blockchain.jpg', text:"A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.", date:'August 15, 1947'},

        {id:9,category:'Technology', title:'Cyber Security: The Future Ahead', image:'../images/cyber.jpg', text:"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.", date:'May 01, 2015'},

        {id:10,category:'Technology', title:'Artificial Intelligence', image:'../images/ai.jpg', text:"Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative.", date:'March 14, 2017'},

        {id:11,category:'Bollywood', title:'Pushpa: The Rise', image:'../images/pushpa.jpg', text:"Mangalam Srinu, a merciless dealer who manages the red sandalwood syndicate entrusts Konda Reddy to keep 200 tons of his stock safe. As Konda's younger brother, Jolly Reddy is deemed incompetent, Pushpa is given the job. Govindappa attempts to raid them but Pushpa throws all the logs into the river, saving it from being seized. At a party, Pushpa overhears that Srinu is selling the wood at a much higher rate than what they're paid. He asks Konda to demand a fair share but backs down as going against Srinu seems risky.", date:'January 11, 2022'},

        {id:12,category:'Bollywood', title:'The Kashmir Files', image:'../images/kf.jpg', text:"The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. Produced by Zee Studios, the film is based on the exodus of Kashmiri Hindus during the Kashmir Insurgency. It stars Anupam Kher, Darshan Kumar, Mithun Chakraborty and Pallavi Joshi.", date:'March 11, 2022'},

        {id:13,category:'Bollywood', title:'John Abraham in Attack', image:'../images/attack.jpg', text:"Attack: Part 1 is an upcoming Indian Hindi-language science fiction action thriller film directed by Lakshya Raj Anand, who co-wrote the film with Sumit Batheja and Vishal Kapoor, based on a story by John Abraham, who stars in the film alongside Jacqueline Fernandez and Rakul Preet Singh.", date:'April 21, 2022'},

        {id:14,category:'Food', title:'Malai Kofta', image:'../images/malai.jpg', text:"Malai kofta recipe – Potato paneer koftas served with a delicious creamy curry. Originally, the term kofta refers to meatballs. In India, the vegetarian version of koftas are quite popular. These are made either with Paneer & potato or with veggies like bottle gourd, mixed vegetables or raw banana. These are served with a rich, delicious and creamy gravy to which malai (cream) has been added.", date:'June 29, 2011'},

        {id:15,category:'Food', title:'Masala Dosa', image:'../images/masala.jpg', text:"This classic Masala dosa recipe makes perfectly light, soft and crispy crepes stuffed with a savory, wonderfully spiced potato and onion filling. It might take a bit of time to make delicious hotel style masala dosa, but with my step-by-step instructions and photos I promise it will be easier than you think and is so worth the effort!", date:'February 08, 2013'},

        {id:16,category:'Food', title:'Kulche Cholle', image:'../images/kulche.jpg', text:"One of the best Indian snacks cum breakfast options out there is Chole kulche! Originated from the Punjab region, this dish is loved all over the country and is now making its way in the west too.", date:'September 25, 2016'},

        {id:17,category:'Fitness', title:'Aerobic', image:'../images/aerobic.jpg', text:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness.", date:'October 17, 2017'},

        {id:18,category:'', title:'', image:'', text:"October", date:'March 21, 2019'},
    
    ])

    return (
        <ArticleContext.Provider value={ [article,setArticle] }>
            { props.children }
        </ArticleContext.Provider>
    )

}