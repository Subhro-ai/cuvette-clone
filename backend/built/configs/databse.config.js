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
    (0, mongoose_1.connect)(process.env.MONGO_URI, {}).then(function () { return console.log("Connection succesful"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
