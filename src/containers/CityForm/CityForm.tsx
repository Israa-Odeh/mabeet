import { CityFormProps } from "./types";
import EntityDialog from "../EntityDialog";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";
import { TextField, DialogActions, Button } from "@mui/material";
import {
  textFieldStyles,
  cancelButtonStyles,
  submitButtonStyles,
} from "../Shared/styles";
import styles from "../Shared/Form.module.css";

const CityForm = ({
  initialValues,
  onSubmit,
  title,
  open,
  onClose,
}: CityFormProps) => {
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
              name="name"
              label="City Name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={textFieldStyles}
            />
            <TextField
              fullWidth
              name="description"
              label="Description"
              multiline
              rows={4}
              value={values.description}
              onChange={handleChange}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
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

export default CityForm;
