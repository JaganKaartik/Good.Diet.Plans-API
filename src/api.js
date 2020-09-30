"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const diet = require("../src/diet");
const app = express_1.default();
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json({
        message: "Welcome to Good Diet Plans API!",
    });
});
router.get("/diet/all", (req, res) => {
    res.send(diet);
});
app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless_http_1.default(app);
