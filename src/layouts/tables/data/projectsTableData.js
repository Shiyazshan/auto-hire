/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// AutoHire React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Utility function to generate a random 10-digit phone number
const generateRandomPhone = () => {
  const phone = Math.floor(Math.random() * 10000000000); // Generates a 10-digit number
  return `+${phone.toString().padStart(10, "0")}`; // Prepending "+" and ensuring it is 10 digits long
};

// Utility function to generate a random score between 1 and 10
const generateRandomScore = () => {
  return Math.floor(Math.random() * 10) + 1; // Generates a score between 1 and 10
};

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "author", width: "30%", align: "left" },
      { Header: "Email", accessor: "function", align: "left" },
      { Header: "Phone", accessor: "status", align: "center" },
      { Header: "Score", accessor: "employed", align: "center" },
    ],

    rows: [
      {
        author: (
          <Author
            image={team2}
            name="John Michael"
            email="john@creative-tim.com"
          />
        ),
        function: (
          <MDTypography variant="caption">john@creative-tim.com</MDTypography>
        ),
        status: generateRandomPhone(), // Random phone number
        employed: generateRandomScore(), // Random score
        completion: <Progress color="success" value={100} />,
      },
      {
        author: (
          <Author
            image={team3}
            name="Alexa Liras"
            email="alexa@creative-tim.com"
          />
        ),
        function: (
          <MDTypography variant="caption">alexa@creative-tim.com</MDTypography>
        ),
        status: generateRandomPhone(), // Random phone number
        employed: generateRandomScore(), // Random score
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Laurent Perrier"
            email="laurent@creative-tim.com"
          />
        ),
        function: (
          <MDTypography variant="caption">
            laurent@creative-tim.com
          </MDTypography>
        ),
        status: generateRandomPhone(), // Random phone number
        employed: generateRandomScore(), // Random score
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        author: (
          <Author
            image={team3}
            name="Michael Levi"
            email="michael@creative-tim.com"
          />
        ),
        function: (
          <MDTypography variant="caption">
            michael@creative-tim.com
          </MDTypography>
        ),
        status: generateRandomPhone(), // Random phone number
        employed: generateRandomScore(), // Random score
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        author: (
          <Author
            image={team3}
            name="Richard Gran"
            email="richard@creative-tim.com"
          />
        ),
        function: (
          <MDTypography variant="caption">
            richard@creative-tim.com
          </MDTypography>
        ),
        status: generateRandomPhone(), // Random phone number
        employed: generateRandomScore(), // Random score
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        author: (
          <Author
            image={team4}
            name="Miriam Eric"
            email="miriam@creative-tim.com"
          />
        ),
        function: (
          <MDTypography variant="caption">miriam@creative-tim.com</MDTypography>
        ),
        status: generateRandomPhone(), // Random phone number
        employed: generateRandomScore(), // Random score
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
