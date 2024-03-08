import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import { ComponentWithChatbot } from '../components/ComponentWithChatbot';
import { Slide } from '../components/Slide';

import cards from "../misc/cards"

import '../../styles/ChatBot.css';
import '../../styles/app.css';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <ComponentWithChatbot>

      <h1 className="heading">Our Challenge!</h1>
      <h2 className="heading2">Swipe to find your daily challenge</h2>
      
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {cards.map((card) => {
          return (
            <SwiperSlide key={card.idea}>
              <Slide idea={card.idea} info={card.info} />
            </SwiperSlide>
          )
        })}
        <SwiperSlide>
          <p className="ecoIdeas">New ideas coming soon!</p>
          <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
      </Swiper>
    </ComponentWithChatbot>
  )
}



