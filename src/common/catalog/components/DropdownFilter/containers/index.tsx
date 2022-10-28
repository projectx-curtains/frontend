import { useState } from "react";
import DropdownFilter from "../components/index";
import { IDropdownFilterContainerProps } from "../interfaces";

const DropdownFilterContainer: React.FC<IDropdownFilterContainerProps> = ({
  id,
  title,
  itemsFilter,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  const props = {
    id,
    title,
    itemsFilter,
    isOpen,
    handleOpen,
  };
  return <DropdownFilter {...props} />;
};
export default DropdownFilterContainer;
