import React from 'react'
import tw from 'twin.macro'
import { Button } from '@mui/material'

import { KYCDocumentSVG, UploadKYCDocumentSVG } from './SVGIcons'

const Document = ({ name, hasDownload }) => {
  return (
    <div css={[tw`flex items-center space-x-4`]}>
      <KYCDocumentSVG />

      <div tw="flex justify-between items-center w-full">
        <div>
          <h2 tw="text-dark tracking-[-0.025em]" className="font-500">
            {name}
          </h2>
          {hasDownload && (
            <button tw="text-[13px] text-paysure-primary-100 underline">
              Download
            </button>
          )}
        </div>
        <Button
          tw="normal-case text-black border-border"
          variant="outlined"
          startIcon={<UploadKYCDocumentSVG />}
        >
          Upload
        </Button>
      </div>
    </div>
  )
}

const KYCDocuments = () => {
  return (
    <div tw= "w-full md:(max-w-sm)">
      <H1 className="font-500">Documents</H1>

      <div tw="space-y-8 mt-6 lg:(space-y-14 mt-10)">
        <Document name="KYC Dpcument" hasDownload />
        <Document name="Guarantor Form" hasDownload />
        <Document name="Valid ID" />
        <Document name="Utility Bill" />
        <Document name="Guarantor Valid ID" />
      </div>
    </div>
  )
}

// Tailwind Styles
const H1 = tw.h3`text-black tracking-[-0.025em] leading-[29px]`

export default KYCDocuments
