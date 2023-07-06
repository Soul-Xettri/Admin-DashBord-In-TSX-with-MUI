import Featured from "../../Components/Chats/Featured/Featured"
import Normal from "../../Components/Chats/Normal/Normal"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import BasicTable from "../../Components/Table/Table"
import Widget from "../../Components/Widget/Widget"
import "./Home.scss"

export default function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer"><Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Normal/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <BasicTable/>
        </div>
        </div>
    </div>
  )
}
