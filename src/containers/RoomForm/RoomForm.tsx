import { RoomFormProps } from "./types";
import EntityDialog from "../EntityDialog";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";
import { TextField, DialogActions, Button } from "@mui/material";
import {
  cancelButtonStyles,
  submitButtonStyles,
  textFieldStyles,
} from "../Shared/styles";
import styles from "../Shared/Form.module.css";

const RoomForm = ({
  initialValues,
  onSubmit,
  title,
  open,
  onClose,
}: RoomFormProps) => {
  return (
    <EntityDialog open={open} onClose={onClose} title={title}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <Form className={styles.form}>
            <TextField
              fullWidth
              name="roomNumber"
              label="Room Number"
              value={values.roomNumber}
              onChange={handleChange}
              error={touched.roomNumber && Boolean(errors.roomNumber)}
              helperText={touched.roomNumber && errors.roomNumber}
              sx={textFieldStyles}
            />

            <TextField
              fullWidth
              name="cost"
              type="number"
              label="Cost"
              value={values.cost}
              onChange={handleChange}
              error={touched.cost && Boolean(errors.cost)}
              helperText={touched.cost && errors.cost}
              sx={textFieldStyles}
            />

            <DialogActions>
              <Button variant="text" onClick={onClose} sx={cancelButtonStyles}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={submitButtonStyles}
              >
                {isSubmitting ? "Saving..." : title}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </EntityDialog>
  );
};

export default RoomForm;
