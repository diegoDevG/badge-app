import React from 'react';
import Navbar from '../components/Navbar';

const Layout = (props) => {
    // const children = props.children
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Layout