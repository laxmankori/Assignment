import React from 'react'
import './Deals.scss'
import dealdata from './DealApi'

const Deals = () => {
  return (
    <div>
      <h1>Related deals you might like for</h1>
      <div className="deals-container">

        {dealdata.map((val,index)=>(
            
        
        <div className="deal-box" key={index}>
        <div className="dealImg">
            <img src="./images/plan img.png" alt="" />
        </div>
            <div className="discount">
                <div>20% Off</div>
                <div>Limited time</div>
            </div>
            <p>Webbuilder 1</p>
            <div className="deal_details">
                <p>Computer  Modern clasic with wix support</p>
                <div className="rate">
                    <div className="afterDiscount">
                    $39.96
                    </div>
                    <div className="beforeDiscount">
                    $49.96
                    <span>   (20% Off)</span>
                    </div>
                </div>
                <div className="button">
                    <button>View Deal</button>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )

}

export default Deals
