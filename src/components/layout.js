import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  textBold,
} from './amble.module.css'

import { Link } from "gatsby-theme-material-ui"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
        }
    `)

    return (
      <main className={container}>
        <br /><br />
        <Link href="/" style={{color: "black"}}><span className={textBold}>Amble </span><span>BETA</span></Link>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <p>{data.site.siteMetadata.title}</p>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    )
}

export default Layout