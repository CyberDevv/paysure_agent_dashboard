import React from 'react'
import tw from 'twin.macro'
import AdapterDateFns from '@mui/lab/AdapterMoment'
import MuiPhoneNumber from 'material-ui-phone-number'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'

const TextFieldPage = ({
  label,
  value,
  placeholder,
  setValue,
  type,
  select,
  isDatePIcker,
  isPhone,
  isDigit,
}) => {
  // function
  const handleChange = React.useCallback(event => {
    setValue(event.target.value)
  })

  const handlePhoneChange = React.useCallback(phoneNumber => {
    setValue(phoneNumber)
  })

  const handleDigitOnly = React.useCallback(e => {
    const re = /^[0-9\b]+$/

    // if value is not blank, then test the regex

    if (e.target.value === '' || re.test(e.target.value)) {
      setValue(e.target.value)
    }
  })

  return (
    <div>
      <Label>
        <Span>{label}</Span>
        {!select && !isDatePIcker && !isPhone && (
          <Input
            size="small"
            fullWidth
            value={value}
            placeholder={placeholder}
            type={type ? type : 'text'}
            onChange={isDigit ? handleDigitOnly : handleChange}
          />
        )}

        {isPhone && (
          <MuiPhoneNumber
            defaultCountry={'ng'}
            disableAreaCodes
            fullWidth
            variant="outlined"
            value={value}
            placeholder={placeholder}
            onChange={handlePhoneChange}
            size="small"
          />
        )}

        {select && (
          <FormControl fullWidth>
            <Select size="small" value={value} onChange={handleChange}>
              {select.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {isDatePIcker && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value}
              onChange={newValue => {
                setValue(newValue)
              }}
              renderInput={params => {
                return (
                  <Input size="small" fullWidth {...params} error={false} />
                )
              }}
            />
          </LocalizationProvider>
        )}
      </Label>
    </div>
  )
}

// Tailwind Styles
const Input = tw(TextField)`text-[13px]`
const Label = tw.label`text-text-soft text-[13px]`
const Span = tw.span`mb-2.5 block`

export default TextFieldPage
