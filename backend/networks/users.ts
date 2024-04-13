import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "./../controllers";

const users = Router();

const findAll = (req: Request, res: Response, next: NextFunction) => {
    const controller = new UserController()
    const users = controller.findAll()
    res.json(users)
}

const findOne = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params 

    const controller = new UserController()
    const user = controller.findOne(id)
    res.json(user)
}

const create = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req
    const controller = new UserController()
    const user = controller.create(body)
    res.json(user)
}

const update = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const changes = req.body

    const controller = new UserController()
    const user = controller.update(id, changes)
    res.json(user)
}

const remove = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const controller = new UserController()
    const user = controller.delete(id)
    res.json(user)
}

users.get("/", findAll)
users.post("/", create)
users.get("/:id", findOne)
users.put("/:id", update)
users.delete("/:id", remove)

export { users }