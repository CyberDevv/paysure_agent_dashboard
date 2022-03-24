import {
  Avatar,
  Button,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import tw from 'twin.macro'

import { Layout } from '..'
import { Search } from '../SVGIcons'

const SupportDashboard = () => {
  return (
    <Layout title="Support">
      <MainWraper>
        {/* Support list */}
        <SupportList>
          <HeaderText className="font-bold">Support</HeaderText>

          {/* Search */}
          <TextField
            fullWidth
            id="outlined-start-adornment"
            sx={{
              fontSize: '13px',
              minWidth: '256px',
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

          {/* list */}
          <List>
            {supportList.map(({ name, message, time }, index) => (
              <ListItem
                role="button"
                alignItems="flex-start"
                sx={tw`md:space-x-3 hover:bg-border2 transition-colors`}
                key={index}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={tw` md:h-[50px] md:w-[50px]`}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className="font-500" sx={tw`text-base`}>
                      {name}
                    </Typography>
                  }
                  secondary={
                    <div tw="truncate">
                      <Typography
                        sx={tw`text-sm text-paysure-50 mt-1`}
                        component="span"
                      >
                        {message}
                      </Typography>

                      <Typography
                        sx={tw`text-xs text-[#636B91] mt-2.5 block`}
                        component="span"
                      >
                        {time}
                      </Typography>
                    </div>
                  }
                />
              </ListItem>
            ))}
          </List>
        </SupportList>

        {/* Chadt */}
        <ChatWrapper>
          {/* Textbox */}
          <InputWrapper>
            <Input type="text" placeholder="Start Chart"></Input>
            <Button tw="bg-paysure-primary-100 normal-case text-white rounded-lg p-2.5 hover:(bg-paysure-primary-100)">
              Send
            </Button>
          </InputWrapper>
        </ChatWrapper>
      </MainWraper>
    </Layout>
  )
}

const supportList = [
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message:
      'Hello, Mr. Fred, how are you doing today? Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
  {
    name: 'Usher Wilstone',
    message: 'Hello, Mr. Fred, how are you doing today?',
    time: 'Today - 11:00 AM',
  },
]

// Tailwind Styles
const MainWraper = tw.div`flex min-h-[calc(100vh - 100px )] space-x-4 lg:min-h-[calc(100vh - 136px )]`
const SupportList = tw.div`w-full xl:(min-w-[400px] w-[400px] overflow-y-auto max-h-[calc(100vh - 136px )])`
const ChatWrapper = tw.div`hidden relative xl:(block w-full border-l border-border max-h-[calc(100vh - 136px )] overflow-y-auto)`
const HeaderText = tw.h1`text-2xl lg:text-[32px] mb-5`
const Span = tw.span`text-[13px] text-[#10101266]`
const List = tw.div`mt-6`
const InputWrapper = tw.div`flex items-center justify-between bg-[#EBF2FA] w-full bottom-0 absolute text-sm p-3`
const Input = tw.input`h-full bg-transparent w-full focus:outline-none placeholder-paysure-50 text-paysure-text-100`

export default SupportDashboard
