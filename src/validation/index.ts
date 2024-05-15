import { IValidationInputs } from "../interfaces";

/**
 * Validates product information for title, description, image URL, and price.
 *
 * @param {IValidationInputs} data - The product data to validate.
 *   @property {string} title - The product title.
 *   @property {string} description - The product description.
 *   @property {string} imageURL - The product image URL.
 *   @property {number} price - The product price.
 * @returns {IValidationErrors} An object containing validation errors for each field.
 *   @property {string} title - Error message for title validation (empty string if valid).
 *   @property {string} description - Error message for description validation (empty string if valid).
 *   @property {string} imageURL - Error message for image URL validation (empty string if valid).
 *   @property {string} price - Error message for price validation (empty string if valid).
 */

export const productValidation = ({title, description, imageURL, price}: IValidationInputs) => {
  
  const errors: IValidationInputs = {
    title: "",
    description: "",
    imageURL: "",
    price: ""
  }

  const isValidImgURL = /https?:\/\/[^\s]+?\.(?:jpg|jpeg|png|gif|bmp)(?:\?[^?]*)?/g.test(imageURL);

  if (!title.trim() || title.length < 10 || title.length > 40) {
    errors.title = "Product title must be between 10 and 40 characters!"
  }
  if (!description.trim() || description.length < 10 || description.length > 800) {
    errors.description = "Product description must be between 10 and 800 characters!"
  }
  if (!description.trim() || !isValidImgURL) {
    errors.imageURL = "Valid image URL is required"
  }
  if (!price.trim() || isNaN(Number(price))) {
    errors.price = "Valid price is required!";
  }

  return errors;
  


}