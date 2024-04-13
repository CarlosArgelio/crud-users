import { UserService } from "../services/users";

export class UserController implements ControllersDefault {
    constructor(private readonly services: UserService) {}
    findAll() {
        return this.services.findAll();
    }
    findOne(id: string) {
        return this.services.findOne(id);
    }
    create(user: any) {
        return this.services.create(user);
    }
    update(id: string, changes: any) {
        return this.services.update(id, changes);
    }
    delete(id: string) {
        return this.services.delete(id);
    }
}