'use client';
import Link from 'next/link';
import Image from 'next/image';
import css from './SidebarMenu.module.css';
import arrow from '@/img/arrow-down.svg';
import { useEffect, useRef, useState } from 'react';

type MenuItems = {
  id: string;
  title: string;
  path: string;
  subMenu?: MenuItems[];
};

export default function SidebarMenu({
  menuElements,
}: {
  menuElements: MenuItems[];
}) {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<Record<string, boolean>>(
    {},
  );
  const sideMenu = useRef<HTMLDivElement>(null);

  const toggleOpenSubmenu = (path: string) => {
    setIsOpenSubmenu((prew) => ({
      ...prew,
      [path]: !prew[path],
    }));
  };

  useEffect(() => {
    const handleClick = (evt: MouseEvent) => {
      if (sideMenu.current && !sideMenu.current.contains(evt.target as Node)) {
        setIsOpenSubmenu((prew) => ({
          ...prew,
          menu: false,
        }));
      }
    };

    if (isOpenSubmenu['menu']) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpenSubmenu.menu]);

  return (
    <div
      className={`${css.menuContainer} ${
        isOpenSubmenu['menu'] ? css.openMenu : ''
      }`}
      ref={sideMenu}
    >
      <button
        type="button"
        className={css.menuButton}
        onClick={() => {
          toggleOpenSubmenu('menu');
        }}
      >
        Menu
      </button>
      <nav className={css.navMenu}>
        <ul className={css.menuList}>
          {menuElements.map((menuItem) => {
            return (
              <li key={menuItem.id} className={css.menuItem}>
                <Link href={menuItem.path}>
                  <div className={css.ItemTitle}>{menuItem.title}</div>
                </Link>
                {menuItem.subMenu && (
                  <button
                    type="button"
                    aria-label="Open submenu"
                    className={`${css.submenuButton} ${
                      isOpenSubmenu[menuItem.path] ? css.rotate : ''
                    }`}
                    onClick={() => {
                      toggleOpenSubmenu(menuItem.path);
                    }}
                  >
                    <Image
                      src={arrow}
                      alt="Close toast icon"
                      className={css.arrow}
                    />
                  </button>
                )}
                {menuItem.subMenu && (
                  <ul
                    className={`${css.subMenuList}  ${
                      isOpenSubmenu[menuItem.path] ? css.hideSubmenu : ''
                    }`}
                  >
                    {menuItem.subMenu.map((subMenuItem) => {
                      return (
                        <li key={subMenuItem.id} className={css.subMenuItem}>
                          <Link href={subMenuItem.path}>
                            <div className={css.ItemTitle}>
                              {subMenuItem.title}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
