const MOCK_DELAY_MS = 400;

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), MOCK_DELAY_MS));
}

const MOCK_ONLINE_REQUESTS = [
  {
    id: "online-1",
    customer: "Primo Morandarte",
    type: "pickup",
    status: "pending",
    items: [
      { id: "i1", name: "Cappuccino", price: 100, quantity: 1 },
      { id: "i2", name: "Butter Croissant", price: 300, quantity: 1 },
    ],
    total: 400,
  },
  {
    id: "online-2",
    customer: "Primo Morandarte",
    type: "delivery",
    status: "pending",
    items: [
      { id: "i1", name: "Cappuccino", price: 100, quantity: 1 },
      { id: "i2", name: "Butter Croissant", price: 300, quantity: 1 },
    ],
    total: 400,
    address: "Siling Bata, Pandi, Bulacan",
    eta: "20-35 minutes",
    paymentMethod: "GCash QR",
    paymentSub: "Scan and pay via GCash",
    subtotal: 400,
    deliveryFee: 50,
  },
  {
    id: "online-3",
    customer: "Ana Reyes",
    type: "delivery",
    status: "pending",
    items: [{ id: "i3", name: "Kopi Susu Gula Aren", price: 120, quantity: 1 }],
    total: 170,
    address: "Poblacion, Pandi, Bulacan",
    eta: "15-25 minutes",
    paymentMethod: "GCash QR",
    paymentSub: "Scan and pay via GCash",
    subtotal: 120,
    deliveryFee: 50,
  },
];

const MOCK_WALKIN_REQUESTS = [
  {
    id: "walkin-1",
    customer: "Juan Dela Cruz",
    type: "pickup",
    status: "pending",
    items: [{ id: "i1", name: "Cappuccino", price: 100, quantity: 2 }],
    total: 200,
  },
];

export function fetchOnlineOrderRequests() {
  return delay(MOCK_ONLINE_REQUESTS);
}

export function fetchWalkInOrderRequests() {
  return delay(MOCK_WALKIN_REQUESTS);
}

export function acceptOrderRequest(id) {
  return delay({ id, status: "accepted" });
}

export function declineOrderRequest(id) {
  return delay({ id, status: "declined" });
}
