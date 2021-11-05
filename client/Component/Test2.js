import React from "react";
import Scrollbar from '../Scrollbar';
import { DataGrid } from '@mui/x-data-grid';

/*
Gave up on trying to implement sorting myself, much easier solution was to just
use React's DataGrid component. Used code snippets from https://mui.com/components/data-grid/
in order to implement this faster. 
*/

const columns = [
  {field: 'id', headerName: "ID", hide: true },
  {field: 'item', headerName: 'Item Name (item)', width: 200 },
  {field: 'descr', headerName: 'Descr', width: 150},
  {field: 'status', headerName: 'Status', width: 150},
  {field: 'start', headerName: 'Start', type: 'singleSelect',  width: 110},
  {field: 'end', headerName: 'End', width: 160},
  {field: 'voteYes', headerName: 'Voted Yes', type: 'boolean', width: 160},
  {field: 'voteNo', headerName: 'Voted No', type: 'boolean', width: 160},
];

const rows = [
  { id: 1, item: "Giacomo Guilizzoni Founder & CEO", descr: 40, status: 'Peldi', start: null, end: null, voteYes: false, voteNo: true},
  { id: 2, item: "Marco Botton Tuttofare", descr: 38, status: null, start: null, end: null, voteYes: true, voteNo: false},
  { id: 3, item: "Mariah Maclachlan Better Half", descr: 41, status: "Patata", start: null, end: null, voteYes: false, voteNo: true},
  { id: 4, item: "Valerie Liberty Head Chef", descr: 70, status: "Val", start: null, end: null, voteYes: true, voteNo: true},
  { id: 5, item: "Data Grid Documents", descr: null, status: null, start: null, end: null, voteYes: null, voteNo: null},
  { id: 6, item: "{65L", descr: 0, status: "35", start: null, end: null, voteYes: null, voteNo: null},
];

export default function Agenda() {
  return (  
    <div style={{ display: 'flex', height: 400, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
