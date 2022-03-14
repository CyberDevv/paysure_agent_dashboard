import tw from 'twin.macro'
import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiContext,
} from '@mui/x-data-grid'

import { FilterBox, SearchBar, DatRangePickerAndOthers } from '.'

const DataGridView = ({
  rows,
  columns,
  dropdownData,
  limited,
  hasSearch,
  hasSort,
  hasExportBtn,
  hasFilterShowing,
  hasFilterStatus,
  hasFilterType,
  typeDropdownData,
  StatusDropdownData,
  hasFilter,
}) => {
  // Datagird Toolbar
  const CustomToolbar = () => {
    // useState hook
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const apiRef = useGridApiContext()

    // funcitons
    const handleExportCSV = options => apiRef.current.exportDataAsCsv(options)

    const handleExportPrint = options =>
      apiRef.current.exportDataAsPrint(options)

    const handleClick = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    const handleExportAsCSV = () => {
      handleClose()

      handleExportCSV({ filename: 'my-export.csv' })
    }

    const handlePrint = () => {
      handleClose()

      handleExportPrint({ filename: 'my-export.csv' })
    }

    return (
      <GridToolbarContainer tw="mb-6">
        <FuncWrappper>
          <div
            css={[
              tw`space-y-2.5 sm:(flex items-center flex-row space-x-2.5 space-y-0)`,
            ]}
          >
            {/* Search */}
            {hasSearch && <SearchBar />}

            {/* Filter */}
            {hasFilterShowing ||
              (hasFilter && (
                <FilterBox
                  label={hasFilter || 'Showing'}
                  dropdownData={dropdownData}
                />
              ))}

            {/* Filter2 */}
            {hasFilterType && (
              <FilterBox label="Type" dropdownData={typeDropdownData} />
            )}

            {/* Filter3 */}
            {hasFilterStatus && (
              <FilterBox label="Status" dropdownData={StatusDropdownData} />
            )}
          </div>

          <div css={[tw`flex items-center justify-between w-full space-x-2.5`]}>
            {/* Date range picker */}
            {hasSort && <DatRangePickerAndOthers />}

            {/* Export btn */}
            {hasExportBtn && (
              <>
                <MUIButton
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Export data
                </MUIButton>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleExportAsCSV}>Export as CSV</MenuItem>
                  <MenuItem onClick={handlePrint}>Print</MenuItem>
                </Menu>
              </>
            )}
          </div>
        </FuncWrappper>
      </GridToolbarContainer>
    )
  }

  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1, width: '100%' }}>
          <DataGrid
            rows={limited ? rows.slice(0, 5) : rows}
            columns={columns}
            autoHeight
            disableColumnMenu
            hideFooter
            disableSelectionOnClick
            rowHeight={70}
            components={{
              Toolbar: CustomToolbar,
            }}
            sx={{
              border: 'none',
              '& .grid-header': {
                backgroundColor: '#F3F7FC',
                fontSize: '13px',
                paddingX: '15px',
                color: '#000',
              },
              '& .MuiDataGrid-row': {
                borderBottom: '1px solid #EBF2FA',
                fontSize: '13px',
                color: '#16192C',
              },
              '& .MuiDataGrid-cell': {
                paddingX: '20px',

                '&:focus': {
                  outline: 'none',
                },
              },
            }}
          />
        </div>
      </div>
    </Wrapper>
  )
}

// Tailwind styles
const Wrapper = tw.div`my-4`
const FuncWrappper = tw.div`w-full space-y-2.5 2xl:(flex items-center justify-between space-x-2.5 space-y-0)`
const MUIButton = tw(
  Button,
)`normal-case text-paysure-100 bg-paysure-10 px-5 py-3 text-sm tracking-[-0.025em]`

export default DataGridView
