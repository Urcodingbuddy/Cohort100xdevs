"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
const gameManager = new store_1.GameManager();
(0, logger_1.startLogger)();
setInterval(() => {
    gameManager.addGame(Math.random().toString());
}, 5000);
