import { Router } from "express";
import { sample_jobs } from "../data";
import asyncHandler from "express-async-handler";
import { jobModel } from "../models/job.model";
const router = Router();


router.get("/seed", asyncHandler(
    async (req, res) => {
        // console.log("SEED");
        const jobCount = await jobModel.countDocuments();
        if(jobCount > 0) {
            res.send("Seed is already done");
            return;
        }
        await jobModel.create(sample_jobs);
        // res.send(sample_jobs);
    }
))

router.get("/", asyncHandler(
    async (req, res) => {
        const jobs = await jobModel.find();
        res.send(jobs);
    }
))


router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const jobs = sample_jobs
        .filter(jobs => jobs.jobName.toLowerCase()
        .includes(searchTerm.toLowerCase()));
        res.send(jobs)
    }
))

router.get("/filter/:filterTerm", (req, res) => {
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
});


export default router;