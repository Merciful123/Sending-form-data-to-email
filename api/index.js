const nodeMail = require("nodemailer");

require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));



async function mainMail(field1, field2, field3, field4) {
  const transporter = await nodeMail.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.email,
      pass: process.env.passwd,
    },
  });

  const mailOption = {
    from: process.env.email,
    to: process.env.email,
    // subject: subject,
    html: ` 
    Name:${field1} 
    Phone Number:${field2}
    Printer Model Number:${field3} 
    Printer Problem:${field4}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message sent successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

const port = 5000;
app.use("/", async (req, res, next) => {
  const { field1, field2, field3, field4 } = req.body;
  console.log(req.body);

  try {
    await mainMail(field1, field2, field3, field4);
  } catch (error) {
    console.error(error);
    res.send("Message couldn't be sent");
  }
  res.send("Message successfully sent!");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
