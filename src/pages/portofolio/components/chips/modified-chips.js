import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Chip } from "@material-ui/core";

const list = [
    {name: "Safety Related Punch",
    id: 1,
    color:"#f24726",
    selected: true,
    },
    {name: "Re-Test",
    id: 2,
    color:"#2d9bf0",
    selected: true,
    },
    {name: "Hardware design",
     id: 3,
     color:"#414bb2",
     selected: false,
    },
    {name: "Design Document",
     id: 4,
     color:"#fa9c10",
     selected: false,
    },
    {name: "Application program", 
     id: 5,
     color:"#9510ac",
     selected: false,
    },
    {name: "Safety functions (if applicable)",
     id: 6,
     color:"#0ca789",
     selected: true,
    },
    {name:  "Other(describe analysis)",
     id: 7,
     color:"#808080",
     selected: false,
    },
    
    ];
const ModifiedChips = () => {
    const [tags , setTags] = useState(list);

	const handleTagSelect = (id) => {
		const newtags = tags.map(tag => tag.id == id ?  {...tag, selected : !tag.selected}  : tag  )
		setTags(newtags);
	}
    return(
        <Grid container columns={12} style={{ marginTop: 10}} direction='row' >
                <Grid item xs={6}>
                 <Typography>Array of chips. Select/deselt chips by clicking them </Typography>
                </Grid>
				<Grid item xs={7}>
						<Box  sx={{ display: 'flex',
									flexDirection: 'row',}}>
							<Grid container spacing={2} style={{alignItems: "center",}}> 
					
									{tags.map( tag => 
													<Grid item >
															<Chip
															 label= {tag.name}
															 size="small"
															 onDelete={tag.selected ? ()=>( handleTagSelect(tag.id) ) : null}
															 onClick={()=>handleTagSelect(tag.id)}
															 variant={tag.selected ? "outlined" : "filled"}
															 deleteIcon = {
															 		<span style={{
																	  color:'white',
																	  margin:'auto',
																	  fontFamily:"Remove",
																	  fontSize:"12px",
																	  }}>
																		X
																	</span>}
															 style={{ 
																borderRadius:2,
																backgroundColor:tag.color,
																opacity: tag.selected ? '1' : '0.7',
																color:'white',
															 }}
															 />
													</Grid>
											)}
							</Grid> 
						</Box>
				</Grid>	
    </Grid>
    );
}
export default ModifiedChips;
