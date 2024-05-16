import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productsList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct, IValidationInputs } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";

const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  // ***** State *****
  const [errors, setErrors] = useState<IValidationInputs>({title: "", description: "", imageURL: "", price: ""})
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [isOpen, setIsOpen] = useState(false);

  // ***** Handler *****
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: ""
    })
    
    
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {title, description, imageURL, price}= product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    console.log(errors);

    const hasError = Object.values(errors).some(value => value !== "")
    if (hasError) {
      setErrors(errors)
      return
    }

    console.log("SEND DATA TO THE SERVER.");


    
  };
  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };

  // ***** Render *****
  const rederProductsList = productsList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map(
    ({ id, label, name, type }) => {
      return (
        <div key={id} className="flex flex-col">
          <label
            htmlFor={id}
            className="nb-[2px] text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <Input
            type={type}
            name={name}
            value={product[name]}
            onChange={(event) => onChangeHandler(event)}
          />
          <ErrorMsg
            message={errors[name]}
          />
        </div>
      );
    }
  );

  return (
    <>
      <main className="container">
        <Button className="bg-blue-700 hover:bg-blue-800" onClick={openModal}>
          Add a Product
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rederProductsList}
        </div>
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Add a New Product"
        >
          <form
            className="flex flex-col space-y-3"
            onSubmit={(event) => onSubmitHandler(event)}
          >
            {renderFormInputList}
            <div className="flex items-center space-x-3">
              <Button className="bg-blue-700 hover:bg-blue-800">Submit</Button>
              <Button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  );
};

export default App;
