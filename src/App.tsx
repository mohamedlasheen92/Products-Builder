import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputsList, productsList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct, IValidationInputs } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { TInputForm } from "./types";

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
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState<IProduct[]>(productsList)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [errors, setErrors] = useState<IValidationInputs>({title: "", description: "", imageURL: "", price: ""})
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)


  
  // ***** Handler *****
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openEditModal = () => setIsOpenEditModal(true);

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
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: ""
    })

    
    
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {title, description, imageURL, price} = product
    
    
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    // const hasErrors = Object.values(errors).some(value => value !== "")
    const hasErrors = Boolean(errors.title || errors.description || errors.imageURL || errors.price)

    
    if (hasErrors) {
      setErrors(errors)
      return
    }

    console.log("SEND DATA TO THE SERVER.");
    setProducts(prev => [{ ...product, id: uuid(), colors: tempColors, category: selectedCategory }, ...prev])
    setProduct(defaultProduct)
    setTempColors([])
    closeModal()
    
  };
  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };

  // ***** Render *****
  const rederProductsList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
    />
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
            id={id}
            type={type}
            name={name}
            value={product[name]}
            onChange={(event) => onChangeHandler(event)}
          />
          <ErrorMsg message={errors[name]} />
        </div>
      );
    }
  );
  const renderModalColors = colors.map(color => {
    return <CircleColor key={color} color={color} onClick={() => {
      if (tempColors.includes(color)) {
        setTempColors(tempColors.filter(tempColor => tempColor !== color))
        return
      }
      setTempColors((prev) => [...prev, color])
    }}  />;
  })
  const renderProductEditWithErrorMsg = (id: string, label: string, name: TInputForm) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="nb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          id={id}
          type="text"
          name={name}
          value={productToEdit[name]}
          onChange={(event) => onChangeEditHandler(event)}
        />
        <ErrorMsg message={errors[name]} />
      </div>
    );
  }

  return (
    <>
      <main className="container">
        <Button className="bg-blue-700 hover:bg-blue-800" onClick={openModal}>
          Add a Product
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rederProductsList}
        </div>

        {/* ADD PRODUCT MODAL */}
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
            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="flex items-center flex-wrap gap-1">
              {renderModalColors}
            </div>
            <div className="flex items-center flex-wrap gap-1">
              {tempColors.map((tempColor) => {
                return (
                  <span
                    key={tempColor}
                    className="text-xs text-white p-1 rounded-md"
                    style={{ backgroundColor: tempColor }}
                  >
                    {tempColor}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center space-x-3">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                Submit
              </Button>
              <Button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* UPDATE PRODUCT MODAL */}
        <Modal
          isOpen={isOpenEditModal}
          closeModal={closeEditModal}
          title="Update This Product"
        >
          <form
            className="flex flex-col space-y-3"
            onSubmit={(event) => onSubmitHandler(event)}
          >
            {renderProductEditWithErrorMsg("title", "Product Title", "title")}
            {renderProductEditWithErrorMsg("description", "Product Description", "description")}
            {renderProductEditWithErrorMsg("imageURL", "Product Image URL", "imageURL")}
            {renderProductEditWithErrorMsg("price", "Product Price", "price")}

            

            <div className="flex items-center space-x-3">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                Submit
              </Button>
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
