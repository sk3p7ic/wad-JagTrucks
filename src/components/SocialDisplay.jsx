import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";

const size = 30;

export const TruckSocial = ({ siteName, url }) => {
  let elem;
  switch (siteName.toLowerCase()) {
    case "facebook":
      elem = <FaFacebook size={size} />;
      break;
    case "twitter":
      elem = <FaTwitter size={size} />;
      break;
    case "website":
      elem = <FaLink size={size} />;
      break;
    case "default":
      elem = <FaLink size={size} />;
      break;
  }
  return (
    <a href={url} className="text-dark">
      {elem}
    </a>
  );
};
