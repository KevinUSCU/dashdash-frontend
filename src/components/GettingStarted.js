import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import NextButton from './common-elements/NextButton'

const GettingStarted = () => {

  const grabData = (e) => {
    const kids = document.getElementById('kids')
    const pets = document.getElementById('pets')
    console.log(kids.checked, pets.checked);
  }

  return (
    <div className="body">
      <h2 className="py-4 mb-4 title font-weight-bold">one quick question</h2>
      <img className="selection-img mb-2" src="./img/branding/kids-orange.svg" />
      <h5 className="mb-4">do you have kids?</h5>
      <form>
        <div className="switch">
          <label>
            no
            <input type="checkbox" id="kids"/>
            <span className="lever"></span>
            yes
          </label>
        </div>
        <br/>
        <img className="selection-img mt-4  mb-2" src="./img/branding/pets-orange.svg" />
        <h5 className="mb-4">do you have pets?</h5>
        <div className="switch">
          <label>
            no
            <input type="checkbox" id="pets"/>
            <span className="lever"></span>
            yes
          </label>
        </div>
        <div className="footer-container py-3">
          <Link to={'/scheduleType'} onClick={e => grabData(e)}>
            <NextButton />
          </Link>
        </div>
      </form>
    </div>
  )

}

export default GettingStarted
