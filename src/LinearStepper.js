import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "PERSONAL DETAILS",
    "FAMILY DETAILS",
    "SELECT INSTITUTION",
    "COURSE PREFERENCES",
    "QUALIFICATIONS",
    "FEE PACKAGE",
    "DOCUMENTS REQUIRED",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <Grid container spacing={2}>
            <div style={{ display: "flex", gap: "30px" }}>
              <TextField
                id="fristname"
                label="Frist Name"
                variant="outlined"
                placeholder="Enter Your Full Name"
                margin="normal"
                name="fristname"
                type="text"
                required
              />
              <TextField
                id="gender"
                label="Gender"
                variant="outlined"
                placeholder=""
                margin="normal"
                name="gender"
                type="text"
                required
              />
              <TextField
                id="religion"
                label="Religion"
                variant="outlined"
                placeholder="Please Enter your Religion"
                margin="normal"
                name="religion"
                type="text"
                required
              />
              <TextField
                id="date-of-birth"
                label="Date of Birth"
                variant="outlined"
                margin="normal"
                name="dateOfBirth"
                type="date"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <TextField
                id="cnic-number"
                label="CNIC Number"
                variant="outlined"
                placeholder="Enter Your CNIC Number"
                margin="normal"
                name="cnicNumber"
                type="text"
                required
                inputProps={{
                  pattern: "\\d{5}-\\d{7}-\\d{1}", // validate input as a CNIC number
                  maxLength: 15, // limit input to 15 characters (length of a CNIC number)
                }}
              />
              <TextField
                id="blood-group"
                label="Blood Group"
                variant="outlined"
                placeholder="Enter Your Blood Group"
                margin="normal"
                name="bloodGroup"
                type="text"
                required
              />
              <TextField
                id="marital-status"
                label="Marital Status"
                variant="outlined"
                placeholder="Enter your Marital Status"
                margin="normal"
                name="maritalstatus"
                type="text"
                required
              />
              <TextField
                id="domiciledistrict"
                label="Domicile District"
                variant="outlined"
                placeholder="Enter your Domicile District"
                margin="normal"
                name="domiciledistrict"
                type="text"
                required
              />
            </div>
            <TextField
              type="text"
              id="permanenthomeaddress"
              label="Permanent Home Address"
              variant="outlined"
              placeholder="Enter Your Permanent Home Address"
              fullWidth
              margin="normal"
              name="permanenthomeaddress"
            />
            <TextField
              type="text"
              id="postaladdress"
              label="Postal Address"
              variant="outlined"
              placeholder="Enter Your Postal Address"
              fullWidth
              margin="normal"
              name="postaladdress"
            />

            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="phone"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                margin="normal"
                name="phone"
                style={{ width: "calc(80%)" }}
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="alternatephonenumber"
                label="Alternate Phone Number"
                variant="outlined"
                placeholder="Enter Your Alternate Phone Number"
                margin="normal"
                name="alternatephonenumber"
                style={{ width: "calc(80%)" }}
              />
              {/* add more form fields */}
            </Grid>
          </Grid>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            margin="normal"
            name="emailAddress"
            type="email"
            required
            style={{ width: "calc(50%)" }}
          />
        </>
      );

    case 1:
      return (
        <>
          <Grid container spacing={2}>
            <div style={{ display: "flex", gap: "30px" }}>
              <TextField
                id="fatherfullname"
                label="Father Full Name"
                variant="outlined"
                placeholder="Enter Your Father Full Name"
                margin="normal"
                name="fatherfullname"
                type="text"
                required
              />
              <TextField
                id="guardianfullname"
                label="Guardian Full Name"
                variant="outlined"
                placeholder="Enter Your Guardian Full Name"
                margin="normal"
                name="guardianfullname"
                type="text"
                required
              />
              <TextField
                id="relationshipwithstudent"
                label="Relationship with Student"
                variant="outlined"
                placeholder="Relationship with Student"
                margin="normal"
                name="relationshipwithstudent"
                type="text"
                required
              />
              <TextField
                id="profession"
                label="Profession"
                variant="outlined"
                placeholder="Please Enter your Profession"
                margin="normal"
                name="profession"
                type="text"
                required
              />
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="education"
                  label="Education"
                  variant="outlined"
                  placeholder="Please Enter your Education"
                  margin="normal"
                  name="education"
                  type="text"
                  required
                  style={{ width: "100%" }}
                  inputProps={{ style: { width: "calc(100% - 12px)" } }} // subtract padding and border width
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="date-of-birth"
                  label="Date of Birth"
                  variant="outlined"
                  margin="normal"
                  name="dateOfBirth"
                  type="date"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ width: "100%" }}
                  inputProps={{ style: { width: "calc(100% - 12px)" } }} // subtract padding and border width
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="cnic-number"
                  label="CNIC Number"
                  variant="outlined"
                  placeholder="Enter Your CNIC Number"
                  margin="normal"
                  name="cnicNumber"
                  type="text"
                  required
                  inputProps={{
                    pattern: "\\d{5}-\\d{7}-\\d{1}", // validate input as a CNIC number
                    maxLength: 15, // limit input to 15 characters (length of a CNIC number)
                    style: { width: "calc(100% - 12px)" }, // subtract padding and border width
                  }}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            <TextField
              type="text"
              id="permanenthomeaddress"
              label="Permanent Home Address"
              variant="outlined"
              placeholder="Enter Your Permanent Home Address"
              fullWidth
              margin="normal"
              name="permanenthomeaddress"
            />
            <TextField
              type="text"
              id="postaladdress"
              label="Postal Address"
              variant="outlined"
              placeholder="Enter Your Postal Address"
              fullWidth
              margin="normal"
              name="postaladdress"
            />

            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="phone"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                margin="normal"
                name="phone"
                style={{ width: "calc(80%)" }}
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="alternatephonenumber"
                label="Alternate Phone Number"
                variant="outlined"
                placeholder="Enter Your Alternate Phone Number"
                margin="normal"
                name="alternatephonenumber"
                style={{ width: "calc(80%)" }}
              />
              {/* add more form fields */}
            </Grid>
          </Grid>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            margin="normal"
            name="emailAddress"
            type="email"
            required
            style={{ width: "calc(50%)" }}
          />
        </>
      );
    case 2:
      return (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>Hizb ur Rahman Islamic High School (Class 6th to 10th)</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>
              Hizb ur Rahman Islamic Science College (Intermediate and Bachelor
              Degree)
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>
              Hizb ur Rahman Islamic Science College for Women (Intermediate and
              Bachelor Degree)
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>Dars e Nizami (Islamic Scholar Degree)</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>Tahfiz ul Quran (Memorization of Quran)</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>Tuition Academy (Paid Private Lessons)</p>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <h1>High School Programmes</h1>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>Class 6th</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>Class 7th</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>Class 8th</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>Class 9th</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>Class 10th</p>
            </div>
          </div>

          <h1>Intermediate Programmes</h1>

          <div style={{}}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>FSc Pre Medical (Physics, Chemistry, Boilogy)</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>
                FSc Pre Engineering (Physics, Chemistry, Mathematics)
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>ICS General Science (Mathematics, Computer, Physics)</p>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>FAIT (Computer, Economics, Islamic Elective)</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>
                I-Com (Accounting, Economics, Commerce)
              </p>
            </div>
          </div>

          <h1>BS Hons Degree Programmes</h1>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "60px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>Zoology</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "80px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>Chemistry</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "80px",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>Physics</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "80px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>Mathematics</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "70px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>Islamic Studies</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "70px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>English</p>
            </div>
          </div>

          <h1>Associate Degree Programmes</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox id="checkbox1" />
              <p>ADP Science</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "80px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>ADP Arts</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "80px",
              }}
            >
              <Checkbox id="checkbox2" />
              <p style={{ margin: "0 0 0 10px" }}>ADP Commerce</p>
            </div>
          </div>
          <h1>Tahfiz ul Quran Programmes</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ margin: "0 0 0 10px" }}>Tahfiz ul Quran</p>
          </div>
          <h1>Dars e Nizami Programmes</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p>Dars e Nizami</p>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "400px" }}>Primary</p>
            <TextField
              type="text"
              id="school/board/university"
              label="School/Board/University"
              variant="outlined"
              placeholder="Enter School/Board/University"
              margin="normal"
              name="school/board/university"
              style={{ width: "calc(80%)" }}
            />
            {/* add more form fields */}
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="passingyear"
                label="Passing Year"
                variant="outlined"
                placeholder="Enter Passing Year"
                margin="normal"
                name="passingyear"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="rollno"
                label="Roll No"
                variant="outlined"
                placeholder="Enter Roll No"
                margin="normal"
                name="rollno"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="subjects"
                label="Subjects"
                variant="outlined"
                placeholder="Enter Subjects"
                margin="normal"
                name="subjects"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalmarks"
                label="Total Marks"
                variant="outlined"
                placeholder="Enter Total Marks"
                margin="normal"
                name="totalmarks"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="marksobtained"
                label="Marks Obtained"
                variant="outlined"
                placeholder="Enter Marks Obtained"
                margin="normal"
                name="marksobtained"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "400px" }}>Matric</p>
            <TextField
              type="text"
              id="school/board/university"
              label="School/Board/University"
              variant="outlined"
              placeholder="Enter School/Board/University"
              margin="normal"
              name="school/board/university"
              style={{ width: "calc(80%)" }}
            />
            {/* add more form fields */}
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="passingyear"
                label="Passing Year"
                variant="outlined"
                placeholder="Enter Passing Year"
                margin="normal"
                name="passingyear"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="rollno"
                label="Roll No"
                variant="outlined"
                placeholder="Enter Roll No"
                margin="normal"
                name="rollno"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="subjects"
                label="Subjects"
                variant="outlined"
                placeholder="Enter Subjects"
                margin="normal"
                name="subjects"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalmarks"
                label="Total Marks"
                variant="outlined"
                placeholder="Enter Total Marks"
                margin="normal"
                name="totalmarks"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="marksobtained"
                label="Marks Obtained"
                variant="outlined"
                placeholder="Enter Marks Obtained"
                margin="normal"
                name="marksobtained"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "400px" }}>Intermediate</p>
            <TextField
              type="text"
              id="school/board/university"
              label="School/Board/University"
              variant="outlined"
              placeholder="Enter School/Board/University"
              margin="normal"
              name="school/board/university"
              style={{ width: "calc(80%)" }}
            />
            {/* add more form fields */}
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="passingyear"
                label="Passing Year"
                variant="outlined"
                placeholder="Enter Passing Year"
                margin="normal"
                name="passingyear"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="rollno"
                label="Roll No"
                variant="outlined"
                placeholder="Enter Roll No"
                margin="normal"
                name="rollno"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="subjects"
                label="Subjects"
                variant="outlined"
                placeholder="Enter Subjects"
                margin="normal"
                name="subjects"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalmarks"
                label="Total Marks"
                variant="outlined"
                placeholder="Enter Total Marks"
                margin="normal"
                name="totalmarks"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="marksobtained"
                label="Marks Obtained"
                variant="outlined"
                placeholder="Enter Marks Obtained"
                margin="normal"
                name="marksobtained"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "400px" }}>Hafiz e Quran</p>
            <TextField
              type="text"
              id="school/board/university"
              label="School/Board/University"
              variant="outlined"
              placeholder="Enter School/Board/University"
              margin="normal"
              name="school/board/university"
              style={{ width: "calc(80%)" }}
            />
            {/* add more form fields */}
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="passingyear"
                label="Passing Year"
                variant="outlined"
                placeholder="Enter Passing Year"
                margin="normal"
                name="passingyear"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="rollno"
                label="Roll No"
                variant="outlined"
                placeholder="Enter Roll No"
                margin="normal"
                name="rollno"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="subjects"
                label="Subjects"
                variant="outlined"
                placeholder="Enter Subjects"
                margin="normal"
                name="subjects"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalmarks"
                label="Total Marks"
                variant="outlined"
                placeholder="Enter Total Marks"
                margin="normal"
                name="totalmarks"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="marksobtained"
                label="Marks Obtained"
                variant="outlined"
                placeholder="Enter Marks Obtained"
                margin="normal"
                name="marksobtained"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "400px" }}>Dars e Nizami</p>
            <TextField
              type="text"
              id="school/board/university"
              label="School/Board/University"
              variant="outlined"
              placeholder="Enter School/Board/University"
              margin="normal"
              name="school/board/university"
              style={{ width: "calc(80%)" }}
            />
            {/* add more form fields */}
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="passingyear"
                label="Passing Year"
                variant="outlined"
                placeholder="Enter Passing Year"
                margin="normal"
                name="passingyear"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="rollno"
                label="Roll No"
                variant="outlined"
                placeholder="Enter Roll No"
                margin="normal"
                name="rollno"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="subjects"
                label="Subjects"
                variant="outlined"
                placeholder="Enter Subjects"
                margin="normal"
                name="subjects"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalmarks"
                label="Total Marks"
                variant="outlined"
                placeholder="Enter Total Marks"
                margin="normal"
                name="totalmarks"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="marksobtained"
                label="Marks Obtained"
                variant="outlined"
                placeholder="Enter Marks Obtained"
                margin="normal"
                name="marksobtained"
              />
              {/* add more form fields */}
            </Grid>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "300px" }}>High School</p>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="paidonce"
                label="Paid Once"
                variant="outlined"
                placeholder="Enter Rs: Paid Once"
                margin="normal"
                name="paidonce"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlytuitionfee"
                label="Monthly Tuition Fee"
                variant="outlined"
                placeholder="Enter Rs: Monthly Tuition Fee"
                margin="normal"
                name="monthlytuitionfee"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlymessdues"
                label="Monthly Mess Dues"
                variant="outlined"
                placeholder="Enter RS: Monthly Mess Dues"
                margin="normal"
                name="monthlymessdues"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalannualpackage"
                label="Total Annual Package"
                variant="outlined"
                placeholder="Enter Rs: Total Annual Package"
                margin="normal"
                name="totalannualpackage"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "300px" }}>Intermediate</p>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="paidonce"
                label="Paid Once"
                variant="outlined"
                placeholder="Enter Rs: Paid Once"
                margin="normal"
                name="paidonce"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlytuitionfee"
                label="Monthly Tuition Fee"
                variant="outlined"
                placeholder="Enter Rs: Monthly Tuition Fee"
                margin="normal"
                name="monthlytuitionfee"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlymessdues"
                label="Monthly Mess Dues"
                variant="outlined"
                placeholder="Enter RS: Monthly Mess Dues"
                margin="normal"
                name="monthlymessdues"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalannualpackage"
                label="Total Annual Package"
                variant="outlined"
                placeholder="Enter Rs: Total Annual Package"
                margin="normal"
                name="totalannualpackage"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "300px" }}>BS Hons</p>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="paidonce"
                label="Paid Once"
                variant="outlined"
                placeholder="Enter Rs: Paid Once"
                margin="normal"
                name="paidonce"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlytuitionfee"
                label="Monthly Tuition Fee"
                variant="outlined"
                placeholder="Enter Rs: Monthly Tuition Fee"
                margin="normal"
                name="monthlytuitionfee"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlymessdues"
                label="Monthly Mess Dues"
                variant="outlined"
                placeholder="Enter RS: Monthly Mess Dues"
                margin="normal"
                name="monthlymessdues"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalannualpackage"
                label="Total Annual Package"
                variant="outlined"
                placeholder="Enter Rs: Total Annual Package"
                margin="normal"
                name="totalannualpackage"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "300px" }}>ADP</p>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="paidonce"
                label="Paid Once"
                variant="outlined"
                placeholder="Enter Rs: Paid Once"
                margin="normal"
                name="paidonce"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlytuitionfee"
                label="Monthly Tuition Fee"
                variant="outlined"
                placeholder="Enter Rs: Monthly Tuition Fee"
                margin="normal"
                name="monthlytuitionfee"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlymessdues"
                label="Monthly Mess Dues"
                variant="outlined"
                placeholder="Enter RS: Monthly Mess Dues"
                margin="normal"
                name="monthlymessdues"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalannualpackage"
                label="Total Annual Package"
                variant="outlined"
                placeholder="Enter Rs: Total Annual Package"
                margin="normal"
                name="totalannualpackage"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "300px" }}>Hafiz e Quran</p>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="paidonce"
                label="Paid Once"
                variant="outlined"
                placeholder="Enter Rs: Paid Once"
                margin="normal"
                name="paidonce"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlytuitionfee"
                label="Monthly Tuition Fee"
                variant="outlined"
                placeholder="Enter Rs: Monthly Tuition Fee"
                margin="normal"
                name="monthlytuitionfee"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlymessdues"
                label="Monthly Mess Dues"
                variant="outlined"
                placeholder="Enter RS: Monthly Mess Dues"
                margin="normal"
                name="monthlymessdues"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalannualpackage"
                label="Total Annual Package"
                variant="outlined"
                placeholder="Enter Rs: Total Annual Package"
                margin="normal"
                name="totalannualpackage"
              />
              {/* add more form fields */}
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Checkbox id="checkbox2" />
            <p style={{ marginLeft: "-20px", width: "300px" }}>Dars e Nizami</p>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="paidonce"
                label="Paid Once"
                variant="outlined"
                placeholder="Enter Rs: Paid Once"
                margin="normal"
                name="paidonce"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlytuitionfee"
                label="Monthly Tuition Fee"
                variant="outlined"
                placeholder="Enter Rs: Monthly Tuition Fee"
                margin="normal"
                name="monthlytuitionfee"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="monthlymessdues"
                label="Monthly Mess Dues"
                variant="outlined"
                placeholder="Enter RS: Monthly Mess Dues"
                margin="normal"
                name="monthlymessdues"
              />
              {/* add more form fields */}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                id="totalannualpackage"
                label="Total Annual Package"
                variant="outlined"
                placeholder="Enter Rs: Total Annual Package"
                margin="normal"
                name="totalannualpackage"
              />
              {/* add more form fields */}
            </Grid>
          </div>
        </>
      );
    case 6:
      return (
        <>
          <h1>Compulsory</h1>
          <h4>Please attach (3) copies of following with respective course:</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>High School - Class 6th to 10th</p>
              <p>Primary/Middle School Certificate</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>Intermediate</p>
              <p>Matric Certificate</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>BS Hons</p>
              <p>Intermediate Certificate</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>ADP</p>
              <p>Intermediate Certificate</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>Hafiz e Quran</p>
              <p>Primary School Certificate</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <p>Dars e Nizami</p>
              <p>Primary/Middle/Matric Certificate</p>
            </div>
          </div>
          <h1>Optional</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>Hafiz e Quran Certificate issued from Govt. approved Madrissa</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox id="checkbox" />
            <p>Disability Certificate from Govt. Hospital</p>
          </div>
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
