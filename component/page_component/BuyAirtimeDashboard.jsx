import React from 'react'
import tw from 'twin.macro'
import OtpInput from 'react-otp-input'
import { styled } from '@mui/material/styles'
import CurrencyFormat from 'react-currency-format'
import { Button, Divider, FormControlLabel, Switch } from '@mui/material'

import { TransactionSuccessSVG } from '../SVGIcons'
import { Layout, PurchaseLayout, ReceiptLabel, TextField } from '..'

const IOSSwitch = styled(props => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#6500E0',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#6500E0',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E4EBF6',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))

const BuyAirtimeDashboard = () => {
  // UseState Hooks
  const [activeTab, setActiveTab] = React.useState('info')
  const [amount, setAmount] = React.useState('')
  const [network, setNetwork] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [transactionPin, setTransactionPin] = React.useState('')
  const [infoEntered, setInfoEntered] = React.useState(false)
  const [confilrmTransaction, setConfilrmTransaction] = React.useState(false)

  const handleNext = () => {
    if (activeTab === 'info') {
      setActiveTab('confirm')
      setInfoEntered(true)
    } else if (activeTab === 'confirm') {
      setActiveTab('success')
      setConfilrmTransaction(true)
    }
  }

  return (
    <>
      <Layout title="Bills ≫ Airtime">
        <PurchaseLayout
          title="Buy Airtime"
          infoState={infoEntered}
          confirmState={confilrmTransaction}
        >
          {activeTab === 'info' && (
            <form tw="space-y-5  ">
              <TextField
                label="Amount"
                placeholder="N 5000"
                value={amount}
                setValue={setAmount}
              />
              <TextField
                label="Network"
                placeholder="N 5000"
                select={['Airtel', 'MTN', 'Glo', '9mobile']}
                value={network}
                setValue={setNetwork}
              />
              <TextField
                label="Phone Number"
                placeholder="08012345678"
                value={phoneNumber}
                setValue={setPhoneNumber}
              />

              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} />}
                label={<p tw="text-[13px] ml-2">Add to beneficiary</p>}
              />

              <MUIButton onClick={handleNext}>Next</MUIButton>
            </form>
          )}

          {activeTab === 'confirm' && (
            <div tw="lg:(max-w-sm)">
              <h6 tw="text-center text-[13px] mb-11">
                Enter your transaction PIN
              </h6>

              <OtpInput
                inputStyle={{
                  width: '100%',
                  height: '62px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  color: '#000',
                  padding: '0px 10px',
                  border: '1px solid #E3E5E8',
                }}
                numInputs={4}
                placeholder="****"
                value={transactionPin}
                onChange={setTransactionPin}
                separator={<span tw="w-4"></span>}
              />

              <MUIButton onClick={handleNext} tw="mt-14">
                Confirm
              </MUIButton>

              <div tw="mt-10 px-5 py-4 bg-[#E9F4FB] rounded-xl">
                <p tw="text-sm">Wallet balance</p>
                <p tw="text-xl mt-3">
                  <CurrencyFormat
                    value={234022}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₦'}
                    className="font-500"
                  />
                </p>
              </div>
            </div>
          )}

          {activeTab === 'success' && (
            <div tw="lg:(max-w-sm w-full)">
              <div tw="flex items-center justify-center">
                <TransactionSuccessSVG />
              </div>

              <h6
                tw="text-center text-paysure-text-100 mt-5"
                className="font-500"
              >
                Transaction Successful
              </h6>

              <p tw="text-center text-[#505780] text-[13px] mt-2.5">
                We believe you enjoyed the experience
              </p>

              <Divider
                css={[tw`lg:block bg-[#E4ECF7] mt-7`]}
                // orientation="vertical"
                flexItem
              />

              <div tw="grid grid-cols-2 gap-y-8 gap-x-4 mt-7">
                <ReceiptLabel
                  label="Amount"
                  value={
                    <CurrencyFormat
                      value={234022}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₦'}
                      className="font-500"
                    />
                  }
                />
                <ReceiptLabel
                  label="Reference"
                  value="hb97tsdg8lgyFexT"
                  isRightAlgned
                />
                <ReceiptLabel label="Transaction Type" value="Virtual top-up" />
                <ReceiptLabel
                  label="Charges"
                  value={
                    <CurrencyFormat
                      value={0}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₦'}
                      className="font-500"
                    />
                  }
                  isRightAlgned
                />
                <ReceiptLabel
                  label="Status"
                  value={<p tw="text-paysure-success-100 uppercase">Sucess</p>}
                />
                <ReceiptLabel label="Recurring" value="Yes" isRightAlgned />
              </div>

              <Divider
                css={[tw`lg:block bg-[#E4ECF7] mt-7`]}
                // orientation="vertical"
                flexItem
              />

              <div tw="flex items-center space-x-5 mt-7">
                <MUIButton onClick={handleNext}>Confirm</MUIButton>
                <MUIButton
                  onClick={handleNext}
                  tw="text-paysure-primary-100 bg-[#E4ECF7] hover:(text-white)"
                >
                  Download receipt
                </MUIButton>
              </div>

              <div tw="flex items-center justify-center">
                <Button tw="normal-case text-paysure-primary-100 mt-10 text-sm">
                  Set as recurring
                </Button>
              </div>
            </div>
          )}
        </PurchaseLayout>
      </Layout>
    </>
  )
}

// Tailwind styles
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 block w-full text-white normal-case rounded-lg p-4 pl-3.5 text-sm hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`

export default BuyAirtimeDashboard
