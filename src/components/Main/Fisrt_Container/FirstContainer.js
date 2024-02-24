import React from 'react'
import './FirstContainer.scss';

const FirstContainer = () => {
  return (
        <div>
        <div className="main_heading">
        <h1>Best Website builders in the US</h1>
        </div>
        <div className="detail_updates">
            <div className="update">
                <div className="last-update">
                    <div className="vector">
                        <div className="vector_circle">
                        <img src="./images/Vector.png" alt="" />
                        </div>
                        <p>Last Updated - February 22, 2020</p>
                    </div>
                    <div className="vector">
                    <div className="vector_circle">
                        <img src="./images/Vector2.png" alt="" />
                        </div>
                        <p>Advertising Disclosure</p>
                    </div>
                </div>
            </div>
            <div className="relevant">
                <p>Top Relevant</p>
                <img src="./images/down-arrow.png" alt="" />
            </div>
        </div>
        </div>

  )
}

export default FirstContainer
