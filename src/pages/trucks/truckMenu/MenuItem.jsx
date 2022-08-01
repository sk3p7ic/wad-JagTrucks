const MenuItem = ({ itemData, displayPrices }) => {
  const itemName = itemData.getElementsByTagName("itemName")[0];
  const itemPrice = displayPrices
    ? itemData.getElementsByTagName("itemPrice")[0]
    : "";
  const itemDesc = itemData?.getElementsByTagName("itemDesc")[0] ?? "";

  return (
    <div className="px-4">
      <div
        className={`d-flex flex-row justify-content-between ${
          displayPrices ? "border-bottom border-dark" : ""
        }`}
      >
        <h3 className="font-nunito">
          <strong>{itemName.value}</strong>
        </h3>
        <h3 className="font-nunito">{itemPrice?.value ?? ""}</h3>
      </div>
      <p className="font-nunito">{itemDesc?.value ?? ""}</p>
    </div>
  );
};

export const MenuItemList = ({ itemData, displayPrices }) => {
  const _displayPrices = displayPrices === true || displayPrices === "true";
  return (
    <div>
      {itemData.children.map((item, index) => (
        <MenuItem itemData={item} displayPrices={_displayPrices} key={index} />
      ))}
    </div>
  );
};
