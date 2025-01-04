const ShoppingCart = ({ items }) => {
  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
        <div>
          <ul>
            {items.map((i, index) => (
              <li key={index}>
                <h3>{i.name}</h3>
                <img src={i.img} alt={i.name}></img>
                <p>Price: {i.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
