import { useLocation } from "react-router-dom";
import { useCheckoutMutation, useFormikCheckout } from "./hooks";
import { useSnackbar, Snackbar } from "@components/Snackbar";
import { getAuthData } from "@utils/getAuthData";
import { BookingSummary, PaymentMethodSelect } from "./components";
import FormField from "@components/FormField";
import Button from "@mui/material/Button";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const location = useLocation();
  const { hotelName, roomNumber, roomType, totalCost } = location.state;

  const { given_name, family_name } = getAuthData() ?? {};
  const customerFullName = `${given_name} ${family_name}`;

  const { handleSubmit, isPending, isError } = useCheckoutMutation(
    hotelName,
    roomNumber,
    roomType,
    totalCost
  );
  const { open, handleClose } = useSnackbar(isError);

  const formik = useFormikCheckout(handleSubmit, customerFullName);
  const {
    errors,
    touched,
    values,
    handleChange,
    handleSubmit: handleFormSubmit,
  } = formik;
  const { customerName, paymentMethod } = values;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {isError && (
          <Snackbar
            open={open}
            message="Unable to create your booking. Please try again later."
            severity="error"
            onClose={handleClose}
          />
        )}

        <BookingSummary
          hotelName={hotelName}
          roomNumber={roomNumber}
          roomType={roomType}
          totalCost={totalCost}
        />

        <form onSubmit={handleFormSubmit}>
          <div className={styles.content}>
            <FormField
              name="customerName"
              type="text"
              value={customerName}
              readOnly
            />
            <PaymentMethodSelect
              value={paymentMethod}
              onChange={handleChange}
              error={errors.paymentMethod}
              touched={touched.paymentMethod}
            />
          </div>
          <div className={styles.footer}>
            <Button
              disableElevation
              disableRipple
              type="submit"
              variant="contained"
              className={styles.button}
              disabled={isPending}
            >
              {isPending ? "Processing..." : "Complete Booking"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
