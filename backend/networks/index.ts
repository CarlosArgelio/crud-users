import { users } from "./users";

export const networks = (app) => {
    app.use('/users', users)
}