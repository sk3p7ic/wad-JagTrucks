import { MenuSection } from "./truckMenu/MenuSection";

const TruckMenu = ({ menuData }) => {
  return (
    <div className="d-flex flex-column gap-4">
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
