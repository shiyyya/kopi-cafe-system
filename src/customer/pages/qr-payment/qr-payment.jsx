import { useState } from 'react';
import './qr-payment.css';
import Header from '/src/components/blocks/header-wback/header-wback.jsx';
import Input from '/src/components/elements/input/input.jsx';
import Button from '/src/components/elements/button/button.jsx';
import qrImage from '/src/assets/images/qr.png';

function formatAmount(value) {
  const number = Number(value) || 0;
  return `₱${number.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const REFERENCE_LENGTH = 13;

export default function QrPayment({
  orderId='KE-1221',
  amount,
  payToName = 'Kopi Express Pandi',
  payToNumber = '09171234567',
  onConfirm,
}) {
  const [referenceNumber, setReferenceNumber] = useState('');

  const canConfirm = referenceNumber.length === REFERENCE_LENGTH;

  const handleReferenceChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, REFERENCE_LENGTH);
    setReferenceNumber(digitsOnly);
  };

  const handleConfirm = () => {
    if (!canConfirm) return;
    onConfirm?.(referenceNumber);
  };

  return (
    <div className="qrPaymentPage">
      <Header title="GCash Payment" />

      <div className="qrPaymentContainer">
        <div className="qrCard">
          <div className="qrCardHeader">
            <p className="qrCardHeaderLabel">KOPI EXPRESS PANDI</p>
            <p className="qrCardHeaderOrder">{orderId}</p>
          </div>

          <div className="qrCardBody">
            <p className="qrInstruction">Scan with your GCash app to pay</p>

            <div className="qrImageWrap">
              <img className="qrImage" src={qrImage} alt="GCash payment QR code" />
            </div>

            <p className="amountLabel">Amount to pay</p>
            <p className="amountValue">{formatAmount(amount)}</p>

            <div className="payToRow">
              <p className="payToLabel">Pay to · {payToName}</p>
              <p className="payToNumber">{payToNumber}</p>
            </div>

            <hr className="divider" />

            <label className="refLabel" htmlFor="gcashReference">
              Enter GCash Reference Number
            </label>
            <Input
              id="gcashReference"
              name="gcashReference"
              type="text"
              inputMode="numeric"
              maxLength={REFERENCE_LENGTH}
              value={referenceNumber}
              onChange={handleReferenceChange}
              placeholder="e.g. 123456789012"
              className="refInput"
            />

            <Button
              className="confirmButton"
              disabled={!canConfirm}
              onClick={handleConfirm}
            >
              Confirm Payment
            </Button>

            <p className="refHint">Find your reference in GCash → Transaction History.</p>
          </div>
        </div>
      </div>
    </div>
  );
}