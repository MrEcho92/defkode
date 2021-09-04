import  viewsport  from '../../assets/viewingsports.png'
import auklett from '../../assets/auklett.png'
import monitor from '../../assets/monitor.png'
import store from '../../assets/store.png'
import return_api from '../../assets/return_api.png'
import todolist from '../../assets/to-do-list.png'

export const ProjectData = [
  {
    id: 1,
    name: "Viewingsports",
    description: " A full stack web app for football forum that allows user to post, comment, read news and engage with others fan.",
    imageUrl: viewsport,
    link: "https://www.viewingsports.com/",
    stack:'Django Python Bootstrap JavaScript HTML CSS'
  },
  {
    id: 2,
    name: "Clothing Store",
    description: "A full stack web app for an e-commerce store that allows user to navigate different products and add selected items to cart ",
    imageUrl: store,
    link: "https://crwn-clothing-website-live.herokuapp.com/",
    stack:'Express.js React Redux Stripe API Scss Heroku'
  },
  {
    id: 3,
    name: "Bitcoin Monitor Api",
    description: "A bitcoin monitor that tracks market price for bitcoin, inform user on price change and aid in investment",
    imageUrl: monitor,
    link: "https://github.com/MrEcho92/bitcoin-monitor" ,
    stack:'Python Beautifulsoup Requests Smptplib'
  },
  {
    id: 4,
    name: "Customer Product Return Register",
    description: "A RESTful API that serves customer product issues, created to interface with other systems and aid in completing root cause investigation",
    imageUrl: return_api,
    link: "https://bit.ly/395SmPF",
    stack:'Django RESTful Python AWS API'
  },
  {
    id: 5,
    name: "Auklett Redesign",
    description: "A redesign of Auklett homepage for awesome website design to improve client engagement.",
    imageUrl: auklett,
    link: 'https://www.auklett.co.uk/',
    stack:'Shopify UI'
  },
  {
    id: 6,
    name: "Just Do It - To Do Note",
    description: "A  a to do list web app that allows user to record note of actions to be completed whilst reducing carbon footprint.",
    imageUrl: todolist,
    link: 'https://bit.ly/38lDf30',
    stack:'React Hooks Storage GitHub'
  },
];
