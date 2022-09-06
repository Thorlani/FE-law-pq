import Footer from "./Footer"
import Navbar from "./Navbar"
import Recommended from "./Recommended"


const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
        <Recommended />
        <Footer />
    </>
  )
}

export default Layout