import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Chozin",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        quisquam odio corporis, delectus consequuntur nisi nihil veniam
        dolor officiis nam fuga, atque ipsum libero inventore odit mollitia,
        ab fugiat reprehenderit.`,
  },
  {
    avatar: AVTR2,
    name: "Wynn Naing Swe",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        quisquam odio corporis, delectus consequuntur nisi nihil veniam
        dolor officiis nam fuga, atque ipsum libero inventore odit mollitia,
        ab fugiat reprehenderit.`,
  },
  {
    avatar: AVTR3,
    name: "Kyaw Zin Thu",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        quisquam odio corporis, delectus consequuntur nisi nihil veniam
        dolor officiis nam fuga, atque ipsum libero inventore odit mollitia,
        ab fugiat reprehenderit.`,
  },
  {
    avatar: AVTR4,
    name: "Sandra",
    review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        quisquam odio corporis, delectus consequuntur nisi nihil veniam
        dolor officiis nam fuga, atque ipsum libero inventore odit mollitia,
        ab fugiat reprehenderit.`,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews from the clients</h5>
      <h2>&lt; Testimonials /&gt;</h2>

      <Swiper
        className="mySwiper container testimonials_container"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide key={name} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="img" />
              </div>
              <h5>{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
