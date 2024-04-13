import { users } from "./users";

export const networks = (app: any) => {
    app.use('/users', users)
}