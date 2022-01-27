import joi from "joi";

// add new address form validation.address schema
export const newAddressSchema = joi.object({
  country: joi.string().trim().required().messages({
    "string.empty": "validation.address.country_empty",
    "any.required": "validation.address.country_empty",
  }),
  full_name: joi.string().trim().required().messages({
    "string.empty": "validation.address.full_name_empty",
    "any.required": "validation.address.full_name_empty",
  }),
  mobile_number: joi
    .string()
    .trim()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "validation.address.phone_number_invalid",
      "any.required": "validation.address.phone_number_invalid",
    }),
  pin_code: joi
    .string()
    .trim()
    .length(6)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "validation.address.pin_code_invalid",
      "any.required": "validation.address.pin_code_invalid",
    }),
  house_no: joi.string().trim().required().messages({
    "string.empty": "validation.address.house_no_empty",
    "any.required": "validation.address.house_no_empty",
  }),
  street: joi.string().trim().required().messages({
    "string.empty": "validation.address.street_empty",
    "any.required": "validation.address.street_empty",
  }),
  landmark: joi.string().trim().required().messages({
    "string.empty": "validation.address.landmark_empty",
    "any.required": "validation.address.landmark_empty",
  }),
  city: joi.string().trim().required().messages({
    "string.empty": "validation.address.city_empty",
    "any.required": "validation.address.city_empty",
  }),
  state: joi.string().trim().required().messages({
    "string.empty": "validation.address.state_empty",
    "any.required": "validation.address.state_empty",
  }),
  address_type: joi.string().trim().required().messages({
    "string.empty": "validation.address.address_type_empty",
    "any.required": "validation.address.address_type_empty"
  })
});
