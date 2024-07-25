
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionComponent({data}) {
  return (
   <>
    <div className="accordion">
    <Accordion style={{backgroundColor:"#ffffff"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" > <h3>{data.ques} </h3> </AccordionSummary>
        <AccordionDetails> <p  dangerouslySetInnerHTML={{ __html: data.ans }}></p></AccordionDetails>
      </Accordion>
    </div>
   </>
  )
}

export default AccordionComponent