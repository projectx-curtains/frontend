import { TooltipProps } from "@mui/material/Tooltip";

export interface ITooltipField {
  title: string;
  text: React.ReactNode;
  placement?: TooltipProps["placement"];
}
