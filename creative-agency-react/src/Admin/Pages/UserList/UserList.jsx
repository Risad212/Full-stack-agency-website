import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import './UserList.css';
import {userRows} from '../../Data/UserListData';


export default function UserList() {
  const [data,setData] = useState(userRows);

  const handleDelate = (id) =>{
    setData(data.filter((item) => item.id !== id))
   }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'User', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      width: 200 
    },
    {
      field: 'status',
      headerName: 'status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/"+params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={() => handleDelate(params.row.id)}/>
          </>
        )
      }
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}