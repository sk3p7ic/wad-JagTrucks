export const MenuItem = ({ itemData }) => {
  const formatPrice = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <h3>{itemData.name}</h3>
        {itemData.doDisplayPrice && <h5>{formatPrice(itemData.price)}</h5>}
      </div>
      <p>{itemData?.description ?? ""}</p>
    </div>
  );
};
