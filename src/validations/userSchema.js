import joi from "joi";

// register form validation schema
export const registerSchema = joi.object({
  username: joi.string().trim().required().messages({
    "string.empty": "validation.username_empty",
    "any.required": "validation.username_empty",
  }),
  email: joi
    .string()
    .trim()
    .email({ tlds: { allow: false } })
    .messages({
      "string.email": "validation.invalid_email",
      "string.empty": "validation.invalid_email",
    }),
  password: joi.string().trim().required().messages({
    "string.empty": "validation.password_empty",
    "any.required": "validation.password_empty",
  }),
  password2: joi
    .string()
    .trim()
    .required()
    .valid(joi.ref("password"))
    .messages({
      "string.empty": "validation.password2_empty",
      "any.required": "validation.password2_empty",
      "any.only": "validation.password2_not_same",
    }),
});

// login form validation schema
export const loginSchema = joi.object({
  email: joi
    .string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "validation.invalid_email",
      "string.empty": "validation.invalid_email",
      "any.required": "validation.invalid_email",
    }),
  password: joi.string().trim().required().messages({
    "string.empty": "validation.password_empty",
    "any.required": "validation.password_empty",
  }),
});

// change password form validation schema
export const changePasswordSchema = joi.object({
  username: joi.string().trim().required().messages({
    "string.empty": "validation.username_empty",
    "any.required": "validation.username_empty",
  }),
  oldPassword: joi.string().trim().required().messages({
    "string.empty": "validation.password_empty",
    "any.required": "validation.password_empty",
  }),
  newPassword: joi.string().trim().required().messages({
    "string.empty": "validation.password_empty",
    "any.required": "validation.password_empty",
  }),
  newPassword2: joi
    .string()
    .trim()
    .required()
    .valid(joi.ref("newPassword"))
    .messages({
      "string.empty": "validation.password2_empty",
      "any.required": "validation.password2_empty",
      "any.only": "validation.password2_not_same",
    }),
});
