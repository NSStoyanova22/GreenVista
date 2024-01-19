import home from '../public/home-icon.svg'
import forum from '../public/forum-icon.svg'
import chat from '../public/chat-icon.svg'


import '../styles/app.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Navbar } from './components/Navbar';
import '../styles/ChatBot.css'; // Or wherever your CSS is located
import ChatBot from '../src/components/ChatBot.jsx'; // Adjust the path based on your file structure
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
<h1 className="heading">Our Challgenge!</h1>
  <h2 className="heading2">Swipe to find your daily challenge</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Switch to Reusable Bags</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Recycle, reuse</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Use long-lasting light bulbs</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Drive less</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Shop wisely</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Eat organic</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Use tote bag</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Be more energy efficient</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Start waste sorting</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}



