import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const src = resolve(dist, 'index.html')
const dest = resolve(dist, '404.html')

const html = readFileSync(src, 'utf-8')
writeFileSync(dest, html)
console.log('Created dist/404.html for GitHub Pages SPA fallback')
