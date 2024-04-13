import { faker } from "@faker-js/faker";

export class FakerData {
    public users: Array<any>
    constructor() {
        this.users = []

        for (let i = 0; i < 10; i++) {
            this.users.push({
                'name': faker.person.fullName(),
                'lastName': faker.person.lastName(),
                'email': faker.internet.email(),
                'phone': faker.phone.number(),
            }
            )
        }
    }
}