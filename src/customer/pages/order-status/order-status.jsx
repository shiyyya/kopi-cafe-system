import { useState } from 'react';
import './order-status.css';
import Header from '/src/components/blocks/header-wback/header-wback.jsx';
import CheckCircle from '/src/assets/icons/check-circle.svg';
import OrderedItem from '/src/assets/images/cafe.png';
import Address from '/src/assets/icons/location.svg';
import Time from '/src/assets/icons/time.svg';

export default function OrderStatus() {
    return (
    <div className="order-status-page">
     <Header title="Order Status" />

     <div className='order-status-content'>

      <div className='order-info-card'>

        <div className='order-info-details'>
          <h2 className='order-number'> KE-86738 </h2>
          <div className='status-badge'>
            <span className='order-status'>Delivered </span>
          </div>
        </div>
        <p className='order-date'> Aug 10,2026,11:46 PM </p>
      
      </div>

      <div className='order-progress-card'>
        <h2 className='progress-title'>Order Progress</h2>

        <div className='progress-list'>

          <div className='progress-item'>
            <img className='check-circle' src={CheckCircle} alt="Completed"/>
            <div className='progress-details'>
              <h2 className='progress-status'>Order Received</h2>
              <p className='progress-message'>We got your order!</p>
            </div>
          </div>

          <div className='progress-item'>
            <img className='check-circle' src={CheckCircle} alt="Completed"/>
            <div className='progress-details'>
              <h2 className='progress-status'>Preparing Your Order</h2>
              <p className='progress-message'>Our team is brewing and cooking.</p>
            </div>
          </div>

          <div className='progress-item'>
            <img className='check-circle' src={CheckCircle} alt="Completed"/>
            <div className='progress-details'>
              <h2 className='progress-status'>Ready / On The Way</h2>
              <p className='progress-message'>Almost there!</p>
            </div>
          </div>

          <div className='progress-item'>
            <img className='check-circle' src={CheckCircle} alt="Completed"/>
            <div className='progress-details'>
              <h2 className='progress-status'>Delivered</h2>
              <p className='progress-message'>Enjoy your order!</p>
            </div>
          </div>

        </div>

      </div>

      <div className='items-ordered-card'>
        <h2 className='ordered-title'>Items Ordered</h2>

        <div className='ordered-item'>
          <img className='ordered-image' src={OrderedItem} alt="item"/>
          <div className='ordered-details'>
            <h3 className='ordered-name'>Kopi Susu Gula Aren</h3>
            <p className='quantity-temp'>× 1 · Iced</p>
          </div>
          <div className='ordered-price'>
            <span>₱120.00</span>
          </div>
       </div>

        <div className='total-section'>
            <span className='total-font'>Total</span>
            <span className='total-price'>₱170.00</span>
        </div>
        
      </div>

      <div className='delivery-address-card'>

        <div className='delivery-address-header'>
          <img className='address-icon' src={Address} alt="location" />
          <p className='address-title'>Delivery address</p>
        </div>
        <p className='address-location'>Siling Bata, Pandi, Bulacan</p>
        <div className='address-time-row'>
          <img className='time-icon' src={Time} alt="arrival"/>
          <p className='arrival-time'>Estimated: 20–35 minutes</p>
        </div>

      </div>

     </div>

    </div>
  );
}