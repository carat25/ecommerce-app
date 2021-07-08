

const ProductVariant = ({variants}) => {
  return (
    <div>
      <select>
        {variants.map((variant) => <option>{variant}</option>)}
      </select>
    </div>
  );
};

export default ProductVariant;
