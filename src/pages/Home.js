import { useHistory } from 'react-router';
import { Container } from '../styles/styleHome';
import LargeButton from '../components/LargeButton';
import { Link } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Link to={'/exams'}>
        <LargeButton type='search' />
      </Link>
      <Link to={'/exam'}>
        <LargeButton type='send'></LargeButton>
      </Link>
    </Container>
  );
};

export default Home;
