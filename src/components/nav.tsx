import React from 'react'

import { menus } from '../constants'

interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <nav
      style={{
        width: 100,
        padding: 'var(--spectrum-global-dimension-size-100)',
      }}
    >
      <ul className="spectrum-SideNav">
        {menus.map((menu) => (
          <li className="spectrum-SideNav-item" key={menu.link}>
            <a href={menu.link} className="spectrum-SideNav-itemLink">
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
