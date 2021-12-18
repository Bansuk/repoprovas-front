import styled from 'styled-components';
import TypeButton from '../components/TypeButton';

const ExamSearchByProfessor = () => {
  return (
    <Container>
      <TypeButton name='professor' quantity='10' />
    </Container>
  );
};

export default ExamSearchByProfessor;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`;
