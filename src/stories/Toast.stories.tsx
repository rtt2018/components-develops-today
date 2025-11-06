import Toast from '@/components/Toast/Toast';
import type { Meta, StoryObj } from '@storybook/nextjs';
// import { fn } from "storybook/test";
import styles from './Toast.module.css';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Components/Toast',
  args: {
    text: 'Hello!',
    delay: 5000,
    transition: 'fade',
    enableCloseButton: false,
    primaryData: 'props',
    eventName: 'show-butiful-toast',
  },
  render: (args) => (
    <div>
      <button
        className={styles.showToastButton}
        onClick={() => {
          window.dispatchEvent(new CustomEvent(args.eventName));
        }}
      >
        Show Toast
      </button>
      <Toast {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultProps: Story = {
  args: {
    text: "Hello, world",
    delay: 1000,
    transition: "slide",
    enableCloseButton: true,
    primaryData: 'props',
    eventName: 'show-butiful-toast',
  },
  render: (args) => (
    <div>
      <button
        className={styles.showToastButton}
        onClick={() => {
          window.dispatchEvent(new CustomEvent(args.eventName));
        }}
      >
        Show Toast
      </button>
      <Toast {...args} />
    </div>
  ),
};

export const SimpleToast: Story = {
  args: {
    text: 'Hello!',
    delay: 2000,
    transition: 'slide',
    enableCloseButton: false,
    primaryData: 'props',
    eventName: 'show-butiful-toast1',
  },
  render: (args) => (
    <div>
      <button
        className={styles.showToastButton}
        onClick={() => {
          window.dispatchEvent(new CustomEvent(args.eventName));
        }}
      >
        Show Toast
      </button>
      <Toast {...args} />
    </div>
  ),
};

export const SimpleCloseToast: Story = {
  args: {
    text: 'Hello!',
    delay: 2000,
    transition: 'slide',
    enableCloseButton: true,
    primaryData: 'props',
    eventName: 'show-butiful-toast1',
  },
  render: (args) => (
    <div>
      <button
        className={styles.showToastButton}
        onClick={() => {
          window.dispatchEvent(new CustomEvent(args.eventName));
        }}
      >
        Show Toast
      </button>
      <Toast {...args} />
    </div>
  ),
};

export const SimpleSlideClose: Story = {
  args: {
    text: 'Hello!',
    delay: 2000,
    transition: 'slide',
    enableCloseButton: true,
    primaryData: 'props',
    eventName: 'show-butiful-toast1',
  },
  render: (args) => (
    <div>
      <button
        className={styles.showToastButton}
        onClick={() => {
          window.dispatchEvent(new CustomEvent(args.eventName));
        }}
      >
        Show Toast
      </button>
      <Toast {...args} />
    </div>
  ),
};

export const SimpleSlide: Story = {
  args: {
    text: 'Hello!',
    delay: 2000,
    transition: 'slide',
    enableCloseButton: false,
    primaryData: 'event',
    eventName: 'show-butiful-toast1',
  },
  render: (args) => (
    <div>
      <button
        className={styles.showToastButton}
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
        Show Toast
      </button>
      <Toast {...args} />
    </div>
  ),
};
