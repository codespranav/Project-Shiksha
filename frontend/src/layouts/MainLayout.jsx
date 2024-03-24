/* eslint-disable react/prop-types */
import Footer from './Footer'
import Navbar from './Navbar'

const MainLayout = (props) => {
  return (
    <div>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default MainLayout
