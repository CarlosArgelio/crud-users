import { NextFunction, Request, Response } from "express";

export const logErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log('logErrors')
    console.log(err);
    next(err);
  }
  
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log('errorHandler')
    res.status(500).json({
      message: err.message,
      stack: err.stack
    });
  }
  
export const boomErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    } else {
      next(err);
    }
  }