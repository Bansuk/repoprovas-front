import { Link } from 'react-router-dom';
import { Container } from '../styles/styleHome';
import LargeButton from '../components/LargeButton';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

const ExamSearch = () => {
  return (
    <Container>
      <Link to={'/exams'}>
        <LargeButton
          icon={<FaChalkboardTeacher className={'button__icon'} />}
          text='Professor'
        />
      </Link>
      <Link to={'/exams'}>
        <LargeButton
          icon={<ImBooks className={'button__icon'} />}
          text='Disciplina'
        ></LargeButton>
      </Link>
    </Container>
  );
};

export default ExamSearch;
