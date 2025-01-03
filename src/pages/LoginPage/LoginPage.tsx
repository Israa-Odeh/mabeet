import hotelRoomImage from "@assets/Login/hotel-room.png";
import LoginForm from "./components";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.leftSideImage}
        src={hotelRoomImage}
        alt="Hotel room with a beautiful view, featuring two chairs with a lamp between them for a cozy seating area"
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
