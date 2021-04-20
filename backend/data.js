import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "gabr",
      email: "gabr@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "user",
      email: "gabruser@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image:
        "https://d1kvfoyrif6wzg.cloudfront.net/assets/images/78/main/none_293740682bead165f337101213f2fbf9_2937406.JPEG",
      price: 10,
      countInStock: 10,
      brand: "Nike",
      rating: 1,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image:
        "https://d1kvfoyrif6wzg.cloudfront.net/assets/images/78/main/none_293740682bead165f337101213f2fbf9_2937406.JPEG",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image:
        "https://d1kvfoyrif6wzg.cloudfront.net/assets/images/78/main/none_293740682bead165f337101213f2fbf9_2937406.JPEG",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image:
        "https://d1kvfoyrif6wzg.cloudfront.net/assets/images/78/main/none_293740682bead165f337101213f2fbf9_2937406.JPEG",
      price: 78,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p1.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
