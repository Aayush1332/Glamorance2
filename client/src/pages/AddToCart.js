const AddToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      // If item already exists, increase the quantity
      increaseQuantity(product._id);
      toast.success('Item added to cart');
    } else {
      // If item doesn't exist, add it to the cart with quantity 1
      const newItem = { ...product, quantity: 1 };
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success('Item added to cart');
    }
  };

  export default AddToCart;