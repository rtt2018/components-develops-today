'use client';
import css from './Toast.module.css'

type ToastTypes = {
    text: string,
    delay: number,
    transition: 'fade' | 'slide'
}

export default function Toast({ text, delay, transition }: ToastTypes) {
    return (
        <div className={css.toastContainer}>
            <div className={css.wrapper}>

            </div>
        </ div>
    )
}