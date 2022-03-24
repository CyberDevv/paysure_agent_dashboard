import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Button } from '@mui/material'

import { SignUpLayout, TextField } from '..'

const SignUp = () => {
  // useState hook
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  // functions

  return (
    <SignUpLayout>
      <div>
        <H1 className="font-500">Set up password</H1>

        <Form>
          {/* Fields */}
          <div tw="space-y-5 mt-8">
            <TextField
              label="Password"
              placeholder="********"
              value={password}
              setValue={setPassword}
              type="password"
            />

            <TextField
              label="Confirm password"
              placeholder="********"
              value={confirmPassword}
              setValue={setConfirmPassword}
              type="password"
            />
          </div>

          <MUIButton>
            <Link href="/accountVerification">
              <a tw="w-full py-3">Confirm Password</a>
            </Link>
          </MUIButton>
        </Form>
      </div>
    </SignUpLayout>
  )
}

// Tailwind Styles
const H1 = tw.h3`text-2xl text-black tracking-[-0.025em] leading-[29px]`
const Form = tw.form`mt-10 space-y-5 max-w-[308px]`
const MUIButton = tw(
  Button,
)`w-[308px] bg-paysure-primary-100 text-white normal-case transition-all rounded text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default SignUp
