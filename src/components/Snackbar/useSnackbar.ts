import { useState, useEffect } from "react";

const useSnackbar = (trigger: boolean) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (trigger) {
      setOpen(true);
    }
  }, [trigger]);

  return { open, handleClose };
};

export default useSnackbar;
