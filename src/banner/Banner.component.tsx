import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "antd";
import { Pagination, Autoplay } from "swiper/modules";
import SMAN_1 from "../assets/images/sman_pick_DESKTOP_1_.jpg";
import SMAN_2 from "../assets/images/sman_desktop_1.jpg";
import "swiper/css";
import "swiper/css/pagination";

const smanImages: string[] = [SMAN_1, SMAN_2];

const BannerComponent: FC = () => {
  return (
    <section className="carousel_container max-w-[90%] m-auto min-h-[450px] flex my-5 ">
      <Swiper
        className="mySwiper"
        shortSwipes={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
      >
        {smanImages.map((image) => {
          return (
            <SwiperSlide key={image}>
              <Image src={image} preview={false} rootClassName="h-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default BannerComponent;
