import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MyAccordion() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>アコーディオンのヘッダー</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>アコーディオンの内容がここに表示されます。</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;
