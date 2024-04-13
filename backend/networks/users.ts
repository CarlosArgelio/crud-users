import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "./../controllers";
import middleares from "./../middlewares";
import schemas from "./../schemas";

// fix
import { Properties } from "./../middlewares/schemaHandler";

const { success, schemaHandler } = middleares
const { createUserSchema, updateUserSchema, idSchema } = schemas.users

const users = Router();

const findAll = (req: Request, res: Response, next: NextFunction) => {
    try {
        const controller = new UserController()
        const users = controller.findAll()
        success(req, res, users, 200)
    } catch (error) {
        next(error)
    }
}

const findOne = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params 
    try {
        const controller = new UserController()
        const user = controller.findOne(id)
        success(req, res, user, 200)
    } catch (error) {
        next(error)
    }
}

const create = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req
    try {
        const controller = new UserController()
        const user = controller.create(body)
        success(req, res, user, 201)
    } catch (error) {
        next(error)
    }
}

const update = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const changes = req.body

    try {
        const controller = new UserController()
        const user = controller.update(id, changes)
        success(req, res, user, 200)
    } catch (error) {
        next(error)
    }
}

const remove = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    try {
        const controller = new UserController()
        controller.delete(id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

users.get("/", findAll)
users.post("/", schemaHandler(createUserSchema, Properties.BODY), create)
users.get("/:id", schemaHandler(idSchema, Properties.PATH), findOne)
users.put("/:id", schemaHandler(idSchema, Properties.PATH), schemaHandler(updateUserSchema, Properties.BODY), update)
users.delete("/:id", schemaHandler(idSchema, Properties.PATH), remove)

export { users }