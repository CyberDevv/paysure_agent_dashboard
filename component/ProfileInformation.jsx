import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { Button } from '@mui/material'

import { TextField } from '.'

const ProfileInformation = () => {
  // useState hook
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [BVN, setBVN] = React.useState('')
  const [businessName, setBusinessName] = React.useState('')
  const [DOB, setDOB] = React.useState('')
  const [gender, setGender] = React.useState('')

  return (
    <div>
      <H1 className="font-500">Profile Information</H1>

      <Form>
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
            label="Business name"
            placeholder="Business name"
            value={businessName}
            setValue={setBusinessName}
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
            label="Date of Birth"
            value={DOB}
            setValue={setDOB}
            isDatePIcker
          />

          <TextField
            select={['Male', 'Female']}
            label="Gender"
            value={gender}
            setValue={setGender}
          />
        </div>

        <div>
          <MUIButton>
            Save Changes
          </MUIButton>
        </div>
      </Form>
    </div>
  )
}

// Tailwind Styles
const H1 = tw.h3`text-black tracking-[-0.025em] leading-[29px]`
const Form = tw.form`mt-5 space-y-5 lg:(max-w-[308px] mt-10)`
const MUIButton = tw(
  Button,
)`w-full bg-paysure-primary-100 text-white normal-case py-4 transition-all rounded-xl text-sm hover:(bg-paysure-primary-100 brightness-90) mt-10`

export default ProfileInformation
