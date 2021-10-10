import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import Card from "../Card";
import Arrow from "./components/Arrow";

import { fetchWeatherData } from "../../../../store/slices/weatherThunk";

import "slick-carousel/slick/slick.css";
import "./custom.css";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
      },
    },
  ],
};

function CustomSlider() {
  const sRef = useRef();
  const dispatch = useDispatch();
  const { dailyForecastData } = useSelector(
    (state) => state.weather,
    (prev, curr) => {
      if (prev.dailyForecastData !== curr.dailyForecastData) return false;
      return true;
    }
  );

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  useEffect(() => {
    sRef.current.slickGoTo(0);
  });

  return (
    <div className="w-full bg-gray-200 lg:p-10 pb-0">
      <Slider
        {...settings}
        className="pt-20"
        nextArrow={<Arrow isNext />}
        prevArrow={<Arrow />}
        ref={(c) => (sRef.current = c)}
      >
        {dailyForecastData &&
          Object.keys(dailyForecastData)
            .slice(0, 5)
            .map((data) => <Card key={data} data={dailyForecastData[data]} />)}
      </Slider>
    </div>
  );
}

export default CustomSlider;
