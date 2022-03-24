import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material'

import { LoginLayout } from '..'
import { Checked, PhoneLogin, UnChecked, Visibility } from '../SVGIcons'

const login = () => {
  // useState hook
  const [password, setPassoword] = React.useState('')
  const [showPassword, setShowPassoword] = React.useState(false)

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
              control={<Checkbox size="small" icon={<UnChecked />} checkedIcon= {<Checked />} />}
              label={<p tw="text-[13px]">Remember me</p>}
            />

            <Link href="/forgotPassword">
              <a tw="text-[13px] underline text-paysure-primary-100 cursor-pointer">
                Forgotten password
              </a>
            </Link>
          </div>

          {/* login button */}
          <MUIButton>Login to your account</MUIButton>
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
  Button,
)`w-[308px] bg-paysure-primary-100 text-white normal-case py-3 transition-all rounded text-sm hover:(bg-paysure-primary-100 brightness-90)`

export default login
