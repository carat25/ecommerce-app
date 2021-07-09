

const ProductVariant = ({variants, onSelect}) => {
  return (
    <div>
      <select onInput={onSelect}>
        {variants.map((variant) => <option key={variant}>{variant}</option>)}
      </select>
    </div>
  );
};

export default ProductVariant;
