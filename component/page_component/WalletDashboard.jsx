import React from 'react'
import tw from 'twin.macro'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import OtpInput from 'react-otp-input'
import CurrencyFormat from 'react-currency-format'

import {
  Layout,
  Modal,
  Label,
  DataGridViewTemp,
  DatRangePickerAndOthers,
  FilterBox,
} from '..'
import { EllipsisSVG, Print, SuccessfulSVG, ViewActionSVG } from '../SVGIcons'

const WalletsDashboard = () => {
  // useState hook
  const [isModalOpened, setIsModalOpened] = React.useState(false)
  const [modalState, setModalState] = React.useState('fundWallet')
  const [fundAmount, setFundAmount] = React.useState('0.00')
  const [withdrawAmount, setWithdrawAmount] = React.useState('0.00')
  const [cardNumber, setCardNumber] = React.useState('')
  const [otp, setOTP] = React.useState('')
  const [expiryDate, setExpiryDate] = React.useState('')
  const [cvv, setCVV] = React.useState('')
  const [modalTitle, setModalTitle] = React.useState([
    'Fund Wallet',
    'Continue',
  ])
  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  const handleBtnMenuShown = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // functions
  const handSetIsModalOpened = React.useCallback(() => {
    setIsModalOpened(true)
    setModalState('fundWallet')
    setModalTitle(['Fund Wallet', 'Continue'])
  })
  const handSetIsModalOpened2 = React.useCallback(() => {
    setIsModalOpened(true)
    setModalState('Withdraw')
    setModalTitle(['Withdraw', 'Continue'])
  })

  const handleOTPChange = React.useCallback(otp => setOTP(otp))

  const handleModalBtnClick = React.useCallback(() => {
    // fund wallet
    if (modalState === 'fundWallet') {
      setModalState('newCard')
      setModalTitle(['New Card', 'Continue'])
    }

    // new card
    if (modalState === 'newCard') {
      setModalState('otp')
      setModalTitle(['Enter OTP', 'Complete'])
    }

    // otp
    if (modalState === 'otp') {
      setModalState('selectCard')
      setModalTitle(['Select Card', 'Proceed'])
    }

    // selectCard
    if (modalState === 'selectCard') {
      setIsModalOpened(false)

      setModalState('fundWallet')
      setModalTitle(['Fund Wallet', 'Continue'])
    }
  })

  return (
    <Layout title="Wallet">
      <section>
        <div css={[tw`flex justify-between items-center`]}>
          <Ttile className="font-bold">Wallet</Ttile>
        </div>

        {/* Wallet balance */}
        <WalletWrapper className="bgSVG">
          <div>
            <P className="font-500">Total Wallet Balance</P>
            <Amount>
              <CurrencyFormat
                value={350034}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₦'}
                className="font-500"
              />
            </Amount>
          </div>

          {/* Buttons */}
          <div tw="hidden space-x-4 md:block lg:( space-x-7)">
            <MUIButton tw="lg:(px-14)" onClick={handSetIsModalOpened}>
              Fund Wallet
            </MUIButton>
            <MUIButton
              tw="bg-black hover:(bg-black ring-black) lg:(px-14)"
              onClick={handSetIsModalOpened2}
            >
              Withdraw
            </MUIButton>
          </div>

          {/* Mobile buttons */}
          <div tw="md:hidden">
            <IconButton
              id="basic-button"
              aria-controls={open ? 'Btnmenu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleBtnMenuShown}
            >
              <EllipsisSVG />
            </IconButton>

            <Menu
              id="Btnmenu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handSetIsModalOpened}>
                <a>Fund Wallet</a>
              </MenuItem>

              <MenuItem onClick={handSetIsModalOpened2}>
                <a>Withdraw</a>
              </MenuItem>
            </Menu>
          </div>

          {/* fund wallet modal */}
          <Modal
            setState={setIsModalOpened}
            title={modalTitle[0]}
            state={isModalOpened}
            buttonLabel={modalTitle[1]}
            onClick={handleModalBtnClick}
          >
            {/* Fund Wallet */}
            {modalState === 'fundWallet' && (
              <div tw="my-16 flex flex-col items-center justify-center">
                <input
                  tw="text-[32px] text-paysure-text-100 w-full text-center focus:outline-none"
                  type="text"
                  value={fundAmount}
                  onChange={e => setFundAmount(e.target.value)}
                />

                <p tw="text-sm text-[#505780]">Enter Amount</p>
              </div>
            )}

            {/* New card */}
            {modalState === 'newCard' && (
              <div tw="my-8 space-y-10">
                <Label
                  label="Enter Card Number"
                  type="text"
                  value={cardNumber}
                  setState={setCardNumber}
                  placeholder="0000 0000 0000 0000"
                />
                <FlexBox>
                  <Label
                    label="Exp date"
                    type="text"
                    value={expiryDate}
                    setState={setExpiryDate}
                  />
                  <Label
                    label="CVV"
                    type="text"
                    placeholder=""
                    value={cvv}
                    setState={setCVV}
                  />
                </FlexBox>
              </div>
            )}

            {/* Enter OTP */}
            {modalState === 'otp' && (
              <div tw="my-8 space-y-7">
                <p tw="text-[13px] text-[#454D54] text-center">
                  A one time password was sent to you
                </p>

                <OtpInput
                  value={otp}
                  onChange={handleOTPChange}
                  numInputs={6}
                  isInputSecure
                  shouldAutoFocus
                  inputStyle={{
                    fontSize: '32px',
                    border: '1px solid #E3E5E8',
                    // padding: '0 20px',
                    borderRadius: '4px',
                    width: '100%',
                    margin: '0 4px',
                  }}
                  containerStyle={{
                    displa: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                  // separator={<span>-</span>}
                />

                <p tw="text-[13px] text-[#454D54] text-center">
                  Didn't receive code?{' '}
                  <a href="" tw="text-paysure-primary-100 hover:(underline)">
                    Request again
                  </a>
                </p>
              </div>
            )}

            {/* Select Card */}
            {modalState === 'selectCard' && (
              <div tw="my-8 flex flex-col items-center justify-center">
                <SuccessfulSVG />

                <h4 tw="text-[24px] mt-6" className="font-500">
                  Transaction Successful
                </h4>

                <p tw="text-[#666666] text-[14px] mt-2">
                  <CurrencyFormat
                    value={fundAmount}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₦'}
                  />{' '}
                  has been added to your wallet
                </p>
              </div>
            )}

            {/* Fund Wallet */}
            {modalState === 'Withdraw' && (
              <div tw="my-16 flex flex-col items-center justify-center">
                <input
                  tw="text-[32px] text-paysure-text-100 w-full text-center focus:outline-none"
                  type="text"
                  value={withdrawAmount}
                  onChange={e => setWithdrawAmount(e.target.value)}
                />

                <p tw="text-sm text-[#505780]">Enter Amount</p>
              </div>
            )}
          </Modal>
        </WalletWrapper>

        <DataGridViewTemp
          link="/wallet/walletHistory"
          limited
          title="Wallet History"
          rows={[]}
          columns={columns}
          hasExportBtn
          className={tw`flex flex-col space-y-4 md:(flex-row space-y-0 space-x-4) w-full`}
        >
          {/* <div tw= "flex items-center justify-between space-x-4 w-full"> */}
            <FilterBox label="Status" dropdownData={dropdownData} />
            <DatRangePickerAndOthers />
          {/* </div> */}
        </DataGridViewTemp>
      </section>
    </Layout>
  )
}

// FIXME: Temp data (should be replaced with real data)
const dropdownData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'admin',
    label: 'Admin',
  },
]

// FIXME: Temp data (should be replaced with real data)
const rows = [
  {
    id: 1,
    col1: 1,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 2,
    col1: 2,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 3,
    col1: 3,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 4,
    col1: 4,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'completed',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
  {
    id: 5,
    col1: 5,
    col2: 'Bessie Cooper',
    col3: 'Tv Subscription',
    col4: 5000,
    col5: 39.9,
    col6: '443943043',
    col7: 'Bank Card',
    col8: 'pending',
    col9: 'Dec 30, 2018 05:12',
    col10: '',
  },
]

// FIXME: Temp data (should be replaced with real data)
const columns = [
  {
    field: 'col1',
    headerName: 'S/N',
    minWidth: 71,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col2',
    headerName: 'Transaction Type',
    minWidth: 227,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col3',
    headerName: 'Description',
    minWidth: 140,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col4',
    headerName: 'Debt',
    minWidth: 126,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col5',
    headerName: 'Credit',
    minWidth: 101,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col6',
    headerName: 'Balance',
    minWidth: 139,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col7',
    headerName: 'Date',
    minWidth: 144,
    flex: 1,
    headerClassName: 'grid-header',
  },
  {
    field: 'col8',
    headerName: 'Action',
    minWidth: 100,
    flex: 1,
    sortable: false,
    headerClassName: 'grid-header',

    renderCell: params => {
      const handleEdit = () => {
        console.log('edit')
      }

      const handleView = e => {
        const api = params.api
        const thisRow = {}

        api
          .getAllColumns()
          .filter(c => c.field !== '__check__' && !!c)
          .forEach(
            c => (thisRow[c.field] = params.getValue(params.id, c.field)),
          )

        // Router.push(`/agents/super_agent/${thisRow.col1}`)
      }

      return (
        <div tw="space-x-1">
          <button onClick={handleEdit}>
            <ViewActionSVG />
          </button>

          <button onClick={handleView}>
            <Print />
          </button>
        </div>
      )
    },
  },
]

// Tailwind styles
const Ttile = tw.h1`text-gray-dark tracking-[-0.05em] text-2xl lg:text-[28px] xl:(text-[32px])`
const TitleSpan = tw.span`block text-light-dark text-sm font-normal mt-1.5 tracking-normal lg:(text-base) xl:mt-3`
const MUIButton = tw(
  Button,
)`bg-paysure-primary-100 text-white normal-case rounded-lg p-3 pl-3.5 text-[13px] hover:(bg-paysure-primary-100 ring-2 ring-offset-2 ring-paysure-primary-100)`

const WalletWrapper = tw.div`mt-10 p-4 space-y-1 flex items-center justify-between rounded-xl lg:(py-10 px-8 space-y-4 rounded-[28px])`
const P = tw.p`leading-[19px] text-sm lg:text-base`
const Amount = tw.h4`text-4xl mt-2 lg:(text-[40px] mt-4) leading-[48px] tracking-[-0.05em]`
const FlexBox = tw.div`flex items-center justify-between space-x-4`

export default WalletsDashboard
