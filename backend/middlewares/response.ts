import { Request, Response } from "express";

type Message = object | Array<any> | string

export const success = (req: Request, res: Response, message: Message, statusCode = 200) => {
    const response = {
        statusCode,
        data: message
    }
    
    res.status(statusCode).json(response)
}

export const error = (_req: Request, res: Response, message: Message, statusCode = 500) => {
    const response = {
        statusCode,
        error: message
    }

    res.status(statusCode).json(response)
}