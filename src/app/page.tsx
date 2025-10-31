'use client';

import Input from '@/components/Input/Input';
import styles from './page.module.css';
import Toast from '@/components/Toast/Toast';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';

export default function Home() {
  const menuRenderData = [
    {
      id: '1',
      title: 'Home',
      path: '/home',
      subMenu: [
        { id: '11', title: 'Hero', path: '/hero' },
        { id: '12', title: 'About', path: '/about' },
      ],
    },
    { id: '2', title: 'Gallery', path: '/gallery' },
    {
      id: '3',
      title: 'Someone',
      path: '/someone',
      subMenu: [
        { id: '13', title: 'SomeoneSub', path: '/someonesub' },
        { id: '14', title: 'SomeoneSubSecond', path: '/someonesubsecond' },
      ],
    },
    { id: '4', title: 'SomeoneElse', path: '/someoneelse' },
    { id: '5', title: 'SomeoneElseSecond', path: '/someoneelsesecond' },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Input type="text" clearable={true} />
          <Input type="text" clearable={false} />
          <Input type="password" clearable={true} />
          <Input type="password" clearable={false} />
          <div>To show Toast, click one of the buttons below</div>
          <button
            type="button"
            className={styles.showToast}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('show-butiful-toast', {
                  detail: {
                    text: 'Hello!',
                    delay: 4000,
                    enableCloseButton: true,
                    transition: 'fade',
                  },
                }),
              )
            }
          >
            Toast delay: 4000 transition: fade enableCloseButton: true
          </button>
          <button
            type="button"
            className={styles.showToast}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('show-butiful-toast1', {
                  detail: {
                    text: 'Hello!',
                    delay: 2000,
                    enableCloseButton: false,
                    transition: 'slide',
                  },
                }),
              )
            }
          >
            Toast delay: 2000 transition: slide enableCloseButton: false
          </button>
          <button
            type="button"
            className={styles.showToast}
            onClick={() =>
              window.dispatchEvent(new CustomEvent('showPropToast'))
            }
          >
            Toast delay: 1000 transition: slide enableCloseButton: false
          </button>
          <button
            type="button"
            className={styles.showToast}
            onClick={() =>
              window.dispatchEvent(new CustomEvent('showPropToast1'))
            }
          >
            Toast delay: 2000 transition: fade enableCloseButton: true
          </button>
          <button
            type="button"
            className={styles.showToast}
            onClick={() =>
              window.dispatchEvent(new CustomEvent('showPropToast2'))
            }
          >
            Toast delay: 1000 transition: slide enableCloseButton: true
          </button>
          <Toast text="" primaryData="event" eventName="show-butiful-toast" />
          <Toast text="" primaryData="event" eventName="show-butiful-toast1" />
          <Toast
            text="Hello!!"
            primaryData="props"
            eventName="showPropToast"
            delay={1000}
            enableCloseButton={false}
            transition="slide"
          />
          <Toast
            text="Hello!!"
            primaryData="props"
            eventName="showPropToast1"
            delay={2000}
            enableCloseButton={true}
            transition="fade"
          />
          <Toast
            text="Hello!!!"
            primaryData="props"
            eventName="showPropToast2"
            delay={1000}
            enableCloseButton={true}
            transition="slide"
          />
        </div>
        <SidebarMenu menuElements={menuRenderData} />
      </main>
    </div>
  );
}
