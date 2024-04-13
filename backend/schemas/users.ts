import Joi from "joi";

// validate upperCase on first letter
const name = Joi.string().min(3).max(8)
const lastName = Joi.string().min(3).max(8)
const email = Joi.string().email()
const phone = Joi.string()

const id = Joi.string().uuid({version: 'uuidv4'})

const createUser = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    email: email.required(),
    phone: phone.required()
})

const updateUser = Joi.object({
    name,
    lastName,
    email,
    phone  
})

export {
    id,
    createUser,
    updateUser
}