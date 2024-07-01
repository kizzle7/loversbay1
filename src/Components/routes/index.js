import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../Views/Auth/Login";
import Register from "../../Views/Auth/Register";
import Dashboard from "../../Views/Dashboard/Index";
import Authenticate from "../../Views/Auth/Athenticate";
import OnboardUser from "../../Views/Auth/onBoard";
import ForgotPassword from "../../Views/Auth/ForgotPassword";
import ResetPassword from "../../Views/Auth/ResetPassword";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/create-account" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/authenticate-account" exact component={Authenticate} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/reset-password" exact component={ResetPassword} />

      </Switch>
    </Router>
  );
}
