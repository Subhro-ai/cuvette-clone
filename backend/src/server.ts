import express from "express";
import cors from "cors";
import { sample_jobs } from "./data";
import jobRouter from "./routers/jobs.router";
import dotenv from 'dotenv';
import { dbConnect } from "./configs/databse.config";

dbConnect();

dotenv.config();

const app = express();

app.use(cors({
    credentials:true,
    origin:[
        "https://66ec8d1f322d5d60ba131361--cuvette-clone-subhro.netlify.app"  ]
}));

app.use("/api/jobs", jobRouter)

app.get("/api/jobs", (req, res) => {
    res.send(sample_jobs);
})

app.get("/api/jobs/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const jobs = sample_jobs
    .filter(jobs => jobs.jobName.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(jobs)
})

app.get("/api/jobs/filter/:filterTerm", (req, res) => {
    console.log("WORKS");
    const filterTerm = req.params.filterTerm;
    // params.filter.split("&&")[0], Number((params.filter.split("&&")[1])) * 10000
    const experience = filterTerm.split("&&")[0];
    const salary = Number(filterTerm.split("&&")[1]) * 10000;
    const job = sample_jobs.filter(job => {
        const experienceCondition = experience === "less" ? job.experience < 3 : job.experience >= 3;
        const salaryCondition = job.jobOffer[0] >= salary;
        console.log(salaryCondition, salary, job.jobOffer[0]);
        return experienceCondition && salaryCondition;
        
      });
      res.send(job);
      console.log(job);
})

const port = 5001;
app.listen(port, () => {
    console.log("Served on port" + port);
})