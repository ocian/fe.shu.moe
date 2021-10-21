import React from 'react'
import { Layout } from '../components'

export default function PageA() {
  return (
    <Layout>
      <div className="spectrum-Typography">
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex"
          target="_blank"
        >
          MDN flex link
        </a>{' '}
        <br />
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox"
          target="_blank"
        >
          MDN Flexbox link
        </a>
        <br />
        内容嘛，下次再说
      </div>
    </Layout>
  )
}
