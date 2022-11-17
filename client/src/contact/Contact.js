import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <form action="http://localhost:5000/" method="post">
        <ul className="form-style-1">
          <li>
            <label>
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="field1"
              className="field-long"
              placeholder="Name"
            />
          </li>
          <li>
            <label>
              Phone Nmber <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="field2"
              className="field-long"
              placeholder="Phone Number"
            />
          </li>
          <li>
            <label>
              Printer Model Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="field3"
              className="field-long"
              placeholder="Printer Model Number"
            />
          </li>

          <li>
            <label>
              Printer Problem <span className="required">*</span>
            </label>
            <textarea
              name="field4"
              id="field5"
              className="field-long field-textarea"
              placeholder="Printer Problem"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Contact;
