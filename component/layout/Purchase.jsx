import React from 'react'
import tw from 'twin.macro'
import { Button, Divider } from '@mui/material'
import CurrencyFormat from 'react-currency-format'

import { Modal } from '..'
import {
  Verified,
  UnVerified,
  ArrowBack,
  GreaterThanSVG,
  QRCodeSVG,
} from '../SVGIcons'
import Router from 'next/router'

const BuyAirtimeDashboard = ({
  title,
  children,
  infoState,
  confirmState,
  payMethodSelected,
  activeTab,
  amount,
  setActiveTab,
  setPayMethodSelected,
}) => {
  const handleGoBack = React.useCallback(() => {
    Router.back()
  })

  const [walletBalanceModal, setWalletBalanceModal] = React.useState(false)
  const [ussdModal, setUssdModal] = React.useState(false)
  const [QRCodeModal, setQRCodeModal] = React.useState(false)

  const handleToPin = () => {
    setActiveTab('confirm')
    setPayMethodSelected(true)
  }

  return (
    <>
      <SectionsWrapper>
        {/* Section 1 */}
        <aside css={[tw`mt-4  w-full lg:(max-w-[200px] mt-8) 2xl:(max-w-sm)`]}>
          <div>
            <button
              onClick={handleGoBack}
              tw="text-dark text-[13px] cursor-pointer "
            >
              {<ArrowBack />} Back
            </button>
            <Ttile className="font-bold">{title}</Ttile>
          </div>

          {/* Steps indicatior */}
          <div tw="mt-4 lg:mt-8 flex space-x-4 items-center justify-center flex-wrap lg:(block space-y-8 space-x-0)">
            <p tw="my-1 lg:pr-3 text-[13px]">
              <i tw="mr-2 md:mr-4">
                {infoState ? <Verified /> : <UnVerified />}
              </i>
              Enter Information
            </p>
            <p tw="my-1 lg:pr-3 text-[13px]">
              <i tw="mr-2 md:mr-4">
                {payMethodSelected ? <Verified /> : <UnVerified />}
              </i>
              Choose Payment Method
            </p>
            <p tw="my-1 lg:pr-3 text-[13px]">
              <i tw="mr-2 md:mr-4">
                {confirmState ? <Verified /> : <UnVerified />}
              </i>
              Confirm Transaction
            </p>
          </div>
        </aside>

        {/* Vertical Divider */}
        <Divider css={[tw`hidden lg:block`]} orientation="vertical" flexItem />

        {/* sections 2 */}
        <div css={[tw`w-full mt-8 lg:px-8 flex justify-center xl:mt-8`]}>
          <div tw="max-w-sm lg:(flex justify-center) w-full">
            {children}
            {activeTab === 'paymentMethod' && (
              <>
                <div tw="w-full space-y-5">
                  <PaymentButton
                    label="Pay With Wallet"
                    onClick={() => setWalletBalanceModal(true)}
                  />
                  <PaymentButton label="Pay With Bank Card" />
                  <PaymentButton
                    label="Pay With USSD Code"
                    onClick={() => setUssdModal(true)}
                  />
                  <PaymentButton
                    label="Pay With QR Code"
                    onClick={() => setQRCodeModal(true)}
                  />
                </div>

                {/* Wallet Ballance Modal */}
                <Modal
                  title="Wallet Balance"
                  setState={setWalletBalanceModal}
                  state={walletBalanceModal}
                  buttonLabel="Continue"
                  onClick={handleToPin}
                >
                  <p tw="text-center mt-[50px] text-[32px]">
                    <CurrencyFormat
                      value={32323258}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₦'}
                      className="font-500"
                    />
                  </p>
                  <p tw="text-[#505780] text-xs text-center">Wallet Balance</p>
                </Modal>

                {/* ussd Modal */}
                <Modal
                  title="USSD Code"
                  setState={setUssdModal}
                  state={ussdModal}
                  buttonLabel="Close"
                  isClose
                >
                  <h6 tw="text-center text-xs my-6">
                    How much do you want to send
                  </h6>

                  <p tw="text-center mt-[50px] text-[32px]">
                    <CurrencyFormat
                      value={amount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₦'}
                      className="font-500"
                    />
                  </p>

                  <div tw="flex justify-center w-full py-8">
                    <div tw="flex items-center justify-center p-3 bg-[#F9F5FF] space-x-8 min-w-[222px] rounded-lg">
                      <p tw="text-paysure-primary-100">
                        *123*4*<span>{amount}</span>#
                      </p>
                      <Button tw="normal-case text-white bg-paysure-primary-100">
                        Copy
                      </Button>
                    </div>
                  </div>
                </Modal>

                {/* QR Code Modal */}
                <Modal
                  title="Scan QR Code"
                  setState={setQRCodeModal}
                  state={QRCodeModal}
                  buttonLabel="Close"
                  isClose
                >
                  <div tw="flex items-center justify-center my-6">
                    <QRCodeSVG />
                  </div>

                  <h6 tw="text-center text-xs my-6">
                    Scan QR code to make a payment
                  </h6>
                </Modal>
              </>
            )}
          </div>
        </div>

        <Divider css={[tw`hidden lg:block`]} orientation="vertical" flexItem />

        {/* Section 3 */}
        <aside
          css={[
            tw`mt-8 lg:mt-16 w-full lg:(max-w-[200px]) xl:(max-w-[240px]) divide-y-2 divide-[#EBF2FA]`,
          ]}
        >
          <SponoredAd
            label="5GB no N2000 on Airel"
            btnLabel="Click to buy data now"
          />
          <SponoredAd
            label="Have you paid your Electricity bills this month"
            description="Pay now to avoid nepa wahala"
            btnLabel="Send money"
            btn
          />
          <SponoredAd
            label="5GB no N2000 on Airel"
            btnLabel="Click to buy data now"
          />
        </aside>
      </SectionsWrapper>
    </>
  )
}

const SponoredAd = ({ label, description, btnLabel, btn }) => {
  return (
    <div tw="flex flex-col items-center justify-center py-8 xl:py-10 px-5 text-center">
      {/* Avatar */}
      <div tw="w-16 h-16 bg-[#E4ECF7] rounded-full"></div>

      {/* Text */}
      <div tw="mt-4">
        <p
          tw="text-light-dark tracking-[-0.025em] text-sm xl:text-base"
          className="font-500"
        >
          {label}
        </p>
        {description && (
          <p tw="text-[13px] text-light-dark mt-3">{description}</p>
        )}
      </div>

      {/* buttons */}
      <div>
        {!btn && (
          <Button tw="text-[#A6B7D4] normal-case text-[13px] mt-1.5">
            {btnLabel}
          </Button>
        )}

        {btn && (
          <Button tw="bg-[#A6B7D4] text-white py-3 px-7 rounded-xl text-sm normal-case mt-7 hover:(bg-[#92a4c4])">
            {btnLabel}
          </Button>
        )}
      </div>
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
const Ttile = tw.h1`text-light-dark tracking-[-0.05em] mt-5 text-center text-xl lg:(text-2xl text-left)`
const SectionsWrapper = tw.div`flex flex-col lg:flex-row`

export default BuyAirtimeDashboard
