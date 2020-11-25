import React, { Component } from 'react'
import fullPayment from '../assets/full.png'
import monthlyPayment from '../assets/monthly.png'

export default class Pricing extends Component {
  render() {
    return (
      <div className='pricing-w'>
        <div className='pricing__text'>
          <h1 className='pricing__text__header'>It's just<span>$4,000</span></h1>
          <p className='pricing__text__desc'>You can choose to pay the whole amount up front or pay it in installments.</p>
        </div>
        <div className='pricing__boxes-w'>
          <div className='pricing__box pricing__box--monthly'>
            <h3 className='pricing__box__header'>SILVER</h3>
            <div className='pricing__box__total'>$1,000</div>
            <p className='pricing__box__total-text'>PER MONTH</p>
            <img src={monthlyPayment} className='pricing__box__img' alt='full-payment' />
            <button className='pricing__box__btn'>REGISTER NOW</button>
          </div>
          <div className='pricing__box pricing__box--upfront'>
            <h3 className='pricing__box__header'>GOLDEN</h3>
            <div className='pricing__box__total'>$4,000</div>
            <p className='pricing__box__total-text'>IN FULL</p>
            <img src={fullPayment} className='pricing__box__img' alt='full-payment' />
            <button className='pricing__box__btn pricing__box__btn--outlined'>REGISTER NOW</button>
          </div>
        </div>
      </div>
    )
  }
}
