import styled from 'styled-components';

const Button = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  height: 30vh;
  width: 10vw;
  max-width: 250px;
  min-width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .button__icon {
    font-size: 7.5em;
  }
`;

const TitleContainer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  & span {
    font-size: 1.3rem;
  }
`;

export { Button, IconContainer, TitleContainer };
