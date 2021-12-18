import styled from 'styled-components';
import TypeButton from '../components/TypeButton';

const ExamList = () => {
  return (
    <Container>
      <Term>
        <h1>P1</h1>
        <TypeButton name='professor' quantity='aaaaaaaaaaaaaa' />
      </Term>
    </Container>
  );
};

export default ExamList;

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
