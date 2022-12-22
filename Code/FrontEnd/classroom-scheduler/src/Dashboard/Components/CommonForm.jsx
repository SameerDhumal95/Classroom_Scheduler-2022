import { Grid, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { TeacherColumn } from "../AdminDashboard/Registration/TeacherData";

const CommonForm=()=>{
  const styles = {
    'input-label': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      color: 'red'
    },
  
    'input': {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue'
      }
    }
  };

  return(
    <>
    <div >
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '30ch' },
      }}
      >
        <Grid container sx={{mt:10,ml:3,mr:3}} spacing={1}>
            {TeacherColumn.map((data,index)=> (<Grid item xs={12} md={6} lg={3} key={index}>
            <TextField
            id="outlined"
            className="input"
            placeholder={data.name}
            type={data.type}
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              {data.avatar}
            </InputAdornment>
            ),
            }}
            variant="filled"
            sx={{width:'200'}}
            />
            </Grid>))}
        </Grid>
        </Box>
    </div>
    </>)
}

export default CommonForm;