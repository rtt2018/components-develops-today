'use client';
import css from './SidebarMenu.module.css';
type MenuObject = {
  [key: string]: string | number | boolean | MenuObject;
};

export default function SidebarMenu({ menuElements }: MenuObject) {
  return <div className={css.menuContainer}>{}</div>;
}
