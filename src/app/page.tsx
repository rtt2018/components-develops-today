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
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('show-butiful-toast', { detail: { text: 'Hello!', delay: 5000, enableCloseButton: true } }))}>Show toast delay: 5000 transition: slide enableCloseButton: true</button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('show-butiful-toast', { detail: { text: 'Hello!', delay: 5000, enableCloseButton: false } }))}>Show toast delay: 5000 transition: slide enableCloseButton: false </button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('show-butiful-toast', { detail: { text: 'Hello!', delay: 5000, enableCloseButton: true } }))}>Show toast delay: 5000 transition: slide enableCloseButton: true</button>
        <button type="button" className={styles.showToast} onClick={() => window.dispatchEvent(new CustomEvent('show-butiful-toast', { detail: { text: 'Hello!', delay: 5000, enableCloseButton: true } }))}>Show toast delay: 5000 transition: slide enableCloseButton: true</button>
        <Toast text="Hello!" primaryData="event" />
      </main>
    </div>
  );
}
