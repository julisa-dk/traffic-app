import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'id', type: 'string', width: 90 },
  { field: 'Name', headerName: 'Name', width: 150, editable: true },
  { field: 'ShortName', headerName: 'ShortName', width: 150, editable: true },
  { field: 'ContactTelephoneNumber', headerName: 'ContactTelephoneNumber', type: 'string',  width: 110, editable: true },
  { field: 'WebSite', headerName: 'WebSite', type: 'string', width: 160 },
];

/* const rows = [
  { id: 1, Name: 'San Francisco Municipal Railway', ShortName: 'Muni', ContactTelephoneNumber: '353-333-333', WebSite: 'muni@gmail.com' },
  { id: 2, Name: 'New York', ShortName: 'NY', ContactTelephoneNumber: '422-222-222', WebSite: 'muni@gmail.com' },
  { id: 3, Name: 'Maiami', ShortName: 'MA', ContactTelephoneNumber: '455-555-555', WebSite: 'muni@gmail.com' },
  { id: 4, Name: 'NY', ShortName: 'NY', ContactTelephoneNumber: '160-000-999', WebSite: 'muni@gmail.com' },
  { id: 5, Name: 'Chicago', ShortName: 'CC', ContactTelephoneNumber: null, WebSite: 'muni@gmail.com' },
]; */


export default function OperatorsTable() {
  const [operators, setOperators] = useState([]);

   useEffect(()=> {
    axios.get('https://api.511.org/transit/operators?api_key=bccd9237-c2d2-4f70-a44e-ae625b801aeb')
    .then((res) => 
      {
        const allOperators = res.data;
        console.log(allOperators);
        const transformed = allOperators.map(({ Id, Name, ShortName, ContactTelephoneNumber, WebSite }) =>
        ({ id: Id, 
          Name: Name, 
          ShortName: ShortName, 
          ContactTelephoneNumber: ContactTelephoneNumber, 
          WebSite: WebSite, 
        }));
        //console.log(transformed);
        setOperators(transformed);
        });
   }, [setOperators]);
 
return (
    <div>
    <Typography variant="h6" component="div" style={{ width: '100%' }}>
           List of Operators
    </Typography>

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={operators}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
    </div>
);
}