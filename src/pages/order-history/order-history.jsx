import { useState } from 'react';
import './order-history.css';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="order-history-page">
      <h1>ORDER HISTORY</h1>
    </div>
  );
}

export default OrderHistory;