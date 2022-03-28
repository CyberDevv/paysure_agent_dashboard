import React from 'react'
import tw from 'twin.macro'
import Link from 'next/link'

import { DataGridView } from '.'

const DataGridViewTemp = ({
  title,
  rows,
  columns,
  link,
  limited,
  hasExportBtn,
  hasMT,
  label,
  children,
  className,
}) => {
  return (
    <div css={[(limited || hasMT) && tw`mt-10`]}>
      <div css={[tw`flex items-center justify-between`]}>
        <Title className="font-500">{title}</Title>

        {link && (
          <Link href={link}>
            <a
              css={[
                tw`text-paysure-primary-100 hover:underline cursor-pointer`,
              ]}
            >
              View all
            </a>
          </Link>
        )}
      </div>
      <DataGridView
        rows={[]}
        columns={columns}
        limited={limited}
        hasExportBtn={hasExportBtn}
        label={label}
        className={className}
      >
        {children}
      </DataGridView>
    </div>
  )
}

// Tailwind Styles
const Title = tw.h3`tracking-[-0.02em] text-gray-dark lg:(text-[20px])`

export default DataGridViewTemp
