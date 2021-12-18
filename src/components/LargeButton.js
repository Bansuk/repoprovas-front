import {
  Button,
  IconContainer,
  TitleContainer,
} from '../styles/styleLargeButton';

const LargeButton = ({ icon, text }) => {
  return (
    <Button>
      <IconContainer>{icon}</IconContainer>
      <TitleContainer>
        <span>{text}</span>
      </TitleContainer>
    </Button>
  );
};

export default LargeButton;
