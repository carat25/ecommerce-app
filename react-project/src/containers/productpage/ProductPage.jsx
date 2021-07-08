import { useEffect, useState } from "react";
import ProductDetails from "../../components/productdetails";
import { getProductById, getProducts } from "../../services/Products";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {

    const getData = async () => {
        let product = await getProductById(id);
        setProduct(product);
    };

    getData();
  }, []);

  return product === null ? null : (
    <div>
      <ProductDetails
        key={product.id}
        img={product.imageURL}
        name={product.name}
        price={product.price}
        description={product.description}
        variants={product.variants}
      />
    </div>
  );
};

export default ProductPage;
