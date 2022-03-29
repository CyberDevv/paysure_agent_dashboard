import React from 'react'
import tw from 'twin.macro'
import OtpInput from 'react-otp-input'
import CurrencyFormat from 'react-currency-format'
import { Button, Divider, FormControlLabel } from '@mui/material'

import { TransactionSuccessSVG } from '../SVGIcons'
import {
  Layout,
  PurchaseLayout,
  ReceiptLabel,
  TextField,
  IOSSwitch,
  Modal,
} from '..'

const BuyAirtimeDashboard = () => {
  // UseState Hooks
  const [activeTab, setActiveTab] = React.useState('info')
  const [amount, setAmount] = React.useState('')
  const [network, setNetwork] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [transactionPin, setTransactionPin] = React.useState('')
  const [infoEntered, setInfoEntered] = React.useState(false)
  const [payMethodSelected, setPayMethodSelected] = React.useState(false)
  const [confilrmTransaction, setConfilrmTransaction] = React.useState(false)
  const [modalView, setModalView] = React.useState(false)

  const handleInfoNext = () => {
    setModalView(true)
    setActiveTab('summary')
  }

  const handleSummaryConfirm = () => {
    setActiveTab('paymentMethod')
    setModalView(false)
    setInfoEntered(true)
  }

  const handleNext = () => {
    setActiveTab('success')
    setConfilrmTransaction(true)
  }

  return (
    <>
      <Layout title="Bills ≫ Airtime">
        <PurchaseLayout
          title="Buy Airtime"
          infoState={infoEntered}
          confirmState={confilrmTransaction}
          payMethodSelected={payMethodSelected}
          activeTab={activeTab}
          amount={amount}
          setPayMethodSelected={setPayMethodSelected}
          setActiveTab={setActiveTab}
        >
          {(activeTab === 'info' || activeTab === 'summary') && (
            <>
              <form tw="space-y-5  ">
                <TextField
                  label="Amount"
                  placeholder="N 5000"
                  value={amount}
                  setValue={setAmount}
                />
                <TextField
                  label="Network"
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
                  control={<IOSSwitch />}
                  label={<p tw="text-[13px] ml-2">Add to beneficiary</p>}
                />

                <MUIButton onClick={handleInfoNext}>Next</MUIButton>
              </form>

              {/* Summary Modal */}
              <Modal
                title="Summary"
                setState={setModalView}
                state={modalView}
                buttonLabel="Confirm"
                onClick={handleSummaryConfirm}
              >
                <h6 tw="text-center text-xs mb-10">
                  Pleace confirm the details
                </h6>

                <div tw="grid grid-cols-2 gap-y-8 gap-x-4">
                  <ReceiptLabel
                    label="Amount"
                    value={
                      <CurrencyFormat
                        value={amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₦'}
                        className="font-500"
                      />
                    }
                  />
                  <ReceiptLabel
                    label="Phone Number"
                    value={phoneNumber}
                    isRightAlgned
                  />
                  <ReceiptLabel label="Network" value={network} />
                </div>
              </Modal>
            </>
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
