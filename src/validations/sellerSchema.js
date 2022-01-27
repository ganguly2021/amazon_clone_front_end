import joi from "joi";

// register new seller validation schema
export const registerSellerSchema = joi.object({
  companyName: joi.string().trim().required().messages({
    "string.empty": "validation.seller.company_name_empty",
    "any.required": "validation.seller.company_name_empty",
  }),
  companyDescription: joi.string().trim().required().messages({
    "string.empty": "validation.seller.description_empty",
    "any.required": "validation.seller.description_empty",
  }),
});
