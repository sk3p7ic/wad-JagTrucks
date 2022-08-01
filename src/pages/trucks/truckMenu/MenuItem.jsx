const MenuItem = ({ itemData, displayPrices }) => {
  const itemName = itemData.getElementsByTagName("itemName")[0];
  const itemPrice = displayPrices
    ? itemData.getElementsByTagName("itemPrice")[0]
    : "";
  const itemDesc = itemData?.getElementsByTagName("itemDesc")[0] ?? "";

  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <h4>{itemName.value}</h4>
        <h4>{itemPrice?.value ?? ""}</h4>
      </div>
      <p>{itemDesc?.value ?? ""}</p>
    </div>
  );
};

export const MenuItemList = ({ itemData, displayPrices }) => {
  const _displayPrices = displayPrices ?? false;
  return (
    <div>
      {itemData.children.map((item, index) => (
        <MenuItem itemData={item} displayPrices={_displayPrices} key={index} />
      ))}
    </div>
  );
};
