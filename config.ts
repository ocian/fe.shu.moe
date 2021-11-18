import { pagePaths } from './src/config'

const config = {
  favicons: {
    appName: 'my-app',
    appDescription: 'My awesome App',
    developerName: 'Me',
    developerURL: null, // prevent retrieving from the nearest package.json
    background: '#ddd',
    theme_color: '#333',
    icons: {
      coast: false,
      yandex: false,
    },
  },
  pages: pagePaths,
  publicPath: '/',
  assetsPrefix: '_assets/',
}

export default config
