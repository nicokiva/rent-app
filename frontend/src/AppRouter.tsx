import { Route, Routes } from "react-router-dom";

import "./App.css";
import Add from "./screens/add";
import Edit from "./screens/edit";
import List from "./screens/reservations-list";

function AppRouter() {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/reserve' element={<Add />} />
        <Route path='/reserve/:reservationId' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
