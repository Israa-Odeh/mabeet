export const textFieldStyles = {
  "& .MuiInputLabel-root": {
    color: "#20292d",
    fontFamily: "Poppins, serif",
    "&.Mui-focused": {
      color: "#20292d",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#20292d",
    },
    "&:hover fieldset": {
      borderColor: "#20292d",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#20292d",
    },
  },
  "& .MuiInputBase-input": {
    color: "#20292d",
    fontFamily: "Poppins, serif",
  },
};

export const cancelButtonStyles = {
  fontFamily: "Poppins, serif",
  textTransform: "none",
  color: "#20292d",
};

export const submitButtonStyles = {
  fontFamily: "Poppins, serif",
  textTransform: "none",
  backgroundColor: "#20292d",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#20292d",
    opacity: 0.8,
  },
};
