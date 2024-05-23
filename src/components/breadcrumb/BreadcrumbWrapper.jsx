import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const BreadcrumbWrapper = ({ title }) => {
  const location = useLocation();

  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbItems = pathnames.map((value, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        label: value.charAt(0).toUpperCase() + value.slice(1),
        path,
        active: index === pathnames.length - 1,
      };
    });

    return [
      {
        label: <FaHome size={20} color="#333F50" />,
        path: "/",
        active: location.pathname === "/",
      },
      ...breadcrumbItems,
    ];
  };

  const breadcrumbItems = generateBreadcrumbItems();

  if (breadcrumbItems.length > 0) {
    breadcrumbItems[breadcrumbItems.length - 1].label = title;
  }

  return <Breadcrumb items={breadcrumbItems} />;
};

export default BreadcrumbWrapper;
