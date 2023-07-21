import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import Layout from './layout'
import HelloWorldPage from './views/HelloWorld'

const CostumeRouter = ({}) => {

  let routes = [
    {
      path: '*',
      element: <HelloWorldPage />
    }
  ]

  return (
    <BrowserRouter>
    {
    
      <Routes>
        {
          routes.map((item) => <Route path={item.path} element={<Layout>{item.element}</Layout>} />)
        }
      </Routes>
    }
    </BrowserRouter>
  )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps ={

}

export default connect(mapStateToProps, mapDispatchToProps)(CostumeRouter)
