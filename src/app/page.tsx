'use client';

import Input from "@/components/Input/Input";
import styles from "./page.module.css";
import Toast from "@/components/Toast/Toast";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Input type="text" clearable={true} />
        <Input type="text" clearable={false} />
        <Input type="password" clearable={true} />
        <Input type="password" clearable={false} />

        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('show-butiful-toast', { detail: { text: 'Hello!', delay: 4000, enableCloseButton: true, transition: 'fade', eventName: "show-butiful-toast" } }))}>Show toast delay: 5000 transition: fade enableCloseButton: true</button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('show-butiful-toast1', { detail: { text: 'Hello!', delay: 2000, enableCloseButton: false, transition: 'slide', eventName: "show-butiful-toast1" } }))}>Show toast delay: 2000 transition: slide enableCloseButton: false</button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('showPropToast', { detail: { text: 'Hello!', delay: 3000, enableCloseButton: false, eventName: "showPropToast" } }))}>Show toast delay: 3000 transition: slide enableCloseButton: false </button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('showPropToast1', { detail: { text: 'Hello!', delay: 5000, enableCloseButton: true, transition: 'fade' } }))}>Show toast delay: 5000 transition: slide enableCloseButton: true</button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('showPropToast2', { detail: { text: 'Hello!', delay: 5000, enableCloseButton: true, transition: 'fade' } }))}>Show toast delay: 5000 transition: slide enableCloseButton: true</button>

        <Toast text="Hello!" primaryData="event" eventName="show-butiful-toast" />
        <Toast text="Hello, event!" primaryData="event" eventName="show-butiful-toast1" enableCloseButton={false} />

        <Toast text="Hello!!" primaryData="props" eventName="showPropToast" delay={1000} enableCloseButton={false} transition='slide' />
        <Toast text="Hello!!" primaryData="props" eventName="showPropToast1" delay={2000} enableCloseButton={true} transition='fade' />
        <Toast text="Hello!!!" primaryData="props" eventName="showPropToast2" delay={1000} enableCloseButton={false} transition='slide' />

      </main>
    </div>
  );
}
