"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var data_1 = require("./data");
var jobs_router_1 = __importDefault(require("./routers/jobs.router"));
var dotenv_1 = __importDefault(require("dotenv"));
var databse_config_1 = require("./configs/databse.config");
(0, databse_config_1.dbConnect)();
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["https://cuvette-clone.onrender.com/"]
}));
app.use("/api/jobs", jobs_router_1.default);
app.get("/api/jobs", function (req, res) {
    res.send(data_1.sample_jobs);
});
app.get("/api/jobs/search/:searchTerm", function (req, res) {
    var searchTerm = req.params.searchTerm;
    var jobs = data_1.sample_jobs
        .filter(function (jobs) { return jobs.jobName.toLowerCase()
        .includes(searchTerm.toLowerCase()); });
    res.send(jobs);
});
app.get("/api/jobs/filter/:filterTerm", function (req, res) {
    console.log("WORKS");
    var filterTerm = req.params.filterTerm;
    // params.filter.split("&&")[0], Number((params.filter.split("&&")[1])) * 10000
    var experience = filterTerm.split("&&")[0];
    var salary = Number(filterTerm.split("&&")[1]) * 10000;
    var job = data_1.sample_jobs.filter(function (job) {
        var experienceCondition = experience === "less" ? job.experience < 3 : job.experience >= 3;
        var salaryCondition = job.jobOffer[0] >= salary;
        console.log(salaryCondition, salary, job.jobOffer[0]);
        return experienceCondition && salaryCondition;
    });
    res.send(job);
    console.log(job);
});
var port = 5001;
app.listen(port, function () {
    console.log("Served on port" + port);
});
