"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const store_1 = require("./store");
const gameManager = new store_1.GameManager();
function startLogger() {
    setInterval(() => {
        console.log(gameManager.log());
    }, 5000);
}
