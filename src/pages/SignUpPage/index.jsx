import Section from "components/Section";
import SignUpForm from "components/form/SignUpForm";
import React from "react";

function SignUpPage() {
  return (
    <Section>
      <div className="container">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </Section>
  );
}

export default SignUpPage;
