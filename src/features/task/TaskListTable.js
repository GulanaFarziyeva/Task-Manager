import { DataGrid } from '@mui/x-data-grid';

import theme from '../../theme/theme';

const columns = [
  { field: 'title', headerName: 'Title', width: 450 },
  { field: 'deadline', headerName: 'Deadline', width: 180 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'description', headerName: 'Description', width: 250 },
  { field: 'edit', headerName: '...', width: 100 },
];

const rows = [];

export default function DataTable() {
  return (
    <div style={{ height: 400 }}>
      <DataGrid
        
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{margin: 'auto', width: '90%', px:2, backgroundColor: theme.palette.lightGray}}
      />
    </div>
  );
}

