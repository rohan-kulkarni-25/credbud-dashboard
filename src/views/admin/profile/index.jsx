import {
  Box,
  Grid,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";

import ColumnsTable from "../profile/components/ColumnsTable";
import { UTMarks } from "../profile/variables/columnsData";
import tableTeacherTT from "../profile/variables/tableTeacherTT.json";

export default function Overview() {
  const [data, setData] = useState([]);
  const [utmarks, setUTMarks] = useState([]);
  const [prelimmarks, setPrelimMarks] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const apiUrl = "http://localhost:1234/api/v1/user/profile";
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
      setUTMarks(response.data.grantProfile.seven.ut);
      setPrelimMarks(response.data.grantProfile.seven.prelims);
      console.log(data);
      // })
      // .catch(function (error) {
      // Handle any errors here
      // console.error("Error:", error);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 4fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name={data.name || ""}
          post="Student"
          dept="Computer Engineering"
        />

        {/* <ColumnsTable columnsData={UTMarks} tableData={utmarks} /> */}

        <Box
          width={"sm"}
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space",
            gap: 128,
            marginLeft: 24,
          }}
        >
          <div
            style={{
              marginBottom: 24,
              backgroundColor: "white",
              borderRadius: 24,
              padding: 20,
            }}
          >
            <p style={{ fontSize: 24, marginBottom: 12, textAlign: "center" }}>
              Unit Test Marks
            </p>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>SUBJECT</Th>
                  <Th isNumeric>MARKS</Th>
                </Tr>
              </Thead>
              <Tbody>
                {utmarks.map((sub) => {
                  console.log(sub);
                  return (
                    <Tr>
                      <Td>{sub.subject}</Td>
                      <Td isNumeric>{sub.marks > 0 ? sub.marks : "-"}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </div>
          <div
            style={{
              marginBottom: 24,
              backgroundColor: "white",
              borderRadius: 24,
              padding: 20,
            }}
          >
            <p style={{ fontSize: 24, marginBottom: 12, textAlign: "center" }}>
              Prelim Test Marks
            </p>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>SUBJECT</Th>
                  <Th isNumeric>MARKS</Th>
                </Tr>
              </Thead>
              <Tbody>
                {prelimmarks.map((sub) => {
                  console.log(sub);
                  return (
                    <Tr>
                      <Td>{sub.subject}</Td>
                      <Td isNumeric>{sub.marks > 0 ? sub.marks : "-"}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </div>
        </Box>
      </Grid>
      <div
        style={{
          margin: 24,
          backgroundColor: "white",
          borderRadius: 24,
          padding: 20,
        }}
      >
        <p style={{ fontSize: 24, marginBottom: 24 }}>GRANT SHEET</p>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th style={{ fontSize: 18 }}>LP3</Th>
              <Th style={{ fontSize: 18 }}>LP3</Th>
              <Th style={{ fontSize: 18 }}>LP4</Th>
              <Th style={{ fontSize: 18 }}>DAA</Th>
              <Th style={{ fontSize: 18 }}>BT</Th>
              <Th style={{ fontSize: 18 }}>ML</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={data.grantProfile?.seven.practical.lp3.isSubmitted}
                  disabled
                />
              </Td>
              <Td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={data.grantProfile?.seven.practical.lp4.isSubmitted}
                  disabled
                />
              </Td>
              <Td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={data.grantProfile?.seven.theory.DAA.isSubmitted}
                  disabled
                />
              </Td>
              <Td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={data.grantProfile?.seven.theory.BT.isSubmitted}
                  disabled
                />
              </Td>
              <Td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={data.grantProfile?.seven.theory.ML.isSubmitted}
                  disabled
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <p style={{ height: 48 }} />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th style={{ fontSize: 18 }}>-</Th>
              {utmarks.map((sub) => {
                return <Th style={{ fontSize: 18 }}>{sub.subject}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Tr style={{ fontSize: 18 }}>UNIT TEST</Tr>
              </Td>
              {utmarks.map((sub) => {
                return (
                  <Td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={sub.marks > 0}
                      disabled
                    />
                  </Td>
                );
              })}
            </Tr>
            <Tr>
              <Td>
                <Tr style={{ fontSize: 18 }}>PRELIM EXAM</Tr>
              </Td>
              {prelimmarks.map((sub) => {
                return (
                  <Td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={sub.marks > 0}
                      disabled
                    />
                  </Td>
                );
              })}
            </Tr>
          </Tbody>
        </Table>
      </div>
    </Box>
  );
}

{
  /* <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe='20px'
          pb={{ base: "100px", lg: "20px" }}
        /> */
}

{
  /* <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "2 / 1 / 3 / 3",
            "2xl": "1 / 3 / 2 / 4",
          }}
        />
      </Grid> */
}
