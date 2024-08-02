import React from 'react'
import {SignIn, SignUp} from "@clerk/nextjs";

const SignUpPage: React.FC = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <SignUp />
        </div>
    )
}

export default SignUpPage