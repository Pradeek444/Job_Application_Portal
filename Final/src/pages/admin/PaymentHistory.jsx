import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Transaction ID', width: 200 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 150 },
  { field: 'user', headerName: 'User', width: 200 },
  { field: 'paymentMethod', headerName: 'Payment Method', width: 200 },
  // Add more columns as needed
];

const rows = [
  { id: 1, date: '2024-02-26', amount: '$100', user: 'John Doe', paymentMethod: 'Credit Card' },
  { id: 2, date: '2024-02-25', amount: '$50', user: 'Jane Smith', paymentMethod: 'PayPal' },
  { id: 3, date: '2024-02-24', amount: '$200', user: 'Michael Johnson', paymentMethod: 'Bank Transfer' },
  // Add more rows as needed
];

export default function PaymentHistory() {
  const getRowClassName = (params) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'background.paper' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        getRowClassName={getRowClassName}
        disableSelectionOnClick
        sx={{
          height: '100%', // Ensure DataGrid fills up the entire height of its container
          '& .even-row': {
            backgroundColor: 'yellow', // Alternate row color
          },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-overlay': {
            backgroundColor: '#000000',
            color: '#ffffff',
            borderColor: '#ffffff', // Change header color
          },
          '& .MuiDataGrid-root': {
            width: '100%', // Adjust width of the table
          },
        }}
      />
    </Box>
  );
}
