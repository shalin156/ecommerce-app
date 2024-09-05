import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <ul>
         <li><p>We may collect your name, email, address, payment details, etc.</p></li> 
         <li><p>we use information to process orders and manage your account.</p></li> 
         <li><p>To improve our website and services.</p></li> 
          <li><p>We implement security measures to protect your data from unauthorized access or disclosure.</p></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
