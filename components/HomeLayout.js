import '../styles/global.css'
import '../styles/simplelineicons.css'
import '../styles/tailwind.css'
import NavbarHome from './NavbarHome'
import Footer from './Footer'

const HomeLayout = ({ children }) => (
  <div className="overlflow-x-hidden">
    <NavbarHome />
    {children}
    <Footer />
  </div>
)

export default HomeLayout;
