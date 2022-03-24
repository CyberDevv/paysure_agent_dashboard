import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Checkbox, FormControlLabel, Button } from '@mui/material'

import { SignUpLayout, TextField } from '..'

const SignUp = () => {
  // useState hook
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [BVN, setBVN] = React.useState('')
  const [businessName, setBusinessName] = React.useState('')
  const [businessAddress, setBusinessAddress] = React.useState('')

  // functions

  return (
    <SignUpLayout>
      <div>
        <H1 className="font-500">Sign up as an agent</H1>

        <Form>
          {/* sign up option */}
          <div>
            <label tw="pr-3">Sign up as:</label>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<p tw="text-sm text-[#4E5D78]">Super Agent</p>}
            />
            <FormControlLabel
              control={<Checkbox size="small" checked={true} />}
              label={<p tw="text-sm text-[#4E5D78]">Agent</p>}
            />
          </div>

          {/* Fields */}
          <div tw="space-y-5 mt-8">
            <TextField
              label="First name"
              placeholder="John"
              value={firstName}
              setValue={setFirstName}
            />

            <TextField
              label="Last name"
              placeholder="Snow"
              value={lastName}
              setValue={setLastName}
            />

            <TextField
              label="Phone number"
              placeholder="09012345678"
              value={phoneNumber}
              setValue={setPhoneNumber}
            />

            <TextField
              label="Email"
              placeholder="john.snow@company.com"
              value={email}
              type="email"
              setValue={setEmail}
            />

            <TextField
              label="BVN"
              placeholder="12345678901"
              value={BVN}
              setValue={setBVN}
            />

            <TextField
              label="Business name"
              placeholder="Business name"
              value={businessName}
              setValue={setBusinessName}
            />

            <TextField
              label="Business address"
              placeholder="Business address"
              value={businessAddress}
              setValue={setBusinessAddress}
            />
          </div>

          <MUIButton>
            <Link href="/setUpPassword">
              <a tw="w-full py-3">Sign up</a>
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
