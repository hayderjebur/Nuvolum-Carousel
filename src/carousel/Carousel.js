import React, { useState } from 'react';
import './carousel.scss';
import data from '../slider-data.json';

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  //   <img src={data[0].image} />
  return (
    <div className='main'>
      <div className='carousel'>
        <div>
          <h1>Page Heading</h1>
          <p>
            loLorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis architecto neque illum eius error, totam mollitia
            reiciendis officiis quis magnam?
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <i
              class='fas fa-caret-left icon'
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            ></i>
          </div>

          <div
            className='carouselInner'
            style={{ backgroundImage: `url(${data[currImg].image})` }}
          >
            {/* <div
              className='left'
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            ></div> */}

            {/* <div
              className='right'
              onClick={() => {
                currImg < data.length - 1 && setCurrImg(currImg + 1);
              }}
            ></div> */}
          </div>
          <div>
            <i
              className='fas fa-caret-right  icon'
              onClick={() => {
                currImg < data.length - 1 && setCurrImg(currImg + 1);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
