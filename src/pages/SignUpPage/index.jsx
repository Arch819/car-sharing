import Section from "components/Section";
import TitlePage from "components/TitlePage";
import SignUpForm from "components/form/SignUpForm";
import React from "react";

function SignUpPage() {
  return (
    <Section>
      <div className="container">
        <TitlePage text="Sign Up" mb={80} />
        <SignUpForm />
      </div>
    </Section>
  );
}

export default SignUpPage;
