import { useState } from 'react';
import './saved-addresses.css';
import Input from '/src/components/elements/input/input.jsx';

export default function SavedAddresses({ addresses, onAdd, onRemove }) {
  const [newAddress, setNewAddress] = useState('');

  const handleAdd = () => {
    const value = newAddress.trim();
    if (!value) return;
    onAdd(value);
    setNewAddress('');
  };

  return (
    <div className="settingsCard">
      <h3 className="cardTitle">Saved Addresses</h3>

      {addresses.map((address, index) => (
        <div className="addressRow" key={address + index}>
          <span className="addressText">{address}</span>
          <button
            type="button"
            className="removeAddressBtn"
            onClick={() => onRemove(index)}
            aria-label={`Remove ${address}`}
          >
            ×
          </button>
        </div>
      ))}

      <Input
        name="newAddress"
        className="fieldInput addressInput"
        placeholder="Add new delivery address..."
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />

      <button type="button" className="addAddressBtn" onClick={handleAdd}>
        + Add Address
      </button>
    </div>
  );
}