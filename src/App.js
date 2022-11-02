import Carousel from 'react-material-ui-carousel';
import './App.css';
import { Card } from './components/Card/Card';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import calendarImage from './images/calendar.png';
import linkedInImage from './images/linkedin.png';
import currencyImage from './images/currencyExchanger.png';
import todoImage from './images/todo.png';
import dashboardImage from './images/dashboard.png';
import weatherCliImage from './images/weatherCli.png';

const App = () => {
  const cards = [
    {
      id: 1,
      url: 'https://calendar-of-meeting.vercel.app/',
      title: 'Calendar of meetings',
      description: 'Real time calendar, where you can add events',
      image: calendarImage,
      stack: ['React hooks', 'Material Ui', 'Local Storage', 'Eslint, Prettier']
    },
    {
      id: 2,
      url: 'https://linkedid-copy.herokuapp.com/',
      title: 'LinkedIn copy',
      description: 'Copy of linkedIn with posts, users and much more',
      image: linkedInImage,
      stack: ['React hooks', 'Axios', 'Redux', 'Redux-Thunk', 'Json-Server', 'Eslint, Prettier']
    },
    {
      id: 3,
      url: 'https://currency-exchanger-tau.vercel.app/',
      title: 'Currency Exchanger',
      description: 'Here you can exchange currency at a fresh rate',
      image: currencyImage,
      stack: ['React hooks', 'TypeScript', 'Axios', 'Redux', 'Eslint, Prettier']
    },
    {
      id: 4,
      url: 'https://todo-list-seven-sage.vercel.app/',
      title: 'ToDo list',
      description: 'Todo list, where you can add new tasks',
      image: todoImage,
      stack: ['React hooks', 'React-testing-library', 'Eslint, Prettier']
    },
    {
      id: 5,
      url: 'https://github.com/PavloYurchyshynn/Dashboard-API',
      title: 'Dashboard',
      description: 'Backend app with authorisation, registration and much more',
      image: dashboardImage,
      stack: [
        'Node.js',
        'TypeScript',
        'Express.js',
        'JWT',
        'Prisma',
        'Nodemon',
        'Unit, e2e tests',
        'Eslint, Prettier'
      ]
    },
    {
      id: 6,
      url: 'https://github.com/PavloYurchyshynn/Weather-CLI',
      title: 'Weather Cli',
      description: 'npx package to get weather',
      image: weatherCliImage,
      stack: ['Node.js', 'Axios', 'Chalk']
    }
  ];

  return (
    <div className="App">
      <Carousel
        className="app-carousel"
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
        animation={'slide'}
        duration={500}
        navButtonsAlwaysVisible={true}
        indicators={false}
        autoPlay={false}>
        {cards.map((card) => (
          <div className="carousel-container" key={card.id}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              url={card.url}
            />
            <div className="card-stack">
              <ul>
                {card.stack.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
