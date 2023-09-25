import { getData, getPosts } from "./getdata/getData.js";
import { renderderizaUsers, renderizaPostagens } from "./services/renderiza.js";

const main = document.querySelector('main')
const portal = document.querySelector('.portal');
const render = document.querySelector('.render');


const pegarResultsUsers = await getData()
const pegarResultsPosts = await getPosts()

renderderizaUsers(render, pegarResultsUsers, main)

renderizaPostagens(portal, pegarResultsPosts)