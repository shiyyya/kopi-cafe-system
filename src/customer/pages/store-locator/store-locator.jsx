import './store-locator.css';
import Header from '/src/components/blocks/header-wback/header-wback.jsx';
import cafePhoto from '/src/assets/images/cafe.png';
import DeliveryEligibility from '/src/components/cards/delivery-eligibility/delivery-eligibility.jsx';
import ClockIcon from '/src/assets/icons/schedule.svg?react';
import PhoneIcon from '/src/assets/icons/contact.svg?react';
import NavigationIcon from '/src/assets/icons/near-me.svg?react';

const DELIVERY_ZONES = ['Siling Bata', 'Poblacion', 'Bunsuran', 'San Roque', 'Siling Matanda'];

const STORE = {
  name: 'Kopi Express – Pandi Main',
  address: 'Siling Bata, Pandi, Bulacan',
  hours: 'Mon–Sun · 7:00 AM – 9:00 PM',
  phone: '0917-123-4567',
};

export default function StoreLocator() {
  return (
    <div className="storeLocatorPage">
      <Header title="Store Locator" />

      <div className="locatorContainer">
        <div className="storeCard">
          <img className="storePhoto" src={cafePhoto} alt="Kopi Express cafe interior" />

          <div className="storeBody">
            <div className="storeTitleRow">
              <h2>{STORE.name}</h2>
              <span className="statusBadge">Open</span>
            </div>
            <p className="storeAddress">{STORE.address}</p>

            <div className="storeDetails">
              <div className="storeDetailRow"><ClockIcon className="detailIcon" /><span>{STORE.hours}</span></div>
              <div className="storeDetailRow"><PhoneIcon className="detailIcon" /><span>{STORE.phone}</span></div>
              <div className="storeDetailRow"><NavigationIcon className="detailIcon" /><span>Pandi, Bulacan</span></div>
            </div>

            <hr className="divider" />

            <p className="zonesLabel">Delivery Zones</p>
            <div className="zonesList">
              {DELIVERY_ZONES.map((zone) => (
                <span key={zone} className="zoneTag">{zone}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="eligibilityNoZones">
          <DeliveryEligibility deliveryZones={DELIVERY_ZONES} />
        </div>
      </div>
    </div>
  );
}