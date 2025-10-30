/*
Виклик Тоста: через кастомний евент, у який також можна передававти налаштування для Тоста
window.dispatchEvent(new CustomEvent('event-name', { detail: { text: 'Hello!', delay: 2000, enableCloseButton: false, transition: 'slide', eventName: "show-butiful-toast1" } }))

Пропси: 
text = "Hello!", - текст повідомлення
delay, - думаю, зрозуміло
transition = 'slide', - перехід при появі і зникненні Тоста
enableCloseButton = true, - активація кнопки закриття; true - кнопка є
primaryData = 'props', - звідки брати налаштування: з пропсів, чи з евенту. З евенту беруться всі пропси, крім  eventName, primaryData
eventName = 'show-butiful-toast' - назва евенту, при якому буде показано Тост, довільне, головнге передати однакові у пропс і диспатч евенту

Потрібне покращення: демонтування з ДОМ після зникнення і перед показом
*/

'use client';
import { useEffect, useState } from 'react';
import css from './Toast.module.css'
import Image from 'next/image'
import closeIcon from '@/img/clear.svg'


type ToastTypes = {
    text: string,
    delay?: number | null,
    transition?: 'fade' | 'slide' | '',
    enableCloseButton?: boolean,
    primaryData?: 'props' | 'event' | ''
    eventName: string
}


export default function Toast({ text = "Hello!", delay, transition = 'slide', enableCloseButton = true, primaryData = 'props', eventName = 'show-butiful-toast' }: ToastTypes) {
    const [hideToast, setHideToast] = useState(true)
    const [propsData, setPropsData] = useState({
        text, delay, transition, enableCloseButton, primaryData, eventName
    })
    const handleHideToast = () => {
        setHideToast(true)
    }

    useEffect(() => {
        const showToast = (evt: Event) => {
            const customEvt = evt as CustomEvent<ToastTypes>
            if (primaryData === 'event') {
                setPropsData((prevData) => { return { ...prevData, ...customEvt.detail, eventName, primaryData } })
            }
            setHideToast(false)
        }
        window.addEventListener(eventName, showToast)
        return () => window.removeEventListener(eventName, showToast)
    }, [text,
        delay,
        transition,
        enableCloseButton,
        primaryData,
        eventName])

    useEffect(() => {
        if (typeof propsData.delay === "number") {
            const hideToast = setTimeout(() => {
                handleHideToast()
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
            {enableCloseButton && <button type="button" aria-label='Close toast' className={css.closeButton} onClick={handleHideToast}><Image src={closeIcon} alt='Close toast icon' className={css.closeIcon} /></button>}
        </ div>
    )
}