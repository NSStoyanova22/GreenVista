import home from '../public/home-icon.svg'
import forum from '../public/forum-icon.svg'
import chat from '../public/chat-icon.svg'

import '../styles/app.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
    <ul>
    <li>
      <a href="#">
        <img src={home} alt="" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={forum} alt="" />
      </a>
    </li>
    <li>
      <a>chatbot</a>
    </li>
    <li>
      <a>
        <img src={chat} alt="" />
      </a>
    </li>
    <li>
      <a>profile</a>
    </li>
  </ul>
</nav>
<h1 className="heading">Our Challgenge!</h1>
  <h2 className="heading2">Swipe to find your daily challenge</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}


