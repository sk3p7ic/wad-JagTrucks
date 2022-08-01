import { MenuSection } from "./truckMenu/MenuSection";

const TruckMenu = ({ menuData }) => {
  console.log("Am running with", menuData);
  return (
    <div>
      {menuData.children.map((section, index) => (
        <MenuSection sectionData={section} key={`menu-${index}`} />
      ))}
    </div>
  );
};

export const TruckMenuView = ({ menuData }) => {
  return (
    <>
      {menuData?.children !== undefined ? (
        <TruckMenu menuData={menuData} />
      ) : (
        <div>Nothing to show...</div>
      )}
    </>
  );
};
