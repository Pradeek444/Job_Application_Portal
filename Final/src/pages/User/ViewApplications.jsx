import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getAppByEmail } from '../../services/user';
import Button from '@mui/material/Button';

const getStatusColor = (resume) => {
  switch (resume.toLowerCase()) {
    case 'accept':
      return 'green';
    case 'reject':
      return 'red';
    case 'pending':
      return 'blue';
    default:
      return 'black';
  }
};

const columns = [
  { field: 'id', headerName: 'Id',width: 250 },
  { field: 'date', headerName: 'Date Applied',width: 250 },
  { field: 'companyName', headerName: 'Company Name',width:250 },
  { field: 'role', headerName: 'Role',width: 250 },
  { field: 'status', headerName: 'Resume',width:200,renderCell: (params) => (
    <Button 
      variant="contained" 
      component="a" 
      sx={{backgroundColor:"black"}}
      href={params.value} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      View
    </Button>
  ),  },
  { field: 'resume', headerName: 'Status', width: 250, renderCell: (params) => <span style={{ color: getStatusColor(params.value) }}>{params.value}</span> },
];

export default function ViewApplications() {
  const [formData, setFormData] = useState([]); 
  
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const authDataString = sessionStorage.getItem("persist:root");
        if (authDataString) {
          const authData = JSON.parse(authDataString);
          const auth = JSON.parse(authData.auth);
          const email = auth.role.sub;
          const res = await getAppByEmail(email);
          setFormData(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'background.paper' }}>
      <DataGrid
        rows={formData}
        columns={columns}
        pageSize={5}
        autoHeight
        // getRowClassName={getRowClassName}
        disableSelectionOnClick
        sx={{
          height: '100%', // Ensure DataGrid fills up the entire height of its container
          '& .even-row': {
            backgroundColor: 'yellow', // Alternate row color
          },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-overlay': {
            backgroundColor: '#000000',
            color:"#ffffff",
            borderColor: "#ffffff"// Change header color
          },
          '& .MuiDataGrid-root': {
            width: '100%', // Adjust width of the table
          },
        }}
      />
    </Box>
  );
}
