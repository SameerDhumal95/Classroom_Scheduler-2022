import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { FAQData } from "./FAQData";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ=()=>{
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

    return(
        <>
        <Box>
        <div className="section-title" id="faq">
          <Typography variant="h2" align="center" sx={{padding:'50px'}} color={'GrayText'} fontSize={'5rem'}>
            Frequently Asked Questions
            </Typography>
        </div>
              { FAQData.map((link,val)=>(
              <div key={val}>
                <Accordion expanded={expanded === link.number} onChange={handleChange(link.number)} >
                 <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography fontSize={'20px'}>
                        {link.question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {link.answer}
                    </Typography>
                </AccordionDetails>
                </Accordion>
                </div>
                ))}
        </Box>
        </>
    )
}

export default FAQ;