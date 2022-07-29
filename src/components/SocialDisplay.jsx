import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";

export const TruckSocial = ({ siteName, url }) => {
  let elem;
  switch (siteName.toLowerCase()) {
    case "facebook":
      elem = <FaFacebook />;
      break;
    case "twitter":
      elem = <FaTwitter />;
      break;
    case "website":
      elem = <FaLink />;
      break;
    case "default":
      elem = <FaLink />;
      break;
  }
  return <a href={url}>{elem}</a>;
};
