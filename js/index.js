import { getData } from "./getdata/getData.js";
import { renderderizaUsers } from "./services/renderiza.js";

const main = document.querySelector('main')
const portal = document.querySelector('.portal');
const render = document.querySelector('.render');


const pegarResults = await getData()

renderderizaUsers(render, pegarResults, main)

portal.addEventListener('click', async () => {

  
})