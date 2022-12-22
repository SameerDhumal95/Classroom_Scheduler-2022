import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
//import { rows,columns } from './TeacherData';


export default function DataTable(props) {
  return (
    <Box  sx={{
      mt: 4, mb: 0 ,
      paddingLeft:props.padding,
      height: props.height,
      width: props.width,
      '& .theme--header': {
        backgroundColor: props.color,
      },
    }}>
      <DataGrid
        getRowId={(user)=>user.teacher_id}
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellEditCommit={(params)=>console.log(params)}
      />
    </Box>
  );
}
