import { TInputForm } from "../types";

export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  label: string;
  name: TInputForm;
  type: string;
}

export interface IValidationInputs {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
