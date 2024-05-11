import { useParams } from "react-router-dom";
import { getProductById } from "../api/appApi";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(parseInt(id!, 10));
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
