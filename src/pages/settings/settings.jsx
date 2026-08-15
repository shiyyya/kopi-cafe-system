import {useState} from 'react';
import './settings.css';

function Settings() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',


  });


   return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <button className="settings-back-button" aria-label="Go back">
          ←
        </button>
        <h1 className="settings-header-title">Settings</h1>
      </div>
 
      <div className="settings-content">
        {/* Profile Information */}
        <div className="settings-card">
          <h2 className="settings-card-title">Profile Information</h2>
 
          <label className="settings-label">Full Name</label>
          <input
            className="settings-input"
            type="text"
            value={profile.fullName}
            onChange={handleChange('fullName')}
          />
 
          <label className="settings-label">Email</label>
          <input
            className="settings-input"
            type="email"
            value={profile.email}
            onChange={handleChange('email')}
          />
 
          <label className="settings-label">Phone</label>
          <input
            className="settings-input"
            type="tel"
            value={profile.phone}
            onChange={handleChange('phone')}
          />
        </div>
 
        {/* Saved Addresses */}
        <div className="settings-card">
          <h2 className="settings-card-title">Saved Addresses</h2>
          {}

          <input
            className="settings-add-address-input"
            type="text"
            placeholder="Add new delivery address..."
            value={newAddress}
            onChange={}
            onKeyDown={}
          />
 
          <button className="settings-add-address-button" onClick={handleAddAddress}>
            <span className="plus-icon">+</span>
            Add Address
          </button>
        </div>
 
        {/* Save Changes */}
        <button className="settings-save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;

/* 
di pa tapos yang html may kulang pa sa address 
owski
*/

  /*
  nja, need export ng function
  
  default ibig sabihin nun un ung makukuha na function agad if not specified
  ung export para pede sya maimport sa iba

  OWKI

  mali pala ako ng type hahahhaa may export talaga yun
  kaya pala

  same sa order_history

  alam mo ba para san ung useState?
  dko masyado gets

  di ko rin masyadong gets eh pero storage na pwedeng mabago habang nngra run
  so parang variable yeah parang

  nagsesearch ka ba? yeah ow yeh

  The useState hook is a built-in React function that allows you to add state variables to functional components, tracking data that changes over time and automatically re-rendering the UI when updates occur
  ok medyo dko parin gets

  ung return isa lang pede ireturn so if div lang man irereturn edi div
  pero if need madami need <> sa loob netoh </> olrayt before html yung mga const?
  dba ang const d na naiiba, d na ba maiiba ung yung sa settings i mean kunware yung label like  fullname, email, phone na mga labels
  gets ko na akala ko d na mababago eh

  wait isipin
  ano ba nilagay ni trish sa settings fullname, email,phone, tas yung sa address

  profile info tsaka saved address
  edi ayun
  tyaka ung new delivery address
  
  yeess

  ayun lagay


  then html na?
  oum sa return

  if may need pa na makita natin lagay nalang later

  pakainit
  */
