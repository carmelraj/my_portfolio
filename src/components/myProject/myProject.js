import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './myProject.scss';
import { Link } from 'react-router-dom';
import { slider } from '../dataHandling';


const MyProject = () => {
  const [count, updateCount] = useState(0)
  const [slide, updateSlider] = useState([0])
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    updateSlider(slider[0])
  }, [])

  const nextProject = () => {
    updateCount(count + 1)
    // console.log(count)
    // console.log(slider[count])
    updateSlider(slider[count])
    setAnimation(true)
    setTimeout(function () {
      setAnimation(false)
    }, 1000);
  }

  const prevProject = () => {
    updateCount(count <= 0 ? 0 : count - 1)
    // console.log(count)
    // console.log(slider[count])
    updateSlider(slider[count])
    setAnimation(true)
    setTimeout(function () {
      setAnimation(false)
    }, 1000);
  }

  return (
    <div className="myProject section">
      <div className='d-flex d-flex-column d-flex-horz-center-align'>
        <h2 className='pad-bottom-30'>Rectent Projects</h2>
        <p className='short-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error libero provident harum, numquam doloremque in natus veritatis maxime autem. Velit eius id repellendus! Officia repudiandae maxime dolore? Vel, ea.
        </p>
        <figure>
          <Link to={slide.link} target='_blank' title={slide.title}>
            <img src={slide.src} alt='Project' id='image' className={`img-responsive ${animation ? 'fadein' : ''}`} />
            <div className="info">
              <h3 id="myProject">{slide.siteName}</h3>
              <p id="myProject-desc" className="full-width">{slide.desc}</p>
            </div>
          </Link>
        </figure>
        <div className="btn d-flex d-flex-row d-flex-horz-center-align">
          <button id="prev" className="mar-right-50" onClick={prevProject} disabled={count === 0}>Previous</button>
          <button id="next" onClick={nextProject} disabled={count === slider.length}>Next</button>
        </div>
      </div>
    </div>
  )
};

MyProject.propTypes = {};

MyProject.defaultProps = {};

export default MyProject;
