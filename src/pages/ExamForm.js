import { useState } from 'react';
import styled from 'styled-components';
import { isExamInputValid } from '../validations/examValidation';

const ExamForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [professor, setProfessor] = useState('');
  const [examLink, setExamLink] = useState('');
  const [errorHandler, setErrorHandler] = useState({});

  const postNewExam = e => {
    e.preventDefault();

    const body = {
      name,
      category,
      course,
      professor,
      examLink,
    };

    if (isExamInputValid(body)) {
      setErrorHandler(isExamInputValid(body));
      return;
    }
  };

  return (
    <Container>
      <Form onSubmit={postNewExam}>
        <input
          type='text'
          placeholder='Nome'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        {errorHandler.errorId === 1 && <span>{errorHandler.errorMessage}</span>}
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        >
          <option value='' disabled selected>
            Categoria
          </option>
          <option value='volvo'>Volvo</option>
        </select>
        <select
          value={course}
          onChange={e => setCourse(e.target.value)}
          required
        >
          <option value='' disabled selected>
            Disciplina
          </option>
          <option value='volvo'>Volvo</option>
        </select>
        <select
          value={professor}
          onChange={e => setProfessor(e.target.value)}
          required
        >
          <option value='' disabled selected>
            Professor
          </option>
          <option value='volvo'>Volvo</option>
        </select>
        <input
          type='text'
          placeholder='Link da prova'
          value={examLink}
          onChange={e => setExamLink(e.target.value)}
          required
        />
        {errorHandler.errorId === 2 && <span>{errorHandler.errorMessage}</span>}
        <Button>Enviar</Button>
      </Form>
    </Container>
  );
};

export default ExamForm;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`;

const Form = styled.form`
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  height: 70vh;
  width: 50vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & input,
  select {
    border-radius: 5px;
    border: 1px solid black;
    width: 80%;
    height: 10%;
    margin-top: 20px;
    font-size: 25px;
    padding-left: 10px;
  }

  & input::placeholder {
    font-size: 25px;
  }

  & span {
    margin-top: 5px;
  }
`;

const Button = styled.button`
  background-color: green;
  width: 80%;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
  }
`;
