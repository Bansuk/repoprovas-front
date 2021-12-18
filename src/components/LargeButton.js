import {
  Button,
  IconContainer,
  TitleContainer,
} from '../styles/styleLargeButton';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';

const LargeButton = ({ type }) => {
  return (
    <Button>
      <IconContainer>
        {type === 'send' ? (
          <GrDocumentText className={'button__icon'} />
        ) : (
          <AiOutlineSearch className={'button__icon'} />
        )}
      </IconContainer>

      <TitleContainer>
        {type === 'send' ? (
          <span>Enviar Prova</span>
        ) : (
          <span>Buscar Prova</span>
        )}
      </TitleContainer>
    </Button>
  );
};

export default LargeButton;
