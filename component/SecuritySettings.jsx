import React from 'react'
import tw from 'twin.macro'
import { Button } from '@mui/material'

import { TextField } from '.'

const SecuritySettings = () => {
  // useState hook
  const [pldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')

  return (
    <div tw="w-full md:(max-w-sm)">
      <H1 className="font-500">Change Password</H1>

      <Form>
        {/* Fields */}
        <div tw="space-y-5 mt-8">
          <TextField
            label="Old Password"
            placeholder="********"
            value={pldPassword}
            setValue={setOldPassword}
            type="password"
          />

          <TextField
            label="Old Password"
            placeholder="********"
            value={newPassword}
            setValue={setNewPassword}
            type="password"
          />

          <TextField
            label="Old Password"
            placeholder="********"
            value={confirmNewPassword}
            setValue={setConfirmNewPassword}
            type="password"
          />
        </div>

        <div>
          <MUIButton>Change password</MUIButton>
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
)`w-full bg-paysure-primary-100 py-4 text-white normal-case transition-all rounded-xl text-sm hover:(bg-paysure-primary-100 brightness-90) mt-10`

export default SecuritySettings
