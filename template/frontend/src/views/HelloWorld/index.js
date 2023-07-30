import React from 'react'
import Layout from '../../layout'
import logo from '../../logo.svg'

const HelloWorldPage = () => {
  return (
    <Layout>
        <div className='w-full h-screen flex flex-col items-center justify-between p-10'>
            <h1 className='text-white text-4xl'><span className='text-selphRed'>Selph</span>-js</h1>
            <div className='w-full flex flex-col items-center'>
                <img src={logo} className='w-1/4 animate-bounce' />
                <p className='text-white'>Having a hard time to become a Full-Stack developer? With <span className='text-selphRed'>Selph</span> you only need to configure One file!</p>
            </div>
            <a href='https://www.npmjs.com/package/create-selph-app?activeTab=readme' className='text-selphRed'>View our documentation!</a>
        </div>
    </Layout>
  )
}

export default HelloWorldPage