import React, { useEffect } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';



function Loading ()  {
    return(
       <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <CircularProgress />
        </div>
      
    )
}

export default Loading;