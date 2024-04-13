import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export const validatorHandler = (Dtos, property) => {
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