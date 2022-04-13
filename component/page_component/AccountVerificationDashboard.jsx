import React from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import OtpInput from 'react-otp-input'
import { toast } from 'react-toastify'
import LoadingButton from '@mui/lab/LoadingButton'

import { UnVerified, Verified } from '../SVGIcons'

const AccountVerificationDashboard = () => {
  // useState hooks
  const [email, setEmail] = React.useState('')
  const [otp, setOtp] = React.useState('')
  const [otpMobile, setOtpMobile] = React.useState('')
  const [otpEntered, setOtpEntered] = React.useState(false)
  const [phoneEntered, setPhoneEntered] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  // useEffect hook
  React.useEffect(() => {
    // get email from local storage
    const email = localStorage.getItem('email')
    if (email) {
      setEmail(email)
    } else {
      Router.push('/signup')
    }
  }, [])

  // functions
  const setOtpValue = value => {
    setOtp(value)
  }

  const setOtpValueMobile = value => {
    setOtpMobile(value)
  }

  const handleOtpSubmit = () => {
    setLoading(true)

    axios
      .post('/api/auth/veryEmail', {
        email,
        otp,
      })
      .then(res => {
        console.log(res)
        setLoading(false)
        setOtpEntered(true)
      })
      .catch(err => {
        setLoading(false)
        if (err.response) {
          toast.error(err.response.data.data)
        }
      })
  }

  const handlePhoneSubmit = () => {
    setLoading(true)

    axios
      .post('/api/auth/verifyPhoneNumber', {
        email,
        otp,
      })
      .then(res => {
        console.log(res)
        setLoading(false)
        setPhoneEntered(true)
      })
      .catch(err => {
        setLoading(false)
        if (err.response) {
          toast.error(err.response.data.data)
        }
      })
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
                  numInputs={4}
                  placeholder="――――"
                  value={otp}
                  onChange={setOtpValue}
                />
              </InputWrapper>

              <MUIButton loading={loading} onClick={handleOtpSubmit}>
                Verify email
              </MUIButton>
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
                  numInputs={4}
                  placeholder="――――"
                  value={otpMobile}
                  onChange={setOtpValueMobile}
                />
              </InputWrapper>

              <MUIButton loading={loading} onClick={handlePhoneSubmit}>
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

              <Link href="/login">
                <a tw="w-full py-1">
                  <MUIButton
                    onClick={() => {
                      localStorage.removeItem('email')
                    }}
                  >
                    Login to dashboard
                  </MUIButton>
                </a>
              </Link>
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
  LoadingButton,
)`w-[308px] bg-paysure-primary-100 text-white normal-case transition-all py-3 mt-10 rounded text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default AccountVerificationDashboard
