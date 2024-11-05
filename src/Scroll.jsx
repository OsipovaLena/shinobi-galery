import React from "react";
import './Scroll.css'

export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="scroll">
            <button onClick={scrollToTop}>Вверх</button>
        </div>
    )
}