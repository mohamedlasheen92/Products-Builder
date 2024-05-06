import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price } = product;

  return (
    <>
      <div className="border rounded-md p-2 flex flex-col space-y-2">
        <Image imageURL={imageURL} alt={title} className="rounded-md" />
        <h3>{title}</h3>
        <p>{txtSlicer(description, 100)}</p>

        <div className="flex items-center gap-1">
          <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>
          <span className="w-5 h-5 bg-yellow-600 rounded-full"></span>
          <span className="w-5 h-5 bg-red-600 rounded-full"></span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-blue-700 font-semibold text-lg">${price}</span>
          <Image
            imageURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={"Product Name"}
            className="w-10 h-10 rounded-full bg-cover"
          />
        </div>

        <div className="flex gap-2">
          <Button
            className=" bg-blue-700 hover:bg-blue-800"
            onClick={() => console.log("Clicked")}
            onBlur={() => console.log("On Blur")}
          >
            Edit
          </Button>
          <Button className=" bg-red-700 hover:bg-red-800">Delete</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
