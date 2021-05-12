import React from 'react'

import { NextPageContext } from 'next'

import database from 'infra/repositories/memory/db'

const BASE_URL = 'https://www.terminal-ibirite.com'

class Sitemap extends React.Component {
  static async getInitialProps({ res }: NextPageContext): Promise<void> {
    function createSitemap() {
      const pages: string[] = [
        '/',
        ...database.map(({ bus }) => `/linhas/${bus.name}`)
      ]

      function appendPage(page: string) {
        return ` 
          <url>
            <loc>${`${BASE_URL}${page}`}</loc>
            <changefreq>hourly</changefreq>
          </url>
          `
      }

      return `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages.map(appendPage).join('')}
        </urlset>
      `
    }

    res?.setHeader('Content-Type', 'text/xml')
    res?.write(createSitemap())
    res?.end()
  }
}

export default Sitemap
