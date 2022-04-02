import React from 'react'
import tw from 'twin.macro'
import CurrencyFormat from 'react-currency-format'
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material'

import { Layout } from '..'
import {
  ExpandLess,
  ExpandMore,
  NoTax,
  PayTax,
  GreaterThanSVG,
} from '../SVGIcons'

const PayTaxDashboard = () => {
  // UseState Hooks
  const [billNumber, setBillNumber] = React.useState('')
  const [showDetails, setShowDetails] = React.useState(false)
  const [paymentMethod, setPaymentMethod] = React.useState(false)
  const [invoiceOpen, setInvoiceOpen] = React.useState(true)
  const [payersOpen, setPayersOpen] = React.useState(true)

  const handleInvoiceOpen = () => {
    setInvoiceOpen(!invoiceOpen)
  }

  const handlePayersOpen = () => {
    setPayersOpen(!payersOpen)
  }

  const handleSearch = () => {
    setShowDetails(true)
  }

  const handleProceedToPayment = () => {
    setPaymentMethod(true)
  }

  return (
    <>
      <Layout title="Bills ≫ Tax">
        <div tw="flex justify-center w-full">
          <div tw="max-w-[614px] py-10 px-8">
            <>
              <div tw="flex flex-col justify-center items-center w-full">
                <PayTax />
                <h2
                  tw="text-[32px] mt-7 tracking-[-0.025em] leading-[38px]"
                  className="font-bold"
                >
                  Pay Tax
                </h2>
                <p tw="text-center mt-2.5 text-[#425D8A] text-sm tracking-[-0.025em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare pretium accumsan, suspendisse.
                </p>

                {!showDetails && !paymentMethod && (
                  <div tw="mt-10 w-full">
                    <p tw="text-[#454D54] ">Bill Number</p>

                    <div tw="flex space-x-5 mt-2">
                      <Input
                        value={billNumber}
                        onChange={e => setBillNumber(e.target.value)}
                      />
                      <MUIButton onClick={handleSearch}>Search</MUIButton>
                    </div>
                  </div>
                )}
              </div>
            </>

            {/* Failed placeholder */}
            {!showDetails && !paymentMethod && (
              <div tw="flex flex-col items-center justify-center mt-20">
                <NoTax />
                <p tw="text-[#425D8A] text-center mt-8">
                  Invoice not found, check the Bill number you entered to be
                  sure there are no mistakes
                </p>
              </div>
            )}

            {/* Details */}
            {showDetails && !paymentMethod && (
              <div tw="mt-12 lg:mt-20">
                <h4 tw="text-paysure-text-100 text-xl" className="font-500">
                  Details
                </h4>

                <Divider tw="my-5 border-[#E4ECF7]" />

                <div>
                  {/* invoice Info */}
                  <List component="nav" aria-labelledby="invoice-info">
                    <ListItemButton onClick={handleInvoiceOpen}>
                      <ListItemText
                        primary={<p tw="text-[#8D9091]">Invoice Information</p>}
                      />
                      {invoiceOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={invoiceOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem
                          label="Assessed Service"
                          value="Economic Funds"
                          isBlue
                        />
                        <ListItem
                          label="Invoice Amount"
                          value={
                            <CurrencyFormat
                              value={4000}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'₦'}
                              className="font-500"
                            />
                          }
                        />
                        <ListItem
                          label="Invoice Number"
                          value="2783782344"
                          isBlue
                        />
                        <ListItem label="Month" value="January" />
                        <ListItem
                          label="Paid"
                          value={<p tw="text-paysure-danger-100">Not Paid</p>}
                          isBlue
                        />
                        <ListItem label="Year" value="2022" />
                      </List>
                    </Collapse>
                  </List>

                  <Divider tw="my-5 border-[#E4ECF7]" />

                  {/* payer's Info */}
                  <List component="nav" aria-labelledby="invoice-info">
                    <ListItemButton onClick={handlePayersOpen}>
                      <ListItemText
                        primary={<p tw="text-[#8D9091]">Payer's Information</p>}
                      />
                      {payersOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={payersOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem
                          label="Payer's Full Name"
                          value="John Doe"
                          isBlue
                        />
                        <ListItem
                          label="Payer's Email"
                          value="payersemail@yahoo.com"
                        />
                        <ListItem
                          label="Payer's Phone"
                          value="+234 (0) 8032 238 3442"
                          isBlue
                        />
                        <ListItem label="Payer Type" value="Corporate" />
                        <ListItem
                          label="Payer's TIN"
                          value="2873920321"
                          isBlue
                        />
                        <ListItem label="TIN Type" value="Temporary" />
                      </List>
                    </Collapse>
                  </List>

                  <Divider tw="mt-14 mb-5 border-[#E4ECF7]" />
                  <div tw="flex justify-center ">
                    <MUIButton onClick={handleProceedToPayment}>
                      Proceed to Payment
                    </MUIButton>
                  </div>
                </div>
              </div>
            )}

            {/* payment methods */}
            {showDetails && paymentMethod && (
              <div tw= "mt-10 space-y-5">
                <PaymentButton label="Pay with Cash" />
                <PaymentButton label="Pay with POS" />
                <PaymentButton label="Pay with Bank" />
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

const ListItem = ({ label, value, isBlue }) => {
  return (
    <div
      css={[
        tw`flex justify-between items-center p-5 space-x-4`,
        isBlue && tw`bg-[#F6FAFD]`,
      ]}
    >
      <p tw="text-[#425D8A]">{label}</p>
      <p tw="text-paysure-text-100">{value}</p>
    </div>
  )
}

const PaymentButton = ({ label, onClick }) => {
  return (
    <Button
      fullWidth
      endIcon={<GreaterThanSVG />}
      tw="normal-case bg-[#EBF2FA] text-black text-sm p-5 justify-between rounded-lg"
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

// Tailwind styles
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 text-white normal-case rounded py-3 px-6 hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`
const Input = tw.input`w-full py-2 px-3 border-2 focus:(outline-none ring-2 ring-gray-dark rounded)`

export default PayTaxDashboard
