"use client";

import React from "react";
import GithubButton from 'react-github-login-button'
import { signIn, useSession } from "next-auth/react";

const loginPage = () => {
  return (
    <div>
      Login Page.
      <GithubButton onClick={() => signIn("github")} />
    </div>
  );
};

export default loginPage;
