"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobModel = exports.JobSchema = void 0;
var mongoose_1 = require("mongoose");
exports.JobSchema = new mongoose_1.Schema({
    jobName: { type: String, required: true },
    companyName: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    tags: { type: [String], required: true },
    jobOffer: { type: [Number], required: true },
    start: { type: String, required: true },
    opening: { type: Number, required: true },
    experience: { type: Number, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.jobModel = (0, mongoose_1.model)('Jobs', exports.JobSchema);
