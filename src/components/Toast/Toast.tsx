'use client';
import { useEffect, useState } from 'react';
import css from './Toast.module.css'
import Image from 'next/image'
import closeIcon from '@/img/clear.svg'


type ToastTypes = {
    text: string,
    delay?: number,
    transition?: 'fade' | 'slide',
    enableCloseButton?: boolean
}

export default function Toast({ text = "Hello!", delay, transition = 'fade', enableCloseButton = true }: ToastTypes) {
    const [hideToast, setHideToast] = useState(false)

    useEffect(() => {
        const showToast = () => {
            setHideToast(false)
        }
        window.addEventListener('show-butiful-toast', showToast)
        return () => window.removeEventListener('show-butiful-toast', showToast)
    }, [])

    useEffect(() => {
        if (typeof delay === "number") {
            const hideToast = setTimeout(() => {
                setHideToast(true)
            }, delay)

            return () => clearTimeout(hideToast)
        }
    }, [delay])

    if (hideToast) return null

    return (
        <div className={`${css.toastContainer} ${hideToast && (transition === 'fade' ? css.fade : css.slide)}`}>
            <div className={css.wrapper}>
                {text}
            </div>
            {enableCloseButton && <button type="button" aria-label='Close toast' className={css.closeButton}><Image src={closeIcon} alt='Close toast icon' className={css.closeIcon} /></button>}
        </ div>
    )
}