import "./App.css";
import AuthenticationButton from "./components/LoginPage";
import EmailList from "./components/EmailList";
import NewEmail from "./components/NewEmail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStoreState } from "easy-peasy";

function App(props) {
  const loggedIn = useStoreState((state) => state.loggedIn);

  let content = (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <EmailList /> : <AuthenticationButton />}
        </Route>
        <Route path="/new-email">
          <NewEmail />
        </Route>
      </Switch>
    </Router>
  );
  return content;
}

export default App;
