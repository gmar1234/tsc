import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LeftContainerComponent } from "./presentation/components/container/LeftContainerComponent";
import { AddView } from "./presentation/views/AddView";
import { EndView } from "./presentation/views/EndView";
import { LoginView } from "./presentation/views/LoginView";
import { PlanView } from "./presentation/views/PlanView";
import "./presentation/assets/style/style.scss";

function App() {
  return (
    <Router>
      <div className="gm-container gm-container--two">
        <LeftContainerComponent />

        <div className="gm-container__rigth ">
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/add" component={AddView} />
            <Route exact path="/plan" component={PlanView} />
            <Route exact path="/end" component={EndView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
