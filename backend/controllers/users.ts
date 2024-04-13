import { UserService } from "../services/users";

export class UserController implements ControllersDefault {
    constructor(private readonly services: UserService) {}
    findAll() {}
    findOne(id: string) {}
    create(user: any) {}
    update(id: string, changes: any) {}
    delete(id: string) {}
}