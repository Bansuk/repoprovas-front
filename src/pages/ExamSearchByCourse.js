import styled from 'styled-components';
import TypeButton from '../components/TypeButton';

const ExamSearchByCourse = () => {
  return (
    <Container>
      <Term>
        <h1>1 Periodo</h1>
        <TypeButton name='professor' quantity='10' />
      </Term>
    </Container>
  );
};

export default ExamSearchByCourse;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`;

const Term = styled.div`
  & h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;
