import ProductCard from './component/ProductCard';

const App = () => {
  const products = [
    {
      image: 'bloommaxi.jfif',
      name: 'Bisaya Bloom Maxi',
      price: '₱1,299',
      description: 'Flowy floral maxi dress inspired by Mindanao blooms.',
    },
    {
      image: 'sunset wrap.jpg',
      name: 'Cebu Sunset Wrap',
      price: '₱999',
      description: 'Elegant wrap dress with warm sunset tones.',
    },
    {
      image: 'terno.jfif',
      name: 'Terno Chic Mini',
      price: '₱1,499',
      description: 'Modern twist on the classic terno silhouette.',
    },
    {
      image: 'gown.jpg',
      name: 'Sinulog Sparkle Gown',
      price: '₱2,299',
      description: 'Festive gown with sequins and vibrant colors.',
    },
    {
      image: 'sundress.avif',
      name: 'Island Breeze Sundress',
      price: '₱899',
      description: 'Lightweight sundress perfect for beach days.',
    },
    {
      image: 'mariaclara.jpg',
      name: 'Maria Clara Elegance',
      price: '₱1,899',
      description: 'Timeless formal dress with lace and classic charm.',
    },
  ];

  return (
    <div className="app">
      <h1><center>Mini E-Commerce Store</center></h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
