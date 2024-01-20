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
<h1 className="heading">Our Challenge!</h1>
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
        <p className="ecoIdeas">Recycle/ reuse</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Buy long-lasting light bulbs</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Use the metro/ bus</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Make a seed bomb</p>
        <p className="ecoInfo">with clay, compost, and wildflower seeds</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Eat organic</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Buy a tote bag</p>
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
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Start an Adopt-a-Tree Program</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Create an upcycled art installation</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Use a reusable gift wrap</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Zero-Waste Lunch Challenge</p>
        <p className="ecoInfo">with completely reusable containers and utensils</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        </SwiperSlide>
        <SwiperSlide><p className="cardHeading">Today I should...</p>
        <p className="ecoIdeas">Ride the bike to work/school</p>
        <label htmlFor="files" className="btn">Take a photo</label>
        </SwiperSlide>
        <SwiperSlide>
        <p className="ecoIdeas">New ideas coming soon!</p>
        
        <input id="files" style={{ visibility: "hidden" }} type="file" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}



