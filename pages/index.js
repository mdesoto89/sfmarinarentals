import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <header className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>San Francisco Tech Stay</h1>
        <p className='text-xl text-gray-600'>Perfect for conferences and remote work</p>
      </header>

      <section className='mb-12'>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src='/images/3ebcba13-efa7-487b-93d0-cf63a21023e7.jpeg' alt='Living Room' />
          </div>
          <div>
            <img src='/images/5d756981-505c-4487-8f14-81a52f4a7632.jpeg' alt='Bedroom' />
          </div>
          <div>
            <img src='/images/16e35528-ec9a-4c32-950b-cfea4e83e0e7.jpeg' alt='Workspace' />
          </div>
          <div>
            <img src='/images/2aac6fdf-9a66-405a-8ed7-26ad59d1f96a.jpeg' alt='Kitchen' />
          </div>
        </Carousel>
      </section>

      <div className='text-center mt-12'>
        <button className='bg-blue-600 text-white rounded-2xl px-4 py-2 hover:bg-blue-700'>
          Book Now
        </button>
      </div>
    </div>
  );
}
