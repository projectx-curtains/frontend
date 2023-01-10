import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IAccordionItemProps } from "../interfaces";
import {
  styleAccordion,
  styleAccordionSummary,
} from "../mocks/stylesAccordion";

import style from "../styles/index.module.scss";

const AccordionItem: React.FC<IAccordionItemProps> = ({ summary, details }) => {
  return (
    <Accordion
      className={style["accordion-item"]}
      sx={styleAccordion}>
      <AccordionSummary
        expandIcon={<ChevronRightIcon />}
        sx={styleAccordionSummary}>
        <Typography className={style["summary"]}>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionItem;
