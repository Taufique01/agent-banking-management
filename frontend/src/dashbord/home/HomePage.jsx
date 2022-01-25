import React from 'react'

export  const HomePage=()=> {
    return (
        <div className="home-content">

        <div className="overview-boxes">
        
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Account Balance</div>
            <div className="number">40,876</div>
            </div>
          <i className='bx bx-cart-alt cart'></i>
        </div>

        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Receivable</div>
            <div className="number">38,876</div>
          
          </div>
          <i className='bx bxs-cart-add cart two' ></i>
        </div>

        <div className="box">
          <div className="right-side">
            <div className="box-topic">Today's Transaction</div>
            <div className="number">$12,876</div>
            
          </div>
          <i className='bx bx-cart cart three' ></i>
        </div>

        <div className="box">
          <div className="right-side">
            <div className="box-topic">Month's Transaction</div>
            <div className="number">11,086</div>
            
          </div>
          <i className='bx bxs-cart-download cart four' ></i>
        
        </div>
      </div>


      <div className="overview-boxes">
        
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Cost</div>
            <div className="number">40,876</div>
            </div>
          <i className='bx bx-cart-alt cart'></i>
        </div>

        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Revenue</div>
            <div className="number">38,876</div>
          
          </div>
          <i className='bx bxs-cart-add cart two' ></i>
        </div>

        <div className="box">
          <div className="right-side">
            <div className="box-topic">Today's Costs</div>
            <div className="number">$12,876</div>
            
          </div>
          <i className='bx bx-cart cart three' ></i>
        </div>

        <div className="box">
          <div className="right-side">
            <div className="box-topic">Todays's  Revenue</div>
            <div className="number">11,086</div>
            
          </div>
          <i className='bx bxs-cart-download cart four' ></i>
        
        </div>
      </div>
      </div>

    )
}
