import reactImg from '../../assets/sevantWhiteLogo.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Core', 'Essential'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} 

function Header() {
    const description = reactDescriptions[genRandomInt(2)];  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>AI Solution Architecture</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

  export default Header;

