import { model, Schema } from "mongoose";

export interface Jobs {
    
    jobName:string;
    companyName:string;
    city:string;
    country:string;
    tags:string[];
    jobOffer:number[];
    start:string;
    opening:number;
    experience:number;
    
}

export const JobSchema = new Schema<Jobs>(
    {
        jobName : {type : String, required : true},
        companyName : {type : String, required : true},
        city : {type : String, required : true},
        country : {type : String, required : true},
        tags : {type : [String], required : true},
        jobOffer : {type : [Number], required : true},
        start : {type : String, required : true},
        opening : {type : Number, required : true},
        experience : {type : Number, required : true},
    }, {
        toJSON: {
            virtuals : true
        },
        toObject :{
            virtuals : true
        },
        timestamps : true
    }
)

export const jobModel = model<Jobs>('Jobs', JobSchema)