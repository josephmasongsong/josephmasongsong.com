import '../styles/global.css'
import '../styles/simplelineicons.css'
import '../styles/tailwind.css'
import Footer from './Footer'

const PageLayout = ({ children }) => (
  <div className="overlflow-x-hidden">
    {children}
    <Footer />
  </div>
)

export default PageLayout;
