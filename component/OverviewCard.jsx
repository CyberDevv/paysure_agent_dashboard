import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { OverViewCard } from '.'

const OverviewCardSection = ({ title, data, btnLabel, link }) => {
  return (
    <Wrapper>
      <div tw="flex items-center justify-between">
        <Title className="font-500">{title}</Title>

        {link && (
          <Link href={link}>
            <a css={[tw`text-paysure-primary-100 hover:underline cursor-pointer`]}>
              {btnLabel}
            </a>
          </Link>
        )}
      </div>

      <div>
        <Div>
          {data.map(({ amount, label, link }, index) => {
            return (
              <OverViewCard
                key={index}
                amount={amount}
                label={label}
                onClick={link}
              />
            )
          })}
        </Div>
      </div>
    </Wrapper>
  )
}

OverviewCardSection.prototype = {
  tilte: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  btnLabel: PropTypes.string,
}

// Tailwind Styles
const Wrapper = tw.div`mt-10`
const Title = tw.h3`tracking-[-0.02em] text-gray-dark`
const Div = tw.div`grid grid-cols-2 lg:grid-cols-3 gap-3 mt-3 rounded-lg xl:(gap-5 grid-cols-4 mt-5)`

export default OverviewCardSection
