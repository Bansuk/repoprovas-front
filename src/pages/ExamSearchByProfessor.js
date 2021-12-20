import styled from 'styled-components';
import TypeButton from '../components/TypeButton';
import { useEffect, useState } from 'react';
import { getProfessors } from '../services/repoprovas.services';

const ExamSearchByProfessor = () => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    getProfessors()
      .then(res => setProfessors(res.data))
      .catch(err => alert(err));
  });

  return (
    <Container>
      {professors.map(professor => (
        <TypeButton name={professor.name} quantity={professor.count} />
      ))}
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
