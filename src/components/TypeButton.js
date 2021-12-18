import styled from 'styled-components';

const TypeButton = ({ name, quantity }) => {
  return (
    <Button>
      <Name>
        <span>{name}</span>
      </Name>
      <Quantity>
        <span>{quantity}</span>
      </Quantity>
    </Button>
  );
};

export default TypeButton;

const Button = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  height: 10vh;
  width: 40vw;
  max-width: 700px;
  min-width: 350px;
  margin-bottom: 25px;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;

  & span {
    font-size: 2.3em;
  }
`;

const Quantity = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 10px;

  & span {
    font-size: 2.3em;
  }
`;
