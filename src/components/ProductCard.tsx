import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <>
      <div className="max-w-sm border rounded-md p-2 flex flex-col space-y-2 mx-auto">
        <Image imageURL={imageURL} alt={title} className="rounded-md" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{txtSlicer(description)}</p>

        <div className="flex items-center gap-1">
          <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>
          <span className="w-5 h-5 bg-yellow-600 rounded-full"></span>
          <span className="w-5 h-5 bg-red-600 rounded-full"></span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-blue-700 font-semibold text-lg">${price}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
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
