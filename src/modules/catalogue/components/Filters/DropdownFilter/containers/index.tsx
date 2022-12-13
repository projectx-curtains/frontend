import { useState } from "react";
import DropdownFilter from "../components/index";
import { IDropdownFilterContainerProps } from "../interfaces";

const DropdownFilterContainer: React.FC<IDropdownFilterContainerProps> = ({
  title,
  children,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  const props = {
    title,
    isOpen,
    handleOpen,
    children,
  };
  return <DropdownFilter {...props} />;
};

export default DropdownFilterContainer;
