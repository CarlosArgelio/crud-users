import { UserService } from "../services/users";
import { ControllersDefault } from "./controllers";
import boom from "@hapi/boom";

export class UserController implements ControllersDefault {
    constructor(
        private readonly services: UserService = new UserService()
    ) {}
    
    findAll() {
        const users = this.services.findAll();
        if (users.length === 0) throw boom.notFound('user not found')
        return users;
    }
    findOne(id: string) {
        const user = this.services.findOne(id);
        if (!user) throw boom.notFound('user not found')
        return user;
    }
    create(user: any) {
        return this.services.create(user);
    }
    update(id: string, changes: any) {
        const user = this.services.findOne(id);
        if (!user) throw boom.notFound('user not found')
        return this.services.update(id, changes);
    }
    delete(id: string) {
        const user = this.services.findOne(id);
        if (!user) throw boom.notFound('user not found')
        const userDelete = this.services.delete(id);
        return userDelete;
    }
}