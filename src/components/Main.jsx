import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Photos from './Gallery/Photos'
import { Route, Routes ,Navigate} from 'react-router-dom'
import Auth from './Auth/Auth'
import Logout from './Auth/Logout'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};


const Main = (props) => {
  let routes = null;
  if (props.token) {
    routes = (
      <Routes>
        <Route path='/' element={<Photos/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    )
  }
  else{
    routes = (
      <Routes>
        <Route path='/' element={<Photos/>}/>
        <Route path='/signin' element={<Auth/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    )

  }
  return (
    <div>
      <Header/>
      {routes}
      <Footer/>
    </div>
  )
}

export default connect(mapStateToProps)(Main)
