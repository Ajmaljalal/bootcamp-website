import React, { Component } from "react"
import DesignSpots from './helpers/designSpots'
import blueEllipse from '../assets/ellipse-bluet.svg'
import purpleDot from '../assets/dot-purple.svg'
import redEllips from '../assets/ellipse-pink.svg'
import registerImage from '../assets/why.svg'

export default class Register extends Component {
  render() {
    return (
      <div className="register-w">
        <img className='register__illustration' src={registerImage} alt='registration illustration' />
        <form className="form-container">
          <h3>Jump on learning new coding skills now</h3>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field input-left input-row-1"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-container">
              <input
                className="input-field input-row-1"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field input-left input-row-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                className="input-field input-row-2"
                type="pnone"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field-address input-row-3"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field-city input-left input-row-4"
                type="text"
                placeholder="City"
                required
              />
            </div>
            <div className="input-container">
              <input
                className="input-field-state input-left"
                type="text"
                placeholder="State"
                required
              />
            </div>
            <div className="input-field-container">
              <div className="input-container">
                <input
                  className="input-field-zip_code"
                  type="text"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <textarea
                className="input-field-occupation"
                placeholder="Previous or Current Occupation"
              />
            </div>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        {DesignSpots(purpleDot, 40, 15)}
        {DesignSpots(redEllips, 86, 40)}
        {DesignSpots(blueEllipse, 50, 80)}
      </div>
    );
  }
}
