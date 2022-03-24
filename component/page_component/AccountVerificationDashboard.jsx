import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import OtpInput from 'react-otp-input'
import { Button } from '@mui/material'
import Link from 'next/link'
import { UnVerified, Verified } from '../SVGIcons'

const AccountVerificationDashboard = () => {
  // useState hooks
  const [otp, setOtp] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [otpEntered, setOtpEntered] = React.useState(false)
  const [phoneEntered, setPhoneEntered] = React.useState(false)

  // functions
  const setOtpValue = value => {
    setOtp(value)
  }

  const handleOtpSubmit = () => {
    setOtpEntered(true)
  }

  const handlePhoneSubmit = () => {
    setPhoneEntered(true)
  }

  return (
    <MainWrapper>
      <Aside>
        <Image src="/images/logo_purple.png" width={91.2} height={24} />

        <H2 className="font-500">Account Verification</H2>
        <P tw="text-left text-sm mt-2.5">
          To complete the stage of your sign up, you eed to verify
        </P>

        <div tw="mt-8 space-y-8">
          <p tw="pr-3 text-[13px]">
            <i tw="mr-4">{otpEntered ? <Verified /> : <UnVerified />}</i>
            Email address
          </p>
          <p tw="pr-3 text-[13px]">
            <i tw="mr-4">{phoneEntered ? <Verified /> : <UnVerified />}</i>
            Phone number
          </p>
        </div>
      </Aside>

      <Main>
        <div>
          {!otpEntered && !phoneEntered && (
            <>
              <H1>Verify your email address</H1>
              <P>Enter the verification code that was sent to your email</P>

              {/* Verification code textfield */}
              <InputWrapper>
                <OtpInput
                  inputStyle={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    color: '#3E3E3E',
                    padding: '0px 10px',
                  }}
                  numInputs={6}
                  placeholder="――――――"
                  value={otp}
                  onChange={setOtpValue}
                />
              </InputWrapper>

              <MUIButton onClick={handleOtpSubmit}>Verify email</MUIButton>
            </>
          )}

          {otpEntered && !phoneEntered && (
            <>
              <H1>Verify your phone number</H1>
              <P>
                Enter the verification code that was sent to your phone number
              </P>

              {/* Verification code textfield */}
              <InputWrapper>
                <OtpInput
                  inputStyle={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    color: '#3E3E3E',
                    padding: '0px 10px',
                  }}
                  numInputs={6}
                  placeholder="――――――"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </InputWrapper>

              <MUIButton onClick={handlePhoneSubmit}>
                Verify phone number
              </MUIButton>
            </>
          )}

          {otpEntered && phoneEntered && (
            <>
              <H1>Verification successful</H1>
              <P>
                Your account has been created, you can now use Paysure services
              </P>

              <MUIButton>
                <Link href="/login">
                  <a tw="w-full py-1">Login to dashboard</a>
                </Link>
              </MUIButton>
            </>
          )}
        </div>
      </Main>
    </MainWrapper>
  )
}

// Tailwind styles
const H1 = tw.h3`text-2xl text-black tracking-[-0.025em] leading-[29px] text-center`
const H2 = tw.h4`text-[18px] text-black tracking-[-0.025em] leading-[29px] lg:(mt-20)`
const MainWrapper = tw.div`h-screen lg:flex`
const P = tw.p`text-[13px] tracking-[-0.025em] text-gray-800 text-center max-w-[308px]`
const Aside = tw.div`w-1/4 h-screen bg-[#FAFAFA] hidden lg:(block min-w-[415px] w-[415px] py-5 px-10)`
const Main = tw.main`flex items-center justify-center h-[calc(100vh - 83px)] py-10 w-full lg:(w-3/4 h-screen items-start py-36)`
const InputWrapper = tw.div`max-w-[308px] border mt-10 border-[#E3E5E8] rounded px-[54px]`
const MUIButton = tw(
  Button,
)`w-[308px] bg-paysure-primary-100 text-white normal-case transition-all py-3 mt-10 rounded text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default AccountVerificationDashboard
