import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteElectron from 'vite-plugin-electron-builder';
// import viteElectron from './vite-plugin-electron';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    viteElectron({
      mainProcessFile: 'src/background.js',
      preloadDir: 'src/preload',
      builderOptions: {
        appId: 'shopeeChart',
        // productName: 'shopeeChart',
        // copyright: 'Copyright © 2021',
        directories: {
          output: 'dist_application',
          buildResources: 'build',
          app: 'dist'
        },
        files: ['**'],
        extends: null,
        asar: true,
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64'],
            },
          ],
          artifactName: '${productName} Setup ${version}.${ext}',
        },
        nsis: {
          oneClick: false,
          language: '2052',
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: "always",
          include: "build/installer.nsh"
        },
        mac: {
          target: 'dmg',
          artifactName: '${productName} Setup ${version}.${ext}',
        },
        dmg: {
          contents: [
            {
              x: 110,
              y: 150,
            },
            {
              x: 400,
              y: 150,
              type: 'link',
              path: '/Applications',
            },
          ],
          artifactName: '${productName} Setup ${version}.${ext}',
        },
      }
    })
  ]
})