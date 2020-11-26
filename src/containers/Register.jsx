import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="register-w">
        <form action="submit" className="form-container">
          <div className="explanation">
            <h1>Register Now</h1>
            <p className="explain-paragraph">
              Please fill out the form below and our team will review it and
              reply back to you via email.
            </p>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field-address"
                type="text"
                placeholder="Address"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-container">
              <input
                className="input-field-city"
                type="text"
                placeholder="City"
                required
              />
            </div>
            <div className="input-container">
              <input
                className="input-field-state"
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
      </div>
    );
  }
}
