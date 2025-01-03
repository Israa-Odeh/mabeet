import { useParams, useLocation } from "react-router-dom";
import { getDefaultDate } from "@utils/getDefaultDate";
import { useState, SyntheticEvent } from "react";
import { Container, Paper } from "@mui/material";
import {
  Gallery,
  TabNavigation,
  TabPanel,
  HotelInfo,
  RoomList,
  Reviews,
} from "./components";
import styles from "./HotelPage.module.css";

const HotelPage = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const hotelIdNumber = Number(hotelId);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const hotelName = queryParams.get("hotelName");
  const checkInDate = new Date(
    queryParams.get("checkInDate") || getDefaultDate()
  );
  const checkOutDate = new Date(
    queryParams.get("checkOutDate") || getDefaultDate(1)
  );

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    const content = document.getElementById("hotel-content");
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container maxWidth="lg">
      <Gallery hotelId={hotelIdNumber} />
      <Paper elevation={2} className={styles.contentWrapper} id="hotel-content">
        <TabNavigation
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />

        <TabPanel value={selectedTab} index={0}>
          <HotelInfo hotelId={hotelIdNumber} />
        </TabPanel>

        <TabPanel value={selectedTab} index={1}>
          <RoomList
            hotelId={hotelIdNumber}
            hotelName={hotelName!}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
          />
        </TabPanel>

        <TabPanel value={selectedTab} index={2}>
          <Reviews hotelId={hotelIdNumber} />
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default HotelPage;
