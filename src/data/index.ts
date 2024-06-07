import { ICategory, IFormInput, IProduct } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productsList: IProduct[] = [
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "350",
    colors: [
      "#6C4AB6",
      "#FF6E31",
      "#000000",
      "#13005A",
      "#A31ACB",
      "#a855f7",
      "#84D2C5",
      "#2563eb",
    ],
    category: {
      name: "Nike",
      imageURL:
        "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://images.pexels.com/photos/11589801/pexels-photo-11589801.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "500000",
    colors: [],
    category: {
      name: "Cars",
      imageURL:
        "https://car-images.bauersecure.com/wp-images/4738/1752x1168/should_i_buy_an_electric_car.jpg?mode=max&quality=90&scale=down",
    },
  },
  {
    id: uuid(),
    title: "Men T-Shirt",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://static.pullandbear.net/2/photos/2024/V/0/2/p/3241/766/500/3241766500_1_1_3.jpg?t=1709299578074",
    price: "120000",
    colors: ["#6C4AB6", "#2563eb", "#1F8A70", "#000000", "#3C2A21"],
    category: {
      name: "T-Shirt",
      imageURL:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  },
  {
    id: uuid(),
    title: "Sleek Apple Workstation Setup",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://www.custompc.com/wp-content/sites/custompc/2023/06/Lion-Jonsbo-Mod-3-gaming-pc-setup-02.jpg",
    price: "1500",
    colors: [],
    category: {
      name: "PC Desktop",
      imageURL:
        "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
  {
    id: uuid(),
    title: "Furniture Styles",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://carolina-furniture.com/wp-content/uploads/2023/07/living.jpg",
    price: "6520",
    colors: ["#FF6E31", "#3C2A21", "#6C4AB6", "#CB1C8D", "#000000"],
    category: {
      name: "Funiture",
      imageURL:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid(),
    title: "Canon EOS R7",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
      "https://cdn.mos.cms.futurecdn.net/GXHa4PWwDPx7tGQG9MDQvK-1200-80.jpg",
    price: "6520",
    colors: ["#a855f7", "#2563eb", "#84D2C5"],
    category: {
      name: "Camera",
      imageURL:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
];
export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#1F8A70",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Nike",
    imageURL:
      "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageURL:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageURL:
      "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Cars",
    imageURL:
      "https://car-images.bauersecure.com/wp-images/4738/1752x1168/should_i_buy_an_electric_car.jpg?mode=max&quality=90&scale=down",
  },
  {
    id: uuid(),
    name: "Camera",
    imageURL:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];