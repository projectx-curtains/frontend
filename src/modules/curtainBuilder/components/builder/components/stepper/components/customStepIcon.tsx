import DoneIcon from "@mui/icons-material/Done";
import { StepIconProps } from "@mui/material/StepIcon";
import { STEPPER_ICONS } from "../constants";

const CustomStepIcon = (props: StepIconProps) => {
  const { completed, className } = props;

  return (
    <div className={className}>
      {completed ? (
        <DoneIcon />
      ) : (
        <span>{STEPPER_ICONS[String(props.icon)]}</span>
      )}
    </div>
  );
};

export default CustomStepIcon;
