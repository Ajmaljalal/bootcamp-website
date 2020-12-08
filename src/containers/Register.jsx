import React, { Component } from "react";
import Registerimage from "../assets/Frameregister.svg";
import blueCircle from "../assets/bluecircle.svg";
import orangeCircle from "../assets/orangecircle.svg";
import redCircle from "../assets/redcircle.svg";

export default class Register extends Component {
  render() {
    return (
      <div className="register-w">
        <div className="blue-circle-1">
          <img src={blueCircle} alt="" />
        </div>
        <div className="orange-circle-1">
          <img src={orangeCircle} alt="" />
        </div>
        <div className="red-circle-1">
          <img src={redCircle} alt="" />
        </div>
        <div className="blue-circle-2">
          <img src={blueCircle} alt="" />
        </div>
        <form action="submit" className="form-container">
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
                type="text"
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
                required
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
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field-occupation"
                type="text"
                placeholder="Previous or Current Occupation"
                required
              />
            </div>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <img
          src={Registerimage}
          alt="Register Table"
          className="register-page-image"
        />
      </div>
    );
  }
}
