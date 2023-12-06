import bcrypt from "bcryptjs";

const data = {
  // users: [
  //   {
  //     name: "Roma",
  //     email: "haskerboe@gmail.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: true,
  //   },
  //   {
  //     name: "Remboy",
  //     email: "remboy@gmail.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: false,
  //   },
  // ],
  products: [
    {
      // _id: "1",
      name: "Iphone 13 Pro Max",
      slug: "iphone-13-pro-max",
      category: "Iphone",
      image: "/images/iphone13pm.jpg", // 679px × 829px
      price: 900,
      countInStock: 10,
      brand: "Apple",
      rating: 4.5,
      numReviews: 10,
      description: "512 GB",
    },
    {
      // _id: "1",
      name: "Iphone 14 Pro Max",
      slug: "iphone-14-pro-max",
      category: "Iphone",
      image: "/images/iphone14pm.jpg", // 679px × 829px
      price: 1000,
      countInStock: 0,
      brand: "Apple",
      rating: 4,
      numReviews: 20,
      description: "128GB",
    },
    {
      // _id: "1",
      name: "Iphone 15 Pro Max",
      slug: "iphone-15-pro-max",
      category: "Iphone",
      image: "/images/iphone15pm.jpg", // 679px × 829px
      price: 1200,
      countInStock: 20,
      brand: "Apple",
      rating: 5,
      numReviews: 25,
      description: "512GB",
    },
    {
      // _id: "1",
      name: "Samsung Gallaxy S23 Ultra",
      slug: "samsung-gallaxy-s23",
      category: "Smartphone",
      image: "/images/samsungs23ulltra.jpg", // 679px × 829px
      price: 1000,
      countInStock: 5,
      brand: "Samsung",
      rating: 4.5,
      numReviews: 40,
      description: "Samsung brand with pen",
    },
    {
      // _id: "1",
      name: "Samsung Gallaxy S22 Ultra",
      slug: "samsung-gallaxy-s22",
      category: "Smartphone",
      image: "/images/samsungs22ultra.jpg", // 679px × 829px
      price: 900,
      countInStock: 100,
      brand: "Samsung",
      rating: 5,
      numReviews: 10,
      description: "Samsung brand with pen 2022",
    },
  ],
};
export default data;
