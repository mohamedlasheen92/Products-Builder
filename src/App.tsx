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
import toast, { Toaster } from "react-hot-toast";

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
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState<IProduct[]>(productsList)
  const [tempColors, setTempColors] = useState<string[]>([])
  const [errors, setErrors] = useState<IValidationInputs>({title: "", description: "", imageURL: "", price: ""})
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)


  
  
  // ***** Handler *****
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const closeDeleteModal = () => setIsOpenDeleteModal(false);
  const openEditModal = () => setIsOpenEditModal(true);
  const openDeleteModal = () => setIsOpenDeleteModal(true);

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
    toast(`"${title}" Added Successfully!`, {
      icon: "✔",
      style: {
        backgroundColor: "#5cb85c",
        color: "#fff",
        fontWeight: "500",
      },
    });
    
  };
  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, description, imageURL, price } = productToEdit;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    // const hasErrors = Object.values(errors).some(value => value !== "")
    const hasErrors = Boolean(
      errors.title || errors.description || errors.imageURL || errors.price
    );

    if (hasErrors) {
      setErrors(errors);
      return;
    }

    console.log("SEND DATA TO THE SERVER.");

    const edtitProducts = [...products]
    edtitProducts[productToEditIndex] = {...productToEdit,colors: productToEdit.colors.concat(tempColors)}
    setProducts(edtitProducts)
    
    

    setProductToEdit(defaultProduct);
    setTempColors([]);
    closeEditModal();
    toast(`"${title}" Edited Successfully!`, {
      icon: "✍️",
      style: {
        backgroundColor: "#5d4fd1",
        color: "#fff",
        fontWeight: "500",
      },
    });
  };
  const onDeleteHandler = () => {
    console.log(productToEdit.id);
    const filteredProducts = products.filter(({ id: productID }) => productID !== productToEdit.id)
    setProducts(filteredProducts)
    closeDeleteModal()
    toast(`"${productToEdit.title}" Successfully Removed.`, {
      icon: "👋",
      style: {
        backgroundColor: "#b91c1c",
        color: "#fff",
        fontWeight: "500",
      },
    });
  };

  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };
  const onCancelEdit = () => {
    setProductToEdit(productToEdit);
    closeEditModal();
  };

  
  // ***** Render *****
  const rederProductsList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      setProductToEditIndex={setProductToEditIndex}
      idx={idx}
      openDeleteModal={openDeleteModal}
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
      if (productToEdit.colors.includes(color)) {
        setProductToEdit({ ...productToEdit , colors: productToEdit.colors.filter(co => co !== color)});
        return
      }
        setTempColors((prev) => [...prev, color]);
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
      <main className="container my-10">
        <div className="text-center">
          <Button
            className="bg-blue-700 hover:bg-blue-800 text-white max-w-52 mb-10 mx-auto py-3"
            onClick={openModal}
          >
            Build a Product
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
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
            onSubmit={(event) => onSubmitEditHandler(event)}
          >
            {renderProductEditWithErrorMsg("title", "Product Title", "title")}
            {renderProductEditWithErrorMsg(
              "description",
              "Product Description",
              "description"
            )}
            {renderProductEditWithErrorMsg(
              "imageURL",
              "Product Image URL",
              "imageURL"
            )}
            {renderProductEditWithErrorMsg("price", "Product Price", "price")}

            <Select
              selected={productToEdit.category}
              setSelected={(selectedCategory) =>
                setProductToEdit({
                  ...productToEdit,
                  category: selectedCategory,
                })
              }
            />

            <div className="flex items-center flex-wrap gap-1">
              {renderModalColors}
            </div>
            <div className="flex items-center flex-wrap gap-1">
              {tempColors.concat(productToEdit.colors).map((tempColor) => {
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
                onClick={() => onCancelEdit()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* DELETE PRODUCT MODAL */}
        <Modal
          isOpen={isOpenDeleteModal}
          closeModal={closeDeleteModal}
          title="Warning: Delete Product"
          description={`Deleting "${productToEdit.title}" will permanently remove it from your store. Are you sure you want to proceed?`}
        >
          <div className="flex items-center space-x-3">
            <Button
              className="bg-red-700 hover:bg-red-800 text-white"
              onClick={() => onDeleteHandler()}
            >
              Yes, Delete
            </Button>
            <Button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
              onClick={() => closeDeleteModal()}
            >
              Cancel
            </Button>
          </div>
        </Modal>

        <Toaster />
      </main>
    </>
  );
};

export default App;
