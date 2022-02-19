import React from "react";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card className="about">
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>Version: 0.1.0</p>

      <p>
        <a href="/">Back To Home</a>
      </p>
    </Card>
  );
};

export default AboutPage;
