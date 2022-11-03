import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Name', headerName: 'Operator Name', width: 150, editable: true },
  { field: 'ShortName', headerName: 'Short name', width: 150, editable: true },
  { field: 'ContactTelephoneNumber', headerName: 'Phone', type: 'string',  width: 110, editable: true },
  { field: 'WebSite', headerName: 'Web', description: 'This column has a value getter and is not sortable.', width: 160 },
];

const rows = [
  { id: 1, Name: 'San Francisco Municipal Railway', ShortName: 'Muni', ContactTelephoneNumber: '353-333-333', WebSite: 'muni@gmail.com' },
  { id: 2, Name: 'New York', ShortName: 'NY', ContactTelephoneNumber: '422-222-222', WebSite: 'muni@gmail.com' },
  { id: 3, Name: 'Maiami', ShortName: 'MA', ContactTelephoneNumber: '455-555-555', WebSite: 'muni@gmail.com' },
  { id: 4, Name: 'NY', ShortName: 'NY', ContactTelephoneNumber: '160-000-999', WebSite: 'muni@gmail.com' },
  { id: 5, Name: 'Chicago', ShortName: 'CC', ContactTelephoneNumber: null, WebSite: 'muni@gmail.com' },
];

export default function OperatorsTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}

