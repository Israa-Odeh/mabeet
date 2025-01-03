import { useLocation } from "react-router-dom";
import {
  ConfirmationHeader,
  GuestInfo,
  HotelInfo,
  PaymentInfo,
} from "./components";
import { formatDate } from "./utils/formatDate";
import Button from "@mui/material/Button";
import styles from "./ConfirmationPage.module.css";

const ConfirmationPage = () => {
  const location = useLocation();
  const {
    customerName,
    hotelName,
    roomNumber,
    roomType,
    bookingDateTime,
    totalCost,
    paymentMethod,
    bookingStatus,
    confirmationNumber,
  } = location.state;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardContainer}>
        <ConfirmationHeader />

        <div className={styles.confirmationNumber}>
          <span className={styles.label}>Confirmation Number</span>
          <span>{confirmationNumber}</span>
        </div>

        <div className={styles.detailsContainer}>
          <GuestInfo
            customerName={customerName}
            paymentMethod={paymentMethod}
          />

          <HotelInfo
            hotelName={hotelName}
            roomNumber={roomNumber}
            roomType={roomType}
            bookingDateTime={formatDate(bookingDateTime)}
          />

          <PaymentInfo totalCost={totalCost} bookingStatus={bookingStatus} />
        </div>

        <div className={styles.actions}>
          <Button
            disableElevation
            disableRipple
            variant="contained"
            className={styles.printButton}
            onClick={handlePrint}
          >
            Print Confirmation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
