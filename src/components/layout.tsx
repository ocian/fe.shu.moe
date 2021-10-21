import React, { useEffect } from 'react'

import '@spectrum-css/vars/dist/spectrum-global.css' // global variables
import '@spectrum-css/vars/dist/spectrum-medium.css' // scales medium
import '@spectrum-css/vars/dist/spectrum-light.css' // colorstops light

import '@spectrum-css/page/dist/index-vars.css'
import '@spectrum-css/typography/dist/index-vars.css'
import '@spectrum-css/icon/dist/index-vars.css'
import '@spectrum-css/button/dist/index-vars.css'
import '@spectrum-css/sidenav/dist/index-vars.css'

import { Nav } from './nav'

interface LayoutProps {}

function Layout(props: React.PropsWithChildren<LayoutProps>) {
  useEffect(() => {
    document.documentElement.classList.add(
      'spectrum',
      'spectrum--medium',
      'spectrum--light'
    )
  }, [])

  return (
    <div className="spectrum" style={{ display: 'flex' }}>
      <Nav />
      <div
        style={{
          flex: 'auto',
          height: 'calc(100vh - 16px)',
          padding: 'var(--spectrum-global-dimension-size-100)',
          background: 'var(--spectrum-global-color-static-white)',
          boxSizing: 'border-box',
          overflow: 'auto',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export { Layout }
