import React, { useEffect, useState } from 'react';
import './App.css';

const GoogleMapsPage = ({ apiKey }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=maps,marker&v=beta`;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      setMapLoaded(true);
    };

    script.onerror = () => {
      setLoadingError(true);
      console.error('Error loading Google Maps API script.');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  useEffect(() => {
    if (mapLoaded) {
      initMap();
      // Scroll to the map element after it has loaded
      document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
    }
  }, [mapLoaded]);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.227653, lng: -80.421832 }, // Virginia Tech Campus
      zoom: 12,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 37.227653, lng: -80.421832 }, // Virginia Tech Campus
      map: map,
      title: 'Virginia Tech',
    });

    marker.addListener('click', () => {
      console.log('Marker clicked!');
    });
  };

  return (
    <section className="App-section">
      <h2>Google Maps Page</h2>
      {loadingError ? (
        <p style={{ color: 'red' }}>Error loading Google Maps. Please check your API key and try again.</p>
      ) : (
      <div id="map" style={{ width: '800px', height: '800px', margin: '0 auto', marginBottom: '20px' }}></div>
      )}
    </section>
  );
};

export default GoogleMapsPage;
