import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/styleGlobal';
import Home from './pages/Home';
import ExamSearch from './pages/ExamSearch';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/exams' exact component={ExamSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
