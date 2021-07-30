import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subcription">
                <p className="footer-subcription-heading">
                    Join the Adventure newsletter to receive our best 
                    vacation deals
                </p>

                <p className="footer-subcription-text">
                    You can unsubcribe at any time
                </p>

                <div className="input-areas">
                    <form>
                        <input 
                        type="email" 
                        name="email" 
                        className="footer-input"
                        placeholder="Your email"
                        />                        
                    </form>
                    <Button buttonStyle="btn--outline">Subcribe</Button> 
                </div>

            </section>
        </div>
    )
}

export default Footer 