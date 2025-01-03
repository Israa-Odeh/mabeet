import { HotelFormProps } from "./types";
import EntityDialog from "../EntityDialog";
import { Formik, Form } from "formik";
import { validationSchema } from "./schema";
import { TextField, MenuItem, DialogActions, Button } from "@mui/material";
import {
  textFieldStyles,
  cancelButtonStyles,
  submitButtonStyles,
} from "../Shared/styles";
import styles from "../Shared/Form.module.css";

const HotelForm = ({
  initialValues,
  onSubmit,
  title,
  open,
  onClose,
  cities,
}: HotelFormProps) => {
  return (
    <EntityDialog open={open} onClose={onClose} title={title}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <Form className={styles.form}>
            {!cities ? (
              <TextField
                fullWidth
                name="id"
                label="Hotel ID"
                value={values.id}
                sx={textFieldStyles}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            ) : (
              <TextField
                fullWidth
                name="id"
                label="City"
                select
                value={values.id}
                onChange={handleChange}
                error={touched.id && Boolean(errors.id)}
                helperText={touched.id && errors.id}
                sx={textFieldStyles}
              >
                {cities.map((city) => (
                  <MenuItem key={city.id} value={city.id}>
                    {city.name}
                  </MenuItem>
                ))}
              </TextField>
            )}

            <TextField
              fullWidth
              name="name"
              label="Hotel Name"
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
            <TextField
              fullWidth
              name="hotelType"
              label="Hotel Type"
              select
              value={values.hotelType}
              onChange={handleChange}
              error={touched.hotelType && Boolean(errors.hotelType)}
              helperText={touched.hotelType && errors.hotelType}
              sx={textFieldStyles}
            >
              <MenuItem value={1}>Standard</MenuItem>
              <MenuItem value={2}>Resort</MenuItem>
              <MenuItem value={3}>Boutique</MenuItem>
              <MenuItem value={4}>Luxury</MenuItem>
              <MenuItem value={5}>Budget</MenuItem>
            </TextField>
            <TextField
              fullWidth
              name="starRating"
              label="Star Rating"
              select
              value={values.starRating}
              onChange={handleChange}
              error={touched.starRating && Boolean(errors.starRating)}
              helperText={touched.starRating && errors.starRating}
              sx={textFieldStyles}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <MenuItem key={rating} value={rating}>
                  {rating} {rating === 1 ? "Star" : "Stars"}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              name="latitude"
              label="Latitude"
              type="number"
              value={values.latitude}
              onChange={handleChange}
              error={touched.latitude && Boolean(errors.latitude)}
              helperText={touched.latitude && errors.latitude}
              sx={textFieldStyles}
            />
            <TextField
              fullWidth
              name="longitude"
              label="Longitude"
              type="number"
              value={values.longitude}
              onChange={handleChange}
              error={touched.longitude && Boolean(errors.longitude)}
              helperText={touched.longitude && errors.longitude}
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

export default HotelForm;
