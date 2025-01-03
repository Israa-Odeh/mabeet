import { HotelMapProps } from "./types";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import styles from "./HotelMap.module.css";

const HotelMap = ({
  hotel: { latitude, longitude, hotelName },
  nearbyHotels,
}: HotelMapProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Location</h2>
    <div className={styles.mapContainer}>
      <GoogleMap
        center={{ lat: latitude, lng: longitude }}
        zoom={15}
        mapContainerClassName={styles.map}
      >
        <MarkerF
          title={hotelName}
          position={{ lat: latitude, lng: longitude }}
          animation={google.maps.Animation.BOUNCE}
          options={{
            icon: {
              url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath d='M12 2C7.03 2 3 6.03 3 10C3 15 12 22 12 22C12 22 21 15 21 10C21 6.03 16.97 2 12 2Z' fill='%2320292d'/%3E%3Ccircle cx='12' cy='10' r='3' fill='none' stroke='%2320292d' stroke-width='2'/%3E%3Ccircle cx='12' cy='10' r='1.5' fill='none' stroke='%23FFFFFF' stroke-width='2'/%3E%3C/svg%3E",
              scaledSize: new google.maps.Size(30, 45),
            },
          }}
        />
        {nearbyHotels.map(({ id, latitude, longitude, name }) => (
          <MarkerF
            key={id}
            title={name}
            position={{
              lat: latitude,
              lng: longitude,
            }}
            animation={google.maps.Animation.DROP}
            icon={{
              url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath d='M12 2C7.03 2 3 6.03 3 10C3 15 12 22 12 22C12 22 21 15 21 10C21 6.03 16.97 2 12 2Z' fill='%23d70b0b'/%3E%3Ccircle cx='12' cy='10' r='3' fill='none' stroke='%23d70b0b' stroke-width='2'/%3E%3Ccircle cx='12' cy='10' r='1.5' fill='none' stroke='%23FFFFFF' stroke-width='2'/%3E%3C/svg%3E",
              scaledSize: new google.maps.Size(30, 45),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  </div>
);

export default HotelMap;
