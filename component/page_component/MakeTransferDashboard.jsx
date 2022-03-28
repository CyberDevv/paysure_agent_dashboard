import React from 'react'
import tw from 'twin.macro'
import OtpInput from 'react-otp-input'
import CurrencyFormat from 'react-currency-format'
import { Button, Divider, FormControlLabel } from '@mui/material'

import { TransactionSuccessSVG } from '../SVGIcons'
import { Layout, PurchaseLayout, ReceiptLabel, TextField, IOSSwitch } from '..'

const MakeTransferDashboard = () => {
  // UseState Hooks
  const [activeTab, setActiveTab] = React.useState('info')
  const [AccountNumber, setAccountNumber] = React.useState('')
  const [bank, setBank] = React.useState('')
  const [recipientName, setRecipientName] = React.useState('')
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
      <Layout title="Bills ≫ Transfer">
        <PurchaseLayout
          title="Transfer"
          infoState={infoEntered}
          confirmState={confilrmTransaction}
        >
          {activeTab === 'info' && (
            <form tw="space-y-5  ">
              <TextField
                label="Bank"
                select={['GTBank', 'Access Bank', 'FCMB', 'Zenith Bank']}
                value={bank}
                setValue={setBank}
              />
              <TextField
                label="Account Number"
                placeholder="0123456789"
                value={AccountNumber}
                setValue={setAccountNumber}
              />
              <TextField
                label="Recipient Name"
                placeholder="John Doe"
                value={recipientName}
                setValue={setRecipientName}
              />

              <FormControlLabel
                control={<IOSSwitch />}
                label={<p tw="text-[13px] ml-2">Add to beneficiary</p>}
              />

              <div tw="flex items-center justify-center flex-col space-y-12">
                <MUIButton tw="mt-12" onClick={handleNext}>
                  Next
                </MUIButton>

                <Button tw="normal-case text-paysure-primary-100 ">
                  Select a beneficiary
                </Button>
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
                <ReceiptLabel label="Recipient" value="Ozenua Oluwatobi" />
                <ReceiptLabel
                  label="Recipient Bank"
                  value="GTBank - 012345678"
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

export default MakeTransferDashboard
