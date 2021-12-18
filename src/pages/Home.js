import { Link } from 'react-router-dom';
import { Container } from '../styles/styleHome';
import LargeButton from '../components/LargeButton';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';

const Home = () => {
  return (
    <Container>
      <Link to={'/exams'}>
        <LargeButton
          icon={<AiOutlineSearch className={'button__icon'} />}
          text='Buscar Prova'
        />
      </Link>
      <Link to={'/new'}>
        <LargeButton
          icon={<GrDocumentText className={'button__icon'} />}
          text='Enviar Prova'
        ></LargeButton>
      </Link>
    </Container>
  );
};

export default Home;
