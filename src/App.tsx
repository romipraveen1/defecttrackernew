import "antd/dist/antd.css";
import { Switch, Route, Router } from "react-router-dom";
import DashBoard from "./Layouts/DashBoard";
import Calender from "./Components/Molecules/Calender";
import CustomButton from "./Components/Atoms/CustomButton";
import Developer from "./Pages/Developer";
import Company from "./Pages/Company";

function App() {
  return (
    <>
      <DashBoard>
        <Switch>
          <Route path="/calender">
            <Calender />
          </Route>
          <Route path="/btn">
            <CustomButton type="default" size="large" style={{ color: "#fff" }}>
              Click
            </CustomButton>
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
        </Switch>
      </DashBoard>
    </>
  );
}

export default App;
