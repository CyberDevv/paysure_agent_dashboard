import React from 'react'
import tw from 'twin.macro'
import AdapterDateFns from '@mui/lab/AdapterMoment'
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
}) => {
  // function
  const handleChange = React.useCallback(event => {
    setValue(event.target.value)
  })

  return (
    <div>
      <Label>
        {label}
        {!select && !isDatePIcker && (
          <Input
            size="small"
            fullWidth
            value={value}
            placeholder={placeholder}
            type={type ? type : 'text'}
            onChange={handleChange}
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
const Input = tw(TextField)`mt-2 text-[13px]`
const Label = tw.label`text-text-soft text-[13px]`

export default TextFieldPage
