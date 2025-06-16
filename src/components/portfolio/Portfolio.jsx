import './portfolio.scss';
import { projects } from '../../data';
import Card from '../card/Card';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div className="container">
        <div className="containerWrapper">
          {projects.map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
      </div>
      <a href="#contact">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default Portfolio;
