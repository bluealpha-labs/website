<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          :root {
            --color-primary: #003D7A;
            --color-accent: #00A6FB;
            --color-text: #1a1a1a;
            --color-text-light: #666;
            --color-bg: #ffffff;
            --color-bg-alt: #f9fafb;
            --color-border: #e5e7eb;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: var(--color-text);
            background: var(--color-bg);
          }
          
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          
          header {
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 2rem;
            margin-bottom: 2rem;
          }
          
          h1 {
            font-size: 2rem;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
          }
          
          .feed-description {
            color: var(--color-text-light);
            font-size: 1.1rem;
          }
          
          .subscribe-info {
            background: var(--color-bg-alt);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 2rem;
          }
          
          .subscribe-info h2 {
            font-size: 1.2rem;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
          }
          
          .subscribe-info p {
            color: var(--color-text-light);
            margin-bottom: 0.5rem;
          }
          
          .subscribe-info code {
            background: var(--color-bg);
            padding: 0.5rem;
            border-radius: 4px;
            display: block;
            font-family: monospace;
            font-size: 0.9rem;
            color: var(--color-accent);
            word-break: break-all;
          }
          
          .items {
            list-style: none;
          }
          
          .item {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            transition: box-shadow 0.2s;
          }
          
          .item:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .item-title {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
          }
          
          .item-title a {
            color: var(--color-primary);
            text-decoration: none;
          }
          
          .item-title a:hover {
            color: var(--color-accent);
            text-decoration: underline;
          }
          
          .item-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 0.75rem;
            font-size: 0.9rem;
            color: var(--color-text-light);
          }
          
          .item-description {
            color: var(--color-text);
            line-height: 1.7;
          }
          
          .item-categories {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-top: 0.75rem;
          }
          
          .category {
            background: var(--color-bg-alt);
            border: 1px solid var(--color-border);
            border-radius: 4px;
            padding: 0.25rem 0.75rem;
            font-size: 0.85rem;
            color: var(--color-text-light);
          }
          
          .featured {
            display: inline-block;
            background: var(--color-accent);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-size: 0.85rem;
            margin-left: 0.5rem;
          }
          
          footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--color-border);
            text-align: center;
            color: var(--color-text-light);
          }
          
          footer a {
            color: var(--color-accent);
            text-decoration: none;
          }
          
          footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p class="feed-description"><xsl:value-of select="/rss/channel/description"/></p>
          </header>
          
          <div class="subscribe-info">
            <h2>Subscribe to this RSS Feed</h2>
            <p>Copy and paste the URL below into your RSS reader:</p>
            <code><xsl:value-of select="/rss/channel/link"/>rss.xml</code>
          </div>
          
          <ul class="items">
            <xsl:for-each select="/rss/channel/item">
              <li class="item">
                <h3 class="item-title">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                  <xsl:if test="featured = 'true'">
                    <span class="featured">Featured</span>
                  </xsl:if>
                </h3>
                <div class="item-meta">
                  <xsl:if test="company">
                    <span>Company: <strong><xsl:value-of select="company"/></strong></span>
                  </xsl:if>
                  <xsl:if test="pubDate">
                    <span>Published: <xsl:value-of select="substring(pubDate, 1, 16)"/></span>
                  </xsl:if>
                </div>
                <p class="item-description">
                  <xsl:value-of select="description"/>
                </p>
                <xsl:if test="category">
                  <div class="item-categories">
                    <xsl:for-each select="category">
                      <span class="category"><xsl:value-of select="."/></span>
                    </xsl:for-each>
                  </div>
                </xsl:if>
              </li>
            </xsl:for-each>
          </ul>
          
          <footer>
            <p>This is an RSS feed for <a href="/">BlueAlpha</a> case studies.</p>
            <p>Visit our <a href="/case-studies">Case Studies</a> page to learn more.</p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>