import './styles.css';

const ProductCard = ({ image, name, price, description }) => {
  const handleBuyNow = () => {
    console.log(`Product Name: ${name}`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
      <button onClick={handleBuyNow} className="buy-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
