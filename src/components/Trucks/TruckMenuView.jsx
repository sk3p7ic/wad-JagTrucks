import { TruckMenuManagerProvider } from "../../contexts/TruckMenuContext";
import { MenuSection } from "./TruckMenu/MenuSection";

export const TruckMenuView = ({ menuData }) => {
  return (
    <div className="p-2 bg-amber-50 d-flex flex-column gap-4 font-nunito">
      <TruckMenuManagerProvider>
        {menuData.map((section, index) => (
          <MenuSection sectionData={section} key={index} />
        ))}
      </TruckMenuManagerProvider>
    </div>
  );
};
