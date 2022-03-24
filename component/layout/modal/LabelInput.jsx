import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import tw from 'twin.macro'

const LabelInput_main_layout = ({
  label,
  placeholder,
  value,
  type,
  combo,
  menuItems,
  setState,
}) => {
  // functions
  const handleChange = React.useCallback(event => {
    setState(event.target.value)
  })

  return (
    <div>
      {!combo && (
        <Label>
          {label}
          <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </Label>
      )}

      {combo && (
        <Label>
          {label}
          <FormControl fullWidth>
            <Select
              value={value}
              onChange={handleChange}
              sx={{
                '&  .MuiOutlinedInput-input': {
                  padding: '10px',
                  fontSize: '13px',
                  color: '#454D54',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E3E5E8',
                },
              }}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} value={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Label>
      )}
    </div>
  )
}

// Tailwind styles
const Label = tw.label`text-[13px] text-[#454D54]`
const Input = tw.input`text-[13px] border border-[#E3E5E8] text-[#454D54] p-2.5 rounded w-full mt-1.5 focus:(outline-none ring-1 ring-border)`

export default LabelInput_main_layout
