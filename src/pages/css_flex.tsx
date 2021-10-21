import React from 'react'
import { Layout } from '../components'

import * as styles from './css_flex.module.scss'

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
      </div>
      <div className={styles.c}>
        <div className={styles.div1}>div1</div>
        <div className={styles.div3}>div3</div>
        <div className={styles.div2}>div2</div>
      </div>
    </Layout>
  )
}
