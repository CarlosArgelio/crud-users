import { createUserSchema, updateUserSchema, idSchema } from "./users";

export default {
    'users': {
        idSchema,
        createUserSchema,
        updateUserSchema
    }
}