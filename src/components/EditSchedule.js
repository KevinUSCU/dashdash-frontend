import React from 'react'
import DayOfWeekBtn from './common-elements/DayOfWeekBtn'
import AddNewButton from './common-elements/AddNewButton'

const EditSchedule = () => {

  return (
    <div className="body">
      <div className="d-flex title align-items-center justify-content-center">
        <h3 className="py-4 title font-weight-bold">weekday schedule</h3>
        <img className="edit-img pl-1 mb-2" src="./img/branding/edit-white.svg" alt="edit icon" />
      </div>
      <div className="container">
        <div className="days d-flex justify-content-around my-3">
          <DayOfWeekBtn day="Su"/>
          <DayOfWeekBtn day="M"/>
          <DayOfWeekBtn day="T"/>
          <DayOfWeekBtn day="W"/>
          <DayOfWeekBtn day="Th"/>
          <DayOfWeekBtn day="F"/>
          <DayOfWeekBtn day="S"/>
        </div>
      </div>
      <div className="plan-items d-flex flex-column align-items-center">
        <div className="plan-item row d-flex flex-nowrap align-items-center mt-2">
          <img className="order-img pl-2 pr-2 col-2" src="./img/branding/hamburger-nav-white.svg" alt="navigation hamburger" />
          <p className="col-6 my-0 pl-0 text-left item-name">shower</p>
          <img className="skippable-img pl-2 pr-2 col-2" src="./img/branding/skip-white.svg" alt="skip" />
          <div className="md-form col-2 my-0 px-2">
            <input defaultValue="10" type="text" id="form1" class="form-control"/>
            <label htmlFor="form1"></label>
          </div>
        </div>
      </div>

      <div className="plan-items d-flex flex-column align-items-center">
        <div className="plan-item row d-flex flex-nowrap align-items-center mt-2">
          <img className="order-img pl-2 pr-2 col-2" src="./img/branding/hamburger-nav-white.svg" alt="navigation hamburger" />
          <p className="col-6 my-0 pl-0 text-left item-name">get dressed</p>
          <img className="skippable-img pl-2 pr-2 col-2" src="./img/branding/skip-white.svg" alt="skip" />
          <div className="md-form col-2 my-0 px-2">
            <input defaultValue="5" type="text" id="form1" class="form-control"/>
            <label htmlFor="form1"></label>
          </div>
        </div>
      </div>

      <div className="plan-items d-flex flex-column align-items-center">
        <div className="plan-item row d-flex flex-nowrap align-items-center mt-2">
          <img className="order-img pl-2 pr-2 col-2" src="./img/branding/hamburger-nav-white.svg" alt="navigatiob hamburger" />
          <p className="col-6 my-0 pl-0 text-left item-name">grab coffee and breakfast</p>
          <img className="col-2" alt="empty" />
          <div className="md-form col-2 my-0 px-2">
            <input defaultValue="15" type="text" id="form1" class="form-control"/>
            <label htmlFor="form1"></label>
          </div>
        </div>
      </div>

      <div className="add-btn-contain">
        <AddNewButton />
      </div>

      <div className="footer-container py-3">
        <h4 className="font-weight-bold mt-1">UPDATE ></h4>
      </div>
    </div>
  )
}

export default EditSchedule
