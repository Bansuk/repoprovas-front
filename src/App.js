import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/styleGlobal';
import Home from './pages/Home';
import ExamSearch from './pages/ExamSearch';
import ExamSearchByProfessor from './pages/ExamSearchByProfessor';
import ExamSearchByCourse from './pages/ExamSearchByCourse';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/exams' exact component={ExamSearch} />
        <Route
          path='/exams/professors'
          exact
          component={ExamSearchByProfessor}
        />
        <Route path='/exams/courses' exact component={ExamSearchByCourse} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
