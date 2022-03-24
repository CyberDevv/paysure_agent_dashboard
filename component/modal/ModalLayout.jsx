import tw from 'twin.macro'
import React from 'react'
import { Button, Dialog, Divider } from '@mui/material'

import { Close } from '../SVGIcons'

const Index_modal_layout = ({
  title,
  buttonLabel,
  state,
  setState,
  children,
}) => {
  // function
  const handleClose = React.useCallback(() => {
    setState(false)
  })

  return (
    <Dialog
      onClose={handleClose}
      open={state}
      tw=""
      maxWidth="md"
      fullWidth
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
              tw`space-y-4 overflow-y-auto max-h-[600px] scrollbar-track-color[#12a116]`,
            ]}
          >
            {children}
          </div>
        </Form>
      </InnerDialog>
    </Dialog>
  )
}

// Tailwind styles
const InnerDialog = tw.div`py-5 overflow-hidden w-full`
const DialogTitle = tw.h5`px-8 text-base text-paysure-text-100`
const Form = tw.form`px-8 py-4`
const ModalButton = tw(
  Button,
)`normal-case bg-paysure-primary-100 text-white w-full py-5 rounded-xl text-sm hover:(bg-paysure-primary-100 shadow-xl)`
const IconWrapper = tw.button`absolute right-5 top-3.5 text-[#425D8A] hover:(text-red-700) transition-colors cursor-pointer stroke-current`

export default Index_modal_layout
