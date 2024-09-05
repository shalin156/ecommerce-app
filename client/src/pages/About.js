import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Quick Cart, your number one source for all things fashion, electronics, home essentials, and more. We're dedicated to giving you the very best of online shopping, with a focus on quality, customer service, and uniqueness.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
