import Home from "./Pages/Home/Home"
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom"; 
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { ProductInputs, UserInputs } from "./Pages/New/FormSource";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route  path="new" element={<New inputs={UserInputs} title="Add New User"/>}/>
        </Route>
        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route  path="new" element={<New inputs={ProductInputs} title="Add New Product"/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
