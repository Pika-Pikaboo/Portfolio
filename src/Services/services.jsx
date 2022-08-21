import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>&lt; Services /&gt;</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, esse!
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
