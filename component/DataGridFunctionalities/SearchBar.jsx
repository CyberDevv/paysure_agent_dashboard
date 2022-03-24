import tw from 'twin.macro'
import React from 'react'
import { Button, InputAdornment, TextField } from '@mui/material'

import { Search } from '../SVGIcons'

const SearchBar = () => {
  return (
    <TextField
      id="outlined-start-adornment"
      size="small"
      fullWidth
      sx={{
        fontSize: '13px',
        minWidth: {
          xs: '200px',
          lg: '256px',
        },
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
            <Span>Search</Span>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button sx={{ minWidth: 0 }}>
              <Search />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  )
}

// Tailwind Styles
const Span = tw.span`text-[13px] text-[#10101266]`

export default SearchBar
