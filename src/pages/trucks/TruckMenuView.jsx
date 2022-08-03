import { MenuSection } from "./truckMenu/MenuSection";

const TruckMenu = ({ menuData }) => {
  return (
    <div className="p-2 d-flex flex-column gap-4 bg-amber-50 rounded-bottom">
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
