import { FakerData } from "./data";

const { users } = new FakerData();

export class UserService {
    findAll() {
        return users;
    }
    findOne(id: string) {
        return users.find(user => user.id === id);
    }
    create(user: any) {
        const id = (users.length + 1).toString();
        const newUser = {
            ...user,
            id,
            }
        users.push(newUser);
        return newUser
    }
    update(id: string, changes: any) {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error('User not found');
        }
        users[index] = {
            ...users[index],
            ...changes
        }
        return users[index];
    }
    delete(id: string) {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error('User not found');
        }
        users.splice(index, 1);
    }
}