import Home from "./Pages/Home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { ProductInputs, UserInputs } from "./Pages/New/FormSource";
import "./Style/dark.scss";
import{useState} from "react"

function App() {
  const[dark,setDark]=useState(false)
  return (
    <div className={dark ? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home setMode={setDark}/>} />
            <Route path="/login" element={<Login  />} />
            <Route path="users">
              <Route index element={<List setMode={setDark}/>} />
              <Route path=":userId" element={<Single setMode={setDark} />} />
              <Route
                path="new"
                element={<New inputs={UserInputs} title="Add New User" setMode={setDark}/>}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single setMode={setDark}/>} />
              <Route
                path="new"
                element={<New inputs={ProductInputs} title="Add New Product" setMode={setDark}/>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
