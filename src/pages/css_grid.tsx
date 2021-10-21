import React from 'react'
import { Layout } from '../components'


export default function PageA() {
  return (
    <Layout>
      <div className="spectrum-Typography">
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid"
          target="_blank"
        >
          MDN grid link
        </a>{' '}
        <br />
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids"
          target="_blank"
        >
          MDN CSS Lauout Grid link
        </a>
        <br />
        先鸽为敬
      </div>
    </Layout>
  )
}
