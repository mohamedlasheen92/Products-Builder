import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToEditIndex: (idx: number) => void;
  idx: number;
}

const ProductCard = ({ product, setProductToEdit, openEditModal,idx, setProductToEditIndex  }: IProps) => {
  // *** STATE ***
  const { title, description, imageURL, price, colors, category } = product;

  // *** Handler ***
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(idx);
    // console.log(product);
  };

  // *** RENDER ***
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <>
      <div className="max-w-sm border rounded-md p-2 flex flex-col space-y-2 mx-auto">
        <Image
          imageURL={imageURL}
          alt={title}
          className="rounded-md h-52 w-full object-cover"
        />
        <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
        <p className="text-sm text-gray-600 break-all">
          {txtSlicer(description)}
        </p>

        <div className="flex items-center gap-1">{renderProductColors}</div>

        <div className="flex justify-between items-center">
          <span className="text-blue-700 font-semibold text-lg">${price}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div className="flex gap-2 ">
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button className="text-white bg-red-700 hover:bg-red-800">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
