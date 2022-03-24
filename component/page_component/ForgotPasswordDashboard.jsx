import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import { InputAdornment, OutlinedInput, Button } from '@mui/material'

import { LoginLayout } from '..'
import { EmailLogin, LockLogin } from '../SVGIcons'

const ForgotPassword = () => {
  // useState hook
  const [email, setEmail] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')
  const [emailEntered, setEmailEntered] = React.useState(false)
  const [createPassword, setCreatePassword] = React.useState(false)

  // functions
  const handleChange = React.useCallback(e => {
    setEmail(e.target.value)
  })

  const handleSendRecoveryLink = React.useCallback(() => {
    setEmailEntered(true)
  })

  const handleCreateNewPassword = React.useCallback(() => {
    setEmailEntered(true)
    setCreatePassword(true)
    console.log('viefef')
  })

  return (
    <LoginLayout>
      <Wrapper>
        {/* Email Recovery */}
        {!emailEntered && !createPassword && (
          <>
            <H1 className="font-500">Recover you account</H1>

            <Form>
              {/* Email */}
              <Label>
                Email address
                <div>
                  <Input
                    value={email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    size="small"
                    placeholder="Enter your email address"
                    endAdornment={
                      <InputAdornment position="end">
                        <EmailLogin />
                      </InputAdornment>
                    }
                  />
                </div>
              </Label>

              {/* login button */}
              <MUIButton onClick={handleSendRecoveryLink}>
                Send recovery link
              </MUIButton>
            </Form>
          </>
        )}

        {/* create password */}
        {emailEntered && !createPassword && (
          <>
            <H1 className="font-500">Create new Password</H1>

            <Form>
              {/* new Password */}
              <Label>
                Enter new password
                <div>
                  <Input
                    value={newPassword}
                    type="password"
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    size="small"
                    placeholder="********"
                    endAdornment={
                      <InputAdornment position="end">
                        <LockLogin />
                      </InputAdornment>
                    }
                  />
                </div>
              </Label>

              {/*confirm new Password */}
              <div>
                <Label>
                  Confirm new password
                  <div>
                    <Input
                      value={newPassword}
                      type="password"
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      size="small"
                      placeholder="********"
                      endAdornment={
                        <InputAdornment position="end">
                          <LockLogin />
                        </InputAdornment>
                      }
                    />
                  </div>
                </Label>
              </div>

              {/* login button */}
              <MUIButton onClick={handleCreateNewPassword}>
                Create new password
              </MUIButton>
            </Form>
          </>
        )}

        {/* Verified */}
        {emailEntered && createPassword && (
          <>
            <H1 tw="text-center" className="font-500">
              Hello <br /> {email}
            </H1>

            <p tw="text-[13px] mt-3 text-center">
              Your account has been successfully reset
            </p>

            {/* login button */}
            <MUIButton>
              <Link href="/login">
                <a>Login to your account</a>
              </Link>
            </MUIButton>
          </>
        )}
      </Wrapper>
    </LoginLayout>
  )
}

// Tailwind Styles
const H1 = tw.h1`text-2xl text-black tracking-[-0.025em] leading-[29px]`
const Wrapper = tw.div``
const Form = tw.form`mt-10 space-y-5`
const Label = tw.label`text-text-soft text-[13px]`
const Input = tw(OutlinedInput)`w-[308px] mt-2`
const MUIButton = tw(
  Button,
)`w-[308px] bg-paysure-primary-100 text-white normal-case py-3 transition-all rounded mt-10 text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default ForgotPassword
