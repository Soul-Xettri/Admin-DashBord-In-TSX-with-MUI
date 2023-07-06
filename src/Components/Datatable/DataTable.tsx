import "./DataTable.scss";
import { DataGrid} from "@mui/x-data-grid";
import {userColumns,userRows} from "./DataTableSource"
import { Link } from "react-router-dom";


export default function DataTable() {

    const actionColumn =[{field:"action",headerName:"Action",width:200,renderCell:()=>{
        return(
            <div className="cellAction">
        <Link to="/users/test" style={{textDecoration:"none"}}>
                <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]
    
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
        Add New
        </Link>
      </div>
      <DataGrid
      className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
