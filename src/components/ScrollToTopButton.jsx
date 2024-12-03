import React from "react";
import s from './ScrollToTopButton.module.css'

export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={s.scroll}>
            <button onClick={scrollToTop}>Вверх</button>
        </div>
    )
}