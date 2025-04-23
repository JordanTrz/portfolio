import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { frontEnd, backEnd, maquetaWeb } from "../../data";

const list = [
  {
    id: "react",
    title: "React",
    data: frontEnd,
  },
  {
    id: "maqueta",
    title: "Frontend template",
    data: maquetaWeb,
  },
  {
    id: "backend",
    title: "Back-end",
    data: backEnd,
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(list.at(0).id);

  const rawSelectedData = list.find((o) => o.id === selected);
  const selectedData = rawSelectedData?.data || [];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="containerWrapper">
          {selectedData.map((d) => (
            <div className="item" key={d.id}>
              <img src={d.img} alt="#" />
              <div className="technologies">
                <h3>{d.title}</h3>
                <div className="container_btn">
                  <a
                    className="btn left"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={d.demo}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/1200px-External_link_font_awesome.svg.png"
                      alt=""
                    />
                  </a>
                  <a
                    className="btn right"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={d.repo}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
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
