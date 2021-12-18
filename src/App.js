import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/styleGlobal';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
