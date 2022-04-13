import React from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import Link from 'next/link'
import Router from 'next/router'
import { setCookie } from 'nookies'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
} from '@mui/material'

import { LoginLayout } from '..'
import { login } from '../../features/userSlice'
import { Checked, PhoneLogin, UnChecked, Visibility } from '../SVGIcons'

const loginDashboard = () => {
  // useState hook
  const [email, setEmail] = React.useState('')
  const [password, setPassoword] = React.useState('')
  const [showPassword, setShowPassoword] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const dispatch = useDispatch()

  // functions
  const handleChange = React.useCallback(e => {
    setPassoword(e.target.value)
  })

  const handleClickShowPassword = () => {
    setShowPassoword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleLogin = React.useCallback(() => {
    setLoading(true)

    axios
      .post('/api/auth/login', {
        email,
        password,
      })
      .then(res => {
        console.log(res)

        if (!res.data.data) {
          toast.error('Please refresh the page and try again.')
          setLoading(false)
          return
        }

        // checks if the user is an agent
        if (res.data.data.userRole !== 7) {
          toast.error('You are not an agent')
          setLoading(false)
          return
        }

        // dispatches the user details to the redux store
        dispatch(login(res.data.data))

        // save user data to localStorage
        localStorage.setItem('user', JSON.stringify(res.data.data))

        toast.success('Login Successful')

        Router.push('/')

        // save user jwt to cookie
        setCookie(null, 'USER_AUTHORIZATION', res.data.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })

        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        if (err.response.data.status === 500) {
          toast.error(
            'Internals server error, please refresh the page and try again.',
          )
        }

        if (err.response) {
          toast.error(err.response.data.data)
        }
      })
  })

  return (
    <LoginLayout>
      <Wrapper>
        <H1 className="font-500">Login to your dashboard</H1>

        <Form>
          {/* Email */}
          <Label>
            Email
            <div>
              <Input
                variant="outlined"
                fullWidth
                placeholder="example@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <PhoneLogin />
                  </InputAdornment>
                }
              />
            </div>
          </Label>

          {/* Password */}
          <div>
            <Label>
              Password
              <div>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  placeholder="********"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {/* TODO: find an svg icon for visibilityoff */}
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
            </Label>
          </div>

          {/* /remember me and forgotten passoword */}
          <div tw="flex items-center justify-between">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  icon={<UnChecked />}
                  checkedIcon={<Checked />}
                />
              }
              label={<p tw="text-[13px]">Remember me</p>}
            />

            <Link href="/forgotPassword">
              <a tw="text-[13px] underline text-paysure-primary-100 cursor-pointer">
                Forgotten password
              </a>
            </Link>
          </div>

          {/* login button */}
          <MUIButton loading={loading} onClick={handleLogin}>
            Login to your account
          </MUIButton>

          <div tw="text-center w-full mt-6 text-[13px] hover:(underline text-paysure-primary-100)">
            <Link href="/signup">
              <a>Create a new account</a>
            </Link>
          </div>
        </Form>
      </Wrapper>
    </LoginLayout>
  )
}

// Tailwind Styles
const H1 = tw.h3`text-2xl text-black tracking-[-0.025em] leading-[29px]`
const Wrapper = tw.div``
const Form = tw.form`mt-10 space-y-5`
const Label = tw.label`text-text-soft text-[13px]`
const Input = tw(OutlinedInput)`w-[308px] mt-2`
const MUIButton = tw(
  LoadingButton,
)`w-[308px] bg-paysure-primary-100 text-white normal-case py-3 transition-all rounded text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default loginDashboard
