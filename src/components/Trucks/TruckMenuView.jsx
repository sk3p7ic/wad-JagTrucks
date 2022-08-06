import { TruckMenuManagerProvider } from "../../contexts/TruckMenuContext";
import { MenuSection } from "./TruckMenu/MenuSection";

export const TruckMenuView = ({ menuData }) => {
  return (
    <TruckMenuManagerProvider>
      {menuData.map((section, index) => (
        <MenuSection sectionData={section} key={index} />
      ))}
    </TruckMenuManagerProvider>
  );
};
