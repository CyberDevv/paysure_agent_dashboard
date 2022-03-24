import React from 'react'
import tw from 'twin.macro'

const ReceiptLaebel = ({ label, value, isRightAlgned, isSpan2 }) => {
  return (
    <label
      css={[
        tw`block text-sm text-[#505780]`,
        isRightAlgned ? tw`text-right` : tw`text-left`,
        isSpan2 && tw`col-span-2`,
      ]}
    >
      {label}
      <p tw="text-dark mt-2 text-base" className="font-500">
        {value}
      </p>
    </label>
  )
}

export default ReceiptLaebel
