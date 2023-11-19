export const formatPrice = (cents) => {
  return (cents).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const formatToppings = (arr) => {
  const joined = arr.join(', ');
  return joined.charAt(0).toUpperCase() + joined.slice(1);
}
