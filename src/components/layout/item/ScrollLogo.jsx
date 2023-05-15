import React, { useState, useEffect } from 'react';


import { ScrollLogoStyle } from './itemStyle/ScrollLogoStyle'



const ScrollLogo = () => {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 210) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* 彈跳 跳動的 球 */}
            <ScrollLogoStyle className={`scroll-logo${isActive ? ' up-active' : ''}`} onClick={scrollToTop}>
                <img src="" alt="btn-up" />
            </ScrollLogoStyle>
        </>

    );
};

export default ScrollLogo;