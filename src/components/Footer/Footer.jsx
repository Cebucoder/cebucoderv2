import React from 'react'
import './Footer.css'

function Footer() {
    return (

    <div className='footer_con'>
        <div className="temp_con">
            <p>© {new Date().getFullYear()} <strong>CebuCoder</strong>. All Rights Reserved.</p>
            <span>Built with passion, powered by creativity.</span>
        </div>
    </div>

    )
}

export default Footer
