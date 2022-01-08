import React, {useEffect} from 'react';
import AppComponent from './AppComponent';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import ReactGA from "react-ga";

const credential={
  is_login: true
}


const history = createBrowserHistory()
if (process?.env?.NODE_ENV === 'production') {
    ReactGA.initialize('UA-204546603-1');
}
history.listen(location =>
  ReactGA.pageview(location.pathname + location.search)
)

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App">
      <Router history={history}>
        <AppComponent/>
      </Router>
    </div>
  );
}

export default App;
