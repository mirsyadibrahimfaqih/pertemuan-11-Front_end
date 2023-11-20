import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Populer from "./pages/Populer";
import Layout from "./Layouts/Layout";
import { useState } from "react";
import DataMovie from "./utils/constants/DataMovie";
import GlobalStyle from "./components/Global/GlobalStyles";


function App() {
  const [data, setData] = useState(DataMovie)
  return (
<>
<GlobalStyle/>
<Layout>
  <Routes>
    <Route path='/' element={<Home item={data} setItem={setData}/>} />
    <Route path='/populer' element={<Populer/>} />
    <Route path='add' element={<Add item={data} setItem={setData}/> } />
  </Routes>
  </Layout>
</>
  );
}

export default App;
