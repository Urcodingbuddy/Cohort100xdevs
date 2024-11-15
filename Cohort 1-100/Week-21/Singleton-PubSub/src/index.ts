
import { startLogger } from "./logger"
import { GameManager } from "./store";


const gameManager = new GameManager();
startLogger();

setInterval(()=>{
    gameManager.addGame(Math.random().toString())
},5000)
