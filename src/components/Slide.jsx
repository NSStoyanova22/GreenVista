import { SwiperSlide } from 'swiper/react';

export const Slide = (props) => {
    return (
        <>
            <p className="cardHeading">Today I should...</p>
            <p className="ecoIdeas">{ props.idea ?? "" }</p>
            <p className='ecoInfo'>{ props.info ?? "" }</p>
            <label htmlFor="files" className="btn">Take a photo</label>
            <input id="files" style={{ visibility: "hidden" }} type="file" />
        </>
    )
}