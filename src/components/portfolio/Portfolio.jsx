import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  frontEnd,
  backEnd,
  maquetaWeb
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "maqueta",
      title: "Maquetación web",
    },
    {
      id: "backend",
      title: "Back-end",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(frontEnd);
        break;
      case "maqueta":
        setData(maquetaWeb);
        break;
      case "backend":
        setData(backEnd);
        break;
      default:
        setData(frontEnd);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Proyectos</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt="#"
            />
            <div className="technologies">
              <h3>{d.title}</h3>
              <div className="container_btn">
                <a className="btn left" target="_blank" href={d.demo}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/1200px-External_link_font_awesome.svg.png" alt="" />
                  {/* <h2>Demo</h2> */}
                </a>
                <a className="btn right" target="_blank" href={d.repo}>
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                  {/* <h2>Repo</h2> */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#contact">
          <img src="assets/down.png" alt="" />
        </a>
    </div>
  );
};

export default Portfolio;