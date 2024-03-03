import Section from "components/Section";
import SignInForm from "components/form/SignInForm";
import React from "react";
import TitlePage from "components/TitlePage";

function SignInPage() {
  return (
    <Section>
      <div className="container">
        <TitlePage text="Sign In" mb={80} />
        <SignInForm />
      </div>
    </Section>
  );
}

export default SignInPage;
