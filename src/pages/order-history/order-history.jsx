import { useState } from 'react';
import './order-history.css';
import Header from '/src/components/blocks/header-wback/header-wback.jsx';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="order-history-page">
   <Header title="Order History" />
    </div>
  );
}

export default OrderHistory;