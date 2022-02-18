import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Keyboard, Pagination } from 'swiper'

export default function WijnClusters() {
  return (
    <div className="w-4/5 p-8 md:w-1/3">
      <Swiper
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}
        className="mySwiper h-64 rounded-xl bg-white"
      >
        <SwiperSlide className="p-8">Wijnclusters 1</SwiperSlide>
        <SwiperSlide className="p-8">Wijnclusters 2</SwiperSlide>
        <SwiperSlide className="p-8">Wijnclusters 3</SwiperSlide>
        <SwiperSlide className="p-8">Wijnclusters 4</SwiperSlide>
      </Swiper>
    </div>
  )
}
