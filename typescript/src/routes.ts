import { Request, Response } from "express";
import  CreateCourseService  from "./CreateCourseService";

export function CreateCourse (request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJS", 
        duration: 10, 
        educator: "Rafael"
    });

    CreateCourseService.execute({
        name: "ReactJS", 
        educator: "Cassiane"
    });

    return response.send()
}