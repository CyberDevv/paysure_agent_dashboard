import tw from 'twin.macro'
import React from 'react'
import { Button, Dialog, Divider } from '@mui/material'

import { Close } from '../../SVGIcons'
import Link from 'next/link'

const Index_modal_layout = ({
  title,
  buttonLabel,
  state,
  setState,
  children,
  onClick,
  link,
  linkLabel,
  isClose,
}) => {
  // function
  const handleClose = React.useCallback(() => {
    setState(false)
  })

  return (
    <Dialog
      onClose={handleClose}
      open={state}
      sx={{ '& .MuiDialog-paper': { borderRadius: '20px' } }}
    >
      <InnerDialog>
        <DialogTitle className="font-500">
          {title}
          <IconWrapper onClick={handleClose}>
            <Close />
          </IconWrapper>
        </DialogTitle>

        <Divider sx={{ marginTop: '20px', borderColor: '#E4ECF7' }} />

        <Form>
          <div
            css={[
              tw`space-y-4 overflow-y-auto max-h-[60vh] scrollbar-track-color[#12a116]`,
            ]}
          >
            {children}
          </div>

          {!isClose && buttonLabel && (
            <Divider
              sx={{
                borderColor: '#E4ECF7',
                marginTop: '40px',
                marginBottom: '24px',
              }}
            />
          )}

          {!isClose && buttonLabel && (
            <ModalButton onClick={onClick} className="font-500">
              {buttonLabel}
            </ModalButton>
          )}

          {isClose && (
            <ModalButton
              tw="bg-transparent text-paysure-danger-100 py-2.5 hover:(bg-gray-50)"
              onClick={handleClose}
              className="font-500"
            >
              {buttonLabel}
            </ModalButton>
          )}

          {link && (
            <Link href={link}>
              <a tw="cursor-pointer mt-7 hover:(underline) text-center block text-sm">
                {linkLabel}
              </a>
            </Link>
          )}
        </Form>
      </InnerDialog>
    </Dialog>
  )
}

// Tailwind styles
const InnerDialog = tw.div`py-5 overflow-hidden w-[400px]`
const DialogTitle = tw.h5`px-8 text-base text-paysure-text-100 text-center`
const Form = tw.form`px-8 py-4`
const ModalButton = tw(
  Button,
)`normal-case bg-paysure-primary-100 text-white w-full py-5 rounded-xl text-sm hover:(bg-paysure-primary-100 shadow-xl)`
const IconWrapper = tw.button`absolute right-5 top-3.5 text-[#425D8A] hover:(text-red-700) transition-colors cursor-pointer stroke-current`

export default Index_modal_layout
