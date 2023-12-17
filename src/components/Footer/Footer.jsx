import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 400){
                setShowTop(true)
            }else{
                setShowTop(false)
            }
        })
    }, [])

    function goTop(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

return (
    <section className='footer'>
        <Container fluid>
            <div className="copyright">© 2022 Corporate. All Right Reserved.</div>
            <div className="social">
                <ul>
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            {
                showTop && (<div className='go-top' onClick={goTop}></div>)
            }
        </Container>
    </section>
)
}

export default Footer
