import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productsList } from "./data";
import Button from "./components/ui/Button";

const App = () => {
  // ***** State *****
  const [isOpen, setIsOpen] = useState(false);

  // ***** Handler *****
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // ***** Render *****
  const rederProductsList = productsList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

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
          <div className="flex items-center space-x-2">
            <Button className="bg-blue-700 hover:bg-blue-800">Submit</Button>
            <Button className="bg-gray-200 hover:bg-gray-400 text-black">
              Cancel
            </Button>
          </div>
        </Modal>
      </main>
    </>
  );
};

export default App;
