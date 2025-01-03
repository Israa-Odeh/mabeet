import { SxProps } from "@mui/system";

export const textFieldStyles: SxProps = {
  "& .MuiInputBase-root": {
    height: "48px",
  },
  "& .MuiInputBase-input": {
    fontSize: "0.875rem",
    fontFamily: "Poppins, serif",
    fontWeight: 500,
    color: "#20292d",
  },
  "& .MuiInputLabel-root": {
    color: "#20292d",
    fontFamily: "Poppins, serif",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#20292d",
    fontWeight: 500,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#20292d",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "#20292d",
  },
};

export const dayStyles: SxProps = {
  "&.MuiPickersDay-root.Mui-selected": {
    backgroundColor: "#20292d",
  },
  "&:hover": {
    backgroundColor: "#20292d24",
  },
};
