import '../styles/simplelineicons.css'
import '../styles/global.css'
import '../styles/tailwind.css'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default PageLayout;
