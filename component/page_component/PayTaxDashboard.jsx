import React from 'react'
import tw from 'twin.macro'
import OtpInput from 'react-otp-input'
import CurrencyFormat from 'react-currency-format'
import { Button, Divider, FormControlLabel } from '@mui/material'

import { TransactionSuccessSVG } from '../SVGIcons'
import { Layout, PurchaseLayout, ReceiptLabel, TextField, IOSSwitch } from '..'

const PayTaxDashboard = () => {
  // UseState Hooks
  const [activeTab, setActiveTab] = React.useState('info')
  const [state, setState] = React.useState('')
  const [revenueHead, setRevenueHead] = React.useState('')
  const [tax, setTax] = React.useState('')
  const [fullName, setFullName] = React.useState('')
  const [transactionPin, setTransactionPin] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
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
      <Layout title="Bills ≫ Tax">
        <PurchaseLayout
          title="Tax"
          infoState={infoEntered}
          confirmState={confilrmTransaction}
        >
          {activeTab === 'info' && (
            <form tw="space-y-5  ">
              <TextField
                label="Select State"
                select={['Lagos', 'MTN', 'Glo', '9mobile']}
                value={state}
                setValue={setState}
              />
              <TextField
                label="Select Revenue Head"
                select={['LIRS', 'MTN', 'Glo', '9mobile']}
                value={revenueHead}
                setValue={setRevenueHead}
              />
              <TextField
                label="Select Tax"
                select={['withholding Tax', 'MTN', 'Glo', '9mobile']}
                value={tax}
                setValue={setTax}
              />
              <TextField
                label="Enter Full Name"
                placeholder="John Doe"
                value={fullName}
                setValue={setFullName}
              />
              <TextField
                label="Enter Email"
                placeholder="johndoe@gmail.com"
                type="email"
                value={email}
                setValue={setEmail}
              />
              <TextField
                label="Enter Phone Number"
                placeholder="+234 (0) 802 3412 123"
                value={phoneNumber}
                setValue={setPhoneNumber}
              />

              <div>
                <MUIButton tw="mt-12" onClick={handleNext}>
                  Next
                </MUIButton>
              </div>
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
                <ReceiptLabel label="Tax" value="Withholding Tax" />
                <ReceiptLabel
                  label="Reference"
                  value="hb97tsdg8lgyFexT"
                  isRightAlgned
                />
                <ReceiptLabel label="Revenue Head" value="LIRS" />
                <ReceiptLabel
                  label="Phone Number"
                  value="+234 (0) 802 3412 123"
                  isRightAlgned
                />
                <ReceiptLabel
                  label="Status"
                  value={<p tw="text-paysure-success-100 uppercase">Sucess</p>}
                />
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
              </div>

              <Divider
                css={[tw`lg:block bg-[#E4ECF7] mt-7`]}
                // orientation="vertical"
                flexItem
              />

              <div tw="flex items-center space-x-5 mt-7">
                <MUIButton onClick={handleNext}>Pay again</MUIButton>
                <MUIButton
                  onClick={handleNext}
                  tw="text-paysure-primary-100 bg-[#E4ECF7] hover:(text-white)"
                >
                  Get issued receipt
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

export default PayTaxDashboard
