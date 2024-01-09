import React from 'react';

const GoogleMapsPage = () => {
  return (
    <div>
      <h2>Google Maps Page</h2>
      <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
        <iframe
          title="Virginia Tech Drillfield"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.6360132336186!2d-80.42334748505616!3d37.22957347987257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d9bdce2897a15%3A0x52a2fb0a2eac1f61!2sDrillfield%2C%20Blacksburg%2C%20VA%2024011!5e0!3m2!1sen!2sus!4v1644094506781!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapsPage;
