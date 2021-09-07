import React, { useState } from 'react';
import './ScrollButton.css';
import buttonImage from '../images/up_button.jpg';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) { setVisible(true) }
        else if (scrolled <= 100) { setVisible(false) }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */});
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        // <Button>
        //     <FaArrowCircleUp onClick={scrollToTop}
        //         style={{ display: visible ? 'inline' : 'none' }} />
        // </Button>

        <button className="btnContainer" onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}>
            <img src={buttonImage} alt="button" className="btnImage" />
        </button>
    );
}

export default ScrollButton;