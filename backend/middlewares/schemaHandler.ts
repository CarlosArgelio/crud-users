import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

enum Properties {
  BODY = 'body',
  QUERY = 'query',
  PATH = 'params'
}

export const validatorHandler = (Dtos: any, property: Properties) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = Dtos.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler