import React from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import Router from 'next/router'
import { toast } from 'react-toastify'
import LoadingButton from '@mui/lab/LoadingButton'
import { FormControlLabel, RadioGroup, Radio } from '@mui/material'

import { SignUpLayout, TextField } from '..'
import { RadioChecked, RadioUnChecked } from '../SVGIcons'

const SignUp = () => {
  // useState hook
  const [firstName, setFirstName] = React.useState('Ibrahim')
  const [lastName, setLastName] = React.useState('Odesola')
  const [email, setEmail] = React.useState('wakajeje@gmail.com')
  const [phoneNumber, setPhoneNumber] = React.useState('+2348012341112')
  const [BVN, setBVN] = React.useState('12345678901')
  const [businessName, setBusinessName] = React.useState('Hola')
  const [businessAddress, setBusinessAddress] = React.useState('Hola address')
  const [userRole, setUserRole] = React.useState('08')
  const [setupPassword, setSetUpPassword] = React.useState(false)
  const [password, setPassword] = React.useState('#As12345678')
  const [confirmPassword, setConfirmPassword] = React.useState('#As12345678')
  const [loading, setLoading] = React.useState(false)

  // functions
  const handleUserRoleChange = event => {
    setUserRole(event.target.value)
  }

  const handleSignup = () => {
    setLoading(true)

    axios
      .post('/api/auth/signup', {
        firstName,
        lastName,
        phoneNumber,
        email,
        BVN,
        businessName,
        businessAddress,
        userRole,
        password,
        confirmPassword,
      })
      .then(res => {
        setLoading(false)
        console.log('Success >>>>> ' + res)
        // toast.error(res)
        Router.push('/accountVerification')
      })
      .catch(err => {
        setLoading(false)
        if (err.response) {
          toast.error(err.response.data.data)
        }
      })
  }

  const handleSetUpPassword = () => {
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !BVN ||
    !businessName ||
    !businessAddress ||
    !userRole
      ? toast.error('Please fill in all fields')
      : (setSetUpPassword(true), localStorage.setItem('email', email))
  }

  return (
    <SignUpLayout>
      <div tw=" pb-8 lg:pb-16">
        {/* sign up option */}
        {!setupPassword && (
          <>
            <H1 className="font-500">Sign up as an agent</H1>

            <Form>
              <div tw="flex items-center space-x-3">
                <label>Sign up as:</label>
                <RadioGroup
                  row
                  value={userRole}
                  onChange={handleUserRoleChange}
                >
                  <FormControlLabel
                    value="11"
                    control={
                      <Radio
                        icon={<RadioUnChecked />}
                        checkedIcon={<RadioChecked />}
                      />
                    }
                    label={<p tw="text-sm text-[#4E5D78]">Super Agent</p>}
                  />
                  <FormControlLabel
                    value="08"
                    control={
                      <Radio
                        icon={<RadioUnChecked />}
                        checkedIcon={<RadioChecked />}
                      />
                    }
                    label={<p tw="text-sm text-[#4E5D78]">Agent</p>}
                  />
                </RadioGroup>
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
                  isPhone
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
                  isDigit
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

              <MUIButton onClick={handleSetUpPassword}>Sign up</MUIButton>
            </Form>
          </>
        )}

        {/* set up password */}
        {setupPassword && (
          <>
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

              <MUIButton loading={loading} onClick={handleSignup}>
                Confirm Password
              </MUIButton>

              <div tw="flex items-center justify-center">
                <button
                  tw="normal-case text-sm hover:(underline)"
                  onClick={() => setSetUpPassword(false)}
                >
                  Back
                </button>
              </div>
            </Form>
          </>
        )}
      </div>
    </SignUpLayout>
  )
}

// Tailwind Styles
const H1 = tw.h3`text-xl text-black tracking-[-0.025em] leading-[29px] lg:(text-2xl)`
const Form = tw.form`mt-4 space-y-5 max-w-xs lg:mt-8`
const MUIButton = tw(
  LoadingButton,
)`w-full bg-paysure-primary-100 py-4 text-white normal-case transition-all rounded text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default SignUp
