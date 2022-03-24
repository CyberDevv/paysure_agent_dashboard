const numberFormatter = number => {
  const formatter = Intl.NumberFormat('en-us')
  return formatter.format(number)
}

export default numberFormatter
