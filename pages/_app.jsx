import GlobalStyles from '../styles/GlobalStyles'

import '../styles/globalStyles.css'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
