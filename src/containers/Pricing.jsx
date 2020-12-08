import React, { Component } from 'react'
import fullPayment from '../assets/gold.svg'
import monthlyPayment from '../assets/silver.svg'

export default class Pricing extends Component {
  render() {
    return (
      <div className='pricing-w'>
        <div className='pricing__text'>
          <h1 className='pricing__text__header'>It's just $5,000 for the whole 6 months</h1>
          <p className='pricing__text__desc'>You can choose to pay it upfront or monthly.</p>
        </div>
        <div className='pricing__boxes-w'>
          <div className='pricing__box'>
            <div className='pricing__box__header'><h3>SILVER</h3></div>
            <img src={monthlyPayment} className='pricing__box__img' alt='full-payment' />
            <div className='pricing__box__total'>$833.3</div>
            <p className='pricing__box__total-text'>PER MONTH</p>
            <button className='pricing__box__btn'>Apply Now</button>
          </div>
          <div className='pricing__box'>
            <div className='pricing__box__header'><h3>GOLDEN</h3></div>
            <img src={fullPayment} className='pricing__box__img' alt='full-payment' />
            <div className='pricing__box__total'>$5,000</div>
            <p className='pricing__box__total-text'>IN FULL</p>
            <button className='pricing__box__btn'>Apply Now</button>
          </div>
        </div>
      </div>
    )
  }
}
