import ProductCard from "./components/ProductCard";
import { productsList } from "./data";

const App = () => {
  // ***** Render
  const rederProductsList = productsList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {rederProductsList}
      </div>
    </>
  );
};

export default App;
