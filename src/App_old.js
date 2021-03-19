import "./App.css";
import AuthenticationButton from "./components/LoginPage";
import EmailList from "./components/EmailList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStoreState } from "easy-peasy";

function App(props) {
  const loggedIn = useStoreState((state) => state.loggedIn);

  let content = (
    <Router>
      <Switch>
        <Route path="/">
          {loggedIn ? <EmailList /> : <AuthenticationButton />}
        </Route>
      </Switch>
    </Router>
  );
  return content;
}

export default App;
