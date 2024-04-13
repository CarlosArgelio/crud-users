import e, { Router, Request, Response, NextFunction } from "express";
import { UserController } from "./../controllers";

const users = Router();

const findAll = (req: Request, res: Response, next: NextFunction) => {
    try {
        const controller = new UserController()
        const users = controller.findAll()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

const findOne = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params 
    try {
        const controller = new UserController()
        const user = controller.findOne(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const create = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req
    try {
        const controller = new UserController()
        const user = controller.create(body)
        res.json(user)   
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
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const remove = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    try {
        const controller = new UserController()
        const user = controller.delete(id)
        res.json(user)   
    } catch (error) {
        next(error)
    }
}

users.get("/", findAll)
users.post("/", create)
users.get("/:id", findOne)
users.put("/:id", update)
users.delete("/:id", remove)

export { users }