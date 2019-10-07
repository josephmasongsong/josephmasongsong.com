import '../styles/global.css'
import '../styles/simplelineicons.css'
import '../styles/tailwind.css'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children }) => (
  <div className="overlflow-x-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default PageLayout;