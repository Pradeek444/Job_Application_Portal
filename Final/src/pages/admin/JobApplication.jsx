import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getApplications, updateStatus } from '../../services/admin';

export default function ViewApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getApplications();
        setApplications(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'date', headerName: 'Date Applied', width: 150 },
    { field: 'companyName', headerName: 'Company Name', width: 200 },
    { field: 'role', headerName: 'Role', width: 200 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'resume',
      headerName: 'Resume',
      width: 200,
      renderCell: (params) => (
        <strong>
          <button onClick={() => handleViewResume(params.row.resume)}>View</button>
        </strong>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => (
        <select className="status-dropdown" onChange={(event) => handleStatusChange(event, params.row.id)}>
          <option value="">Status</option>
          <option value="accept">Accept</option>
          <option value="reject">Reject</option>
        </select>
      ),
    },
  ];

  const handleStatusChange = async(event, id) => {
    const selectedStatus = event.target.value;
    // Implement logic to handle status change
    const res= await updateStatus(id,selectedStatus);
    console.log(res);
    console.log(`Changed status to ${selectedStatus} for row with ID ${id}`);
  };

  const handleViewResume = (resumePath) => {
    // Implement logic to view resume, for example, open in a new tab
    window.open(resumePath);
  };

  const getRowClassName = (params) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'background.paper' }}>
      <DataGrid
        rows={applications}
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
