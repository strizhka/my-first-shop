// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: number;
//   images: string[];
// }

// interface ProductCardProps {
//   product: Product;
// }

// function ProductCard(props: ProductCardProps) {
//   const { product } = props;

//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={product.images[0]} />
//       <Card.Body>
//         <Card.Title>{product.title}</Card.Title>
//         <Card.Text>{product.description}</Card.Text>
//         <Button variant="primary">Add to Cart</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProductCard;

import React from "react";
import { Button, Card } from "react-bootstrap";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={product.images[1]} /> */}
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
