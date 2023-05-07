import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <img src="/assets/pokemon-logo.svg" alt="Pokemon Logo" />
      </Link>
      <div className="socials">
        <a
          target="_blank"
          href="https://github.com/Alphenx/The-Pokemon-Gallery"
        >
          <AiOutlineGithub className="icon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/adri%C3%A1n-garc%C3%ADa-iglesias"
        >
          <AiOutlineLinkedin className="icon" />
        </a>
        <a target="_blank" href="mailto:adriangarcia.comunicacion@gmail.com">
          <AiOutlineMail className="icon" />
        </a>
      </div>
    </HeaderStyled>
  );
};
export default Header;
