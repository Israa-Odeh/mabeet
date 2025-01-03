import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

const useCheckInCheckOutDates = () => {
  const [checkInDate, setCheckInDate] = useState<Dayjs | null>(dayjs());
  const [checkOutDate, setCheckOutDate] = useState<Dayjs | null>(
    dayjs().add(1, "day")
  );

  const minCheckInDate = dayjs();
  const maxCheckInDate = dayjs().add(1, "year").subtract(1, "day");
  const minCheckOutDate = checkInDate
    ? checkInDate.add(1, "day")
    : dayjs().add(1, "day");
  const maxCheckOutDate = dayjs().add(1, "year");

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      if (
        checkOutDate.isBefore(checkInDate) ||
        checkOutDate.isSame(checkInDate)
      ) {
        setCheckOutDate(checkInDate.add(1, "day"));
      }
    }
  }, [checkInDate, checkOutDate]);

  return {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    minCheckInDate,
    maxCheckInDate,
    minCheckOutDate,
    maxCheckOutDate,
  };
};

export default useCheckInCheckOutDates;
