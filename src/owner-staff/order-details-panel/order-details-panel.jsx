import "./order-details-panel.css";

function peso(amount) {
  return `₱${Number(amount ?? 0).toFixed(2)}`;
}

export default function OrderDetailsPanel({ order }) {
  if (!order) return null;

  const statusLabel =
    order.status === "accepted"
      ? "Accepted"
      : order.status === "declined"
        ? "Declined"
        : "Pending";

  return (
    <aside className="orderDetails">
      <div className="detailsCard detailsTop">
        <div className="detailsCustomer">
          <div className="avatar" aria-hidden="true" />
          <div>
            <p className="customerName">{order.customer}</p>
            <p className="orderType">
              {order.type === "delivery" ? "Delivery" : "Pick-Up"}
            </p>
          </div>
        </div>
        <span className={`statusBadge status${order.status}`}>
          <span className="statusDot" />
          {statusLabel}
        </span>
      </div>

      {order.type === "delivery" && order.address && (
        <div className="detailsCard">
          <p className="detailsLabel">
            <span className="iconPin" aria-hidden="true" /> Delivery address
          </p>
          <p className="detailsValue">{order.address}</p>
          {order.eta && (
            <p className="detailsEta">
              <span className="iconClock" aria-hidden="true" /> Estimated: {order.eta}
            </p>
          )}
        </div>
      )}

      {order.paymentMethod && (
        <div className="detailsCard">
          <p className="detailsLabel">Payment Method</p>
          <div className="paymentRow">
            <span className="iconQr" aria-hidden="true" />
            <div>
              <p className="detailsValue">{order.paymentMethod}</p>
              <p className="detailsSub">{order.paymentSub}</p>
            </div>
          </div>
        </div>
      )}

      <div className="detailsCard orderSummary">
        <p className="detailsLabel">Order Summary</p>

        <div className="summaryItems">
          {order.items.map((item) => (
            <div className="summaryItem" key={item.id}>
              <div className="summaryThumb" />
              <div className="summaryInfo">
                <p className="summaryName">{item.name}</p>
                {(item.variant || item.quantity) && (
                  <p className="summaryVariant">
                    {item.variant}
                    {item.variant && item.quantity ? " · " : ""}
                    {item.quantity ? `x${item.quantity}` : ""}
                  </p>
                )}
              </div>
              <p className="summaryPrice">
                {peso(item.price * (item.quantity ?? 1))}
              </p>
            </div>
          ))}
        </div>

        <div className="summaryTotals">
          {order.subtotal != null && (
            <div className="summaryRow">
              <span>Subtotal</span>
              <span>{peso(order.subtotal)}</span>
            </div>
          )}
          {order.deliveryFee != null && (
            <div className="summaryRow">
              <span>Delivery fee</span>
              <span>{peso(order.deliveryFee)}</span>
            </div>
          )}
          <div className="summaryRow summaryRowTotal">
            <span>Total</span>
            <span>{peso(order.total)}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
