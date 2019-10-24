import '../styles/simplelineicons.css'
import '../styles/global.css'
import '../styles/tailwind.css'
import NavbarHome from './NavbarHome'
import Footer from './Footer'

const HomeLayout = ({ children }) => (
  <>
    <NavbarHome />
    {children}
    <Footer />
  </>
)

export default HomeLayout;
