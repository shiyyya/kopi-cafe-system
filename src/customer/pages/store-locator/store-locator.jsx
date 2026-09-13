import './store-locator.css';
import Header from '/src/components/blocks/header-wback/header-wback.jsx';
import cafePhoto from '/src/assets/images/cafe.png';
import DeliveryEligibility from '/src/components/cards/delivery-eligibility/delivery-eligibility.jsx';
import ClockIcon from '/src/assets/icons/schedule.svg?react';
import PhoneIcon from '/src/assets/icons/contact.svg?react';
import NavigationIcon from '/src/assets/icons/near-me.svg?react';

const DELIVERY_ZONES = ['Siling Bata', 'Poblacion', 'Bunsuran', 'San Roque', 'Siling Matanda'];

const STORES = [
    {
        id: 'poblacion',
        name: 'Kopi-Express Poblacion Branch',
        address: 'Poblacion, Pandi, Bulacan',
        location: 'Poblacion, Pandi, Bulacan',
        hours: 'Mon–Sun · 7:00 AM – 9:00 PM',
        phone: '0917-123-4567',
    },
    {
        id: 'bunsuran',
        name: 'Kopi-Express Bunsuran II Branch',
        address: 'Bunsuran, Pandi, Bulacan',
        location: 'Bunsuran, Pandi, Bulacan',
        hours: 'Mon–Sun · 7:00 AM – 9:00 PM',
        phone: '0917-123-4567',
    },
    {
        id: 'cacarongbata',
        name: 'Kopi-Express Cacarong Bata Branch',
        address: 'Cacarong Bata, Pandi, Bulacan',
        location: 'Cacarong Bata, Pandi, Bulacan',
        hours: 'Mon–Sun · 7:00 AM – 9:00 PM',
        phone: '0917-123-4567',
    },
];

export default function StoreLocator() {
    return (
        <div className="storeLocatorPage">
            <Header title="Store Locator" />
            <div className="locatorContainer">
                {STORES.map((store) => (
                    <div className="storeCard" key={store.id}>
                        <img
                            className="storePhoto"
                            src={cafePhoto}
                            alt={`${store.name} cafe interior`}
                        />
                        <div className="storeBody">
                            <div className="storeTitleRow">
                                <h2>{store.name}</h2>
                                <span className="statusBadge">Open</span>
                            </div>
                            <p className="storeAddress">{store.address}</p>
                            <div className="storeDetails">
                                <div className="storeDetailRow">
                                    <ClockIcon className="detailIcon" />
                                    <span>{store.hours}</span>
                                </div>
                                <div className="storeDetailRow">
                                    <PhoneIcon className="detailIcon" />
                                    <span>{store.phone}</span>
                                </div>
                                <div className="storeDetailRow">
                                    <NavigationIcon className="detailIcon" />
                                    <span>{store.location}</span>
                                </div>
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
                ))}
                <div className="eligibilityNoZones">
                    <DeliveryEligibility deliveryZones={DELIVERY_ZONES} />
                </div>
            </div>
        </div>
    );
}