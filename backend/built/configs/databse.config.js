"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var dbConnect = function () {
    var mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error("MONGO_URI is not defined in the .env file.");
        return;
    }
    (0, mongoose_1.connect)(mongoUri, {})
        .then(function () { return console.log("Connection successful"); })
        .catch(function (error) { return console.error("MongoDB connection error:", error); });
};
exports.dbConnect = dbConnect;
