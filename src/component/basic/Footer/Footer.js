import React from 'react'
import "./Footer.css"


const footer = () => {
  return (
    <>
         
        {/* footer */}
        <section>
            <div className='footer'>
                <div className='section__padding'>
                    <div className='sb__footer-links_div'>
                        <h4>ABOUT AWSOME</h4>
                        <a href='/emplyer'>
                            <p>Employer</p>
                        </a>
                        <a href='/emplyer'>
                            <p>Feedback</p>
                        </a>
                        <a href='/emplyer'>
                            <p>Report Fraud</p>
                        </a>
                        <a href='/emplyer'>
                            <p>contact us</p>
                        </a>
                        <a href='/emplyer'>
                            <p>Work with us</p>
                        </a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>Resource</h4>
                        <a href='/resorce'>
                            <p>Resource Centre</p>
                        </a>

                        <a href='/resource'>
                            <p>Partner With us</p>
                        </a>
                        <a href='/resource'>
                            <p>App for you</p>
                        </a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>Learn More</h4>
                        <a href='/about'>
                            <p>Privacy</p>
                        </a>
                        <a href='/about'>
                            <p>Security</p>
                        </a>
                        <a href='/about'>
                            <p>Terms</p>
                        </a>
                        <a href='/contact'>
                            <p>Sitemap</p>
                        </a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>Social Media</h4>
                        <div className='socialmedia'>
                            <a href='#'>facebook</a>
                            <a href='#'>Instagram</a>
                            <a href='#'>Youtube</a>
                        </div>
                       
                    </div>
                </div>


                <hr></hr>
                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            {/* @{new date().getfullyear()}  codeinn.All right reserved */}
                        </p>
                        <div className='sb_footer-below-links'>
                            <a href='#'>Terms And Condition</a>
                            <a href='#'>Privacy</a>
                            <a href='#'>Security</a>
                            <a href='#'>Cookies</a>

                        </div>
                    </div>

                </div>
                

            </div>
        </section>
 
    </>
  )
}

export default footer