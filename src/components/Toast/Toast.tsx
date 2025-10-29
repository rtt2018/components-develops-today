'use client';
import { useEffect, useState } from 'react';
import css from './Toast.module.css'
import Image from 'next/image'
import closeIcon from '@/img/clear.svg'


type ToastTypes = {
    text: string,
    delay?: number,
    transition?: 'fade' | 'slide',
    enableCloseButton?: boolean,
    primaryData?: 'props' | 'event'
}

export default function Toast({ text = "Hello!", delay, transition = 'fade', enableCloseButton = true, primaryData = 'props'
}: ToastTypes) {
    const [hideToast, setHideToast] = useState(true)
    const [propsData, setPropsData] = useState<ToastTypes>({
        text,
        delay,
        transition,
        enableCloseButton,
        primaryData
    })

    useEffect(() => {
        const showToast = (evt: Event) => {
            const customEvt = evt as CustomEvent<ToastTypes>
            if (primaryData === 'event') {
                setPropsData((prevData) => { return { ...prevData, ...customEvt.detail } })
            }
            setHideToast(false)
        }
        window.addEventListener('show-butiful-toast', showToast)
        return () => window.removeEventListener('show-butiful-toast', showToast)
    }, [primaryData])

    useEffect(() => {
        if (typeof propsData.delay === "number") {
            const hideToast = setTimeout(() => {
                setHideToast(true)
            }, propsData.delay)

            return () => clearTimeout(hideToast)
        }
    }, [propsData.delay, hideToast])

    return (
        <div className={`${css.toastContainer} ${hideToast ? (propsData.transition === 'fade' ? css.fade : css.slide) : ''}`}>
            <div className={css.wrapper}>
                <div className={css.messageText}>
                    {propsData.text}
                </div>
            </div>
            {enableCloseButton && <button type="button" aria-label='Close toast' className={css.closeButton} onClick={() => { setHideToast(true) }}><Image src={closeIcon} alt='Close toast icon' className={css.closeIcon} /></button>}
        </ div>
    )
}