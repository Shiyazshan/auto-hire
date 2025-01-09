// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// AutoHire React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// AutoHire React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Offers Extended
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography
              display="inline"
              variant="body2"
              verticalAlign="middle"
            >
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Time-for-Hire"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Application-to-Hire Ratio: 1/2"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Offer Acceptance Rate"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Interview-to-Offer Ratio"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Candidate Source Quality"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
