'use client'

import React from 'react'
import GoogleButton from 'react-google-button'
import {signIn} from 'next-auth/react'

const loginPage = () => {
  return (
    <div>
        Login Page.
        <GoogleButton onClick={ () => signIn('google')}/>
    </div>
  )
}

export default loginPage