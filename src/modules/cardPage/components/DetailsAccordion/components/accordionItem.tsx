import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IAccordionItemProps } from "../interfaces";

import style from "../styles/index.module.scss";

const AccordionItem: React.FC<IAccordionItemProps> = ({ summary, details }) => {
  return (
    <Accordion
      sx={{
        maxWidth: "816px",
        padding: "0px",
        border: "none",
        "& .MuiButtonBase-root-MuiAccordionSummary-root": {
          padding: "0px",
        },
        "& .MuiPaper-root-MuiAccordion-root": {
          //----------------------------------не работает
          backgroundColor: "#F5F5F5",
        },
      }}>
      <AccordionSummary
        expandIcon={<ChevronRightIcon />}
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
          "& .MuiAccordionSummary-root": {
            padding: "0",
          },
          "& .MuiPaper-root-MuiAccordion-root": {
            //-------------------------------не работает
            backgroundColor: "#F5F5F5",
          },
        }}>
        <Typography className={style["summary"]}>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionItem;
