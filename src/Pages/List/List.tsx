import DataTable from "../../Components/Datatable/DataTable"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./List.scss"

export default function List() {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}
