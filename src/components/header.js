import * as React from 'react'


import { useStaticQuery, graphql } from 'gatsby'
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}
export default Header
//instruction from https://willhall.uk/storybook-gatsby/
//export default {
//  title: 'Header',
  // Pass the component to allow the docs addon access to the metadata!
//  component: Header,
//};