import Joi from "joi";

// validate upperCase on first letter
const name = Joi.string()
const lastName = Joi.string()
const email = Joi.string().email()
const phone = Joi.string()

const id = Joi.string()

const createUserSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    email: email.required(),
    phone: phone.required()
})

const updateUserSchema = Joi.object({
    name,
    lastName,
    email,
    phone  
})

const idSchema = Joi.object({
    id: id.required()
})

export {
    idSchema,
    createUserSchema,
    updateUserSchema
}