import Section from "components/Section";
import SignInForm from "components/form/SignInForm";
import React from "react";

function SignInPage() {
  return (
    <Section>
      <div className="container">
        <h2>Sign In</h2>
        <SignInForm />
      </div>
    </Section>
  );
}

export default SignInPage;
