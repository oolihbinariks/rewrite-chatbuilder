import React from 'react'
import Header from '../components/sharedComponents/Header/Header'
import PropTypes from 'prop-types'
import Footer from '../components/sharedComponents/Footer/Footer'

const Main = ({children}) => {
    return (
        <div className='main-container'>
            <Header />
            <main>
                {/* <div className="wrapperCustom"> */}
                    {children}
                {/* </div> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

Main.propTypes = {

}

export default Main
