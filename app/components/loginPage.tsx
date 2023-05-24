"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";

const loginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      Login Page
      <button 
      type="button" 
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={() => signIn("github")}>
        GitHub login
      </button>
      
    </div>
  );
};

export default loginPage;
