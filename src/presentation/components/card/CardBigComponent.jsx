import React from 'react'
import Img from '../../assets/img/money.png'

export const CardBigComponent = () => {
  return (
    <div className="content">
      <div className="content__data">
        <h2>Cobertura máxima</h2>
        <p className="content__price">
          <span>S/</span>5MM
        </p>
        <span className="tag tag--green">plan avanzado</span>
      </div>
      <div className="center-element-all">
        <img src={Img} alt="" />
      </div>
    </div>
  )
}
