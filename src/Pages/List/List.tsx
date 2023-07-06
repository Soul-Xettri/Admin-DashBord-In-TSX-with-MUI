import DataTable from "../../Components/Datatable/DataTable"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./List.scss"

export default function List({setMode}:any) {
  return (
    <div className="list">
      <Sidebar setMode={setMode}/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}
