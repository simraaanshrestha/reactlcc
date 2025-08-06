import React from 'react'
import {SwiperSlide, Swiper} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Live = () => {
  return (
    <div className='img-container'>
      <br />
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={true} 
        >
        <SwiperSlide>
          <img src="https://img.lazcdn.com/us/domino/f3416e7a-ff61-4123-b321-a7ef4ecaecb0_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" 
          style={{ width: "100%", objectFit: "cover"}} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.lazcdn.com/us/domino/9987cbc2-fbb6-4b80-9165-88a9a9dc7118_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" 
          style={{ width: "100%", objectFit: "cover"}} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.lazcdn.com/us/domino/918190ec-c2bf-437a-83a5-eda2a0824ea3_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" 
          style={{ width: "100%", objectFit: "cover"}} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.lazcdn.com/us/domino/18c7faac-b2e8-4c26-bc52-0d2b1e40394f_NP-1976-688.jpg_2200x2200q80.jpg_.webp" alt="" 
          style={{ width: "100%", objectFit: "cover"}} 
          />
        </SwiperSlide>
      </Swiper>

      <img src="https://img.lazcdn.com/us/domino/bcd53d9b-ab97-4e60-b729-a1270ab5f06a_NP-1188-140.gif_2200x2200q80.gif_.webp" alt="" className="live" style={{ marginLeft: "150px" }} />
    </div>
  )
}

export default Live