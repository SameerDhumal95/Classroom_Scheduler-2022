import * as React from 'react';
import { rows,columns } from './AssignmentData';
import DataTable from '../DataTable';


export default function AssignmentTable() {
  return (
    <>
    <DataTable 
    rows={rows} 
    columns={columns} 
    height={400} 
    width={'60%'} 
    padding={'20%'} 
    color={'rgb(114, 255, 255)'} 
    />
    </>
  );
}