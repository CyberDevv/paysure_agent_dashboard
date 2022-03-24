import React from 'react'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import { InputAdornment, MenuItem, TextField } from '@mui/material'

const FilterBox = ({ dropdownData = [], label }) => {
  // UseState hook
  const [selectedDrop, setSelectedDrop] = React.useState(dropdownData[0].value)

  // functions
  const handleDropdownSelected = React.useCallback(event => {
    setSelectedDrop(event.target.value)
  })

  return (
    <TextField
      select
      value={selectedDrop}
      defaultValue={dropdownData[0].value}
      onChange={handleDropdownSelected}
      size="small"
      fullWidth
      sx={{
        fontSize: '13px',
        minWidth: '200px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#EBF2FA',
          },
          '&:hover fieldset': {
            borderColor: '#c6c7c9',
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Span>{label || 'Showing'}:</Span>
          </InputAdornment>
        ),
      }}
    >
      {dropdownData.map(option => (
        <MenuItem
          sx={{ fontSize: '13px' }}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

// Proptype
FilterBox.prototype = {
  dropdownData: PropTypes.array,
}

// Tailwind Styles
const Span = tw.span`text-[13px] text-[#10101266]`

export default FilterBox
