import tw from 'twin.macro'
import React, { useState } from 'react'
import DateAdapter from '@mui/lab/AdapterMoment'
import { Box, InputAdornment, TextField } from '@mui/material'
import { DateRangePicker, LocalizationProvider } from '@mui/lab'

import { Calendar } from '../SVGIcons'

const DatRangePickerAndOthers = () => {
  // UseState hook
  const [value, setValue] = useState([null, null])

  // components
  const handleRenderInput = React.useCallback((startProps, endProps) => (
    <>
      <TextField
        {...startProps}
        variant="standard"
        fullWidth
        sx={{
          '& .MuiInput-root': {
            fontSize: '13px',
          },
          '& .css-1480iag-MuiInputBase-root-MuiInput-root:before ': {
            content: 'none',
          },
          '& .css-1480iag-MuiInputBase-root-MuiInput-root:after': {
            conntent: 'none',
            border: 'none',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Span>From:</Span>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Calendar />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ mx: '8px', color: '#979797' }}> | </Box>
      <TextField
        variant="standard"
        fullWidth
        sx={{
          '& .MuiInput-root': {
            fontSize: '13px',
          },
          '& .css-1480iag-MuiInputBase-root-MuiInput-root:before ': {
            content: 'none',
          },
          '& .css-1480iag-MuiInputBase-root-MuiInput-root:after': {
            conntent: 'none',
            border: 'none',
          },
        }}
        {...endProps}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Span>To:</Span>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Calendar />
            </InputAdornment>
          ),
        }}
      />
    </>
  ))

  // functions
  const handleSetValue = React.useCallback(newValue => {
    setValue(newValue)
  })

  return (
    <div
      css={[
        tw`border border-[#EBF2FA] w-full hover:(border-[#c6c7c9]) lg:(min-w-[289px]) 2xl:() px-4 py-1.5 rounded`,
      ]}
    >
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateRangePicker
          startText=""
          inputFormat="DD MMMM"
          endText=""
          value={value}
          onChange={handleSetValue}
          renderInput={handleRenderInput}
        />
      </LocalizationProvider>
    </div>
  )
}

// Tailwind Styles
const Span = tw.span`text-[13px] text-[#10101266]`

export default DatRangePickerAndOthers
