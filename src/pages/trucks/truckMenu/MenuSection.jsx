export const MenuSection = ({ sectionData }) => {
  const displayPrices = sectionData?.attributes?.displayPrices || false;
  const sectionTitle = sectionData.getElementsByTagName("title")[0];

  return (
    <div>
      <h3>{sectionTitle.value}</h3>
    </div>
  );
};
