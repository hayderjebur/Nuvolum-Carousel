import React from 'react';
import '../Sass/components/carousel.scss';
import Modal from './Modal';

const Carousel = ({
  currentImg,
  setCurrentImg,
  showModal,
  setShowModal,
  data,
}) => {
  return (
    <div className='container'>
      <div className='width70'>
        <h1>Page Heading</h1>
        <p>
          loLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          architecto neque illum eius error, totam mollitia reiciendis officiis
          quis magnam?
        </p>
      </div>
      <div className='carousel'>
        {/* Left side arrow icon */}
        <div>
          <i
            className='fas fa-caret-left icon'
            onClick={() => {
              currentImg > 0 && setCurrentImg(currentImg - 1);
            }}
          ></i>
        </div>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <div className='content'>
            <div
              className='modalImg'
              style={{ backgroundImage: `url(${data[currentImg].image})` }}
              onClick={() => setShowModal(true)}
            />
          </div>{' '}
        </Modal>
        {/* Carousel  */}
        <div
          className='carousel '
          style={{
            backgroundImage: `url(${data[currentImg].image})`,
          }}
          onClick={() => setShowModal(true)}
        />
        {/* Right side arrow icon */}
        <div>
          <i
            className='fas fa-caret-right  icon'
            onClick={() => {
              currentImg < data.length - 1 && setCurrentImg(currentImg + 1);
            }}
          ></i>
        </div>
      </div>
      {/* Circle icons */}
      <div>
        <i
          className={`fas fa-circle icon_circle ${
            currentImg === 0 ? 'dark' : 'gray'
          }`}
          onClick={() => setCurrentImg(0)}
        ></i>
        <i
          className={`fas fa-circle icon_circle ${
            currentImg === 1 ? 'dark' : 'gray'
          }`}
          onClick={() => setCurrentImg(1)}
        ></i>
        <i
          className={`fas fa-circle icon_circle ${
            currentImg === 2 ? 'dark' : 'gray'
          }`}
          onClick={() => setCurrentImg(2)}
        ></i>
        <i
          className={`fas fa-circle icon_circle ${
            currentImg === 3 ? 'dark' : 'gray'
          }`}
          onClick={() => setCurrentImg(3)}
        ></i>
        <i
          className={`fas fa-circle icon_circle ${
            currentImg === 4 ? 'dark' : 'gray'
          }`}
          onClick={() => setCurrentImg(4)}
        ></i>
      </div>
    </div>
  );
};

export default Carousel;
