import "./porfolio.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currencey Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },

  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribble.com/shorts/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design for webpage",
    github: "https://github.com",
    demo: "https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },

  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribble.com/shorts/16955822-Maintaining-tasks-and-tradcking-progress",
  },

  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },

  {
    id: 6,
    image: IMG6,
    title: "Crypto Currencey Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
];

export default function Porfolio() {
  return (
    <section id="porfolio">
      <h5>My Recent Works</h5>
      <h2>&lt; Projects /&gt;</h2>

      <div className="container porfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="porfolio_item">
              <div className="porfolio_item_image">
                <img src={image} alt="img-1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  rel="noreferrer"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  rel="noreferrer"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
