import * as React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';
import { Link } from "gatsby-theme-material-ui"

import { 
  title,
  textBold,
  link,
  root,
  ul,
  gridRoot,
} from '../components/amble.module.css'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "epub" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)

  return (  
    <Layout pageTitle="">
      <p className={title}>Amble is books with friends.</p>
      <p>Enjoy inline comments from the community that inspires you: authors, friends, classmates, and the world.</p>
      <br /><br /><br />
      <div className={gridRoot}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            Choose Books BETA <br /><br />
            <List className={root} subheader={<li />}>
              <ul className={ul}>
              {data.allFile.edges.map((file, index) => (
                <ListItem key={`item-${index}-${file.node.name}`}>
                  <AssignmentIcon />
                  <Link href={`/booktoread?name=${file.node.name}&pub=${file.node.publicURL}`} className={link} > {` ${file.node.name}`} </Link>
                </ListItem>
              ))}
              </ul>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            Choose Thought Leader To Hear BETA <br /><br />
            <List className={root} subheader={<li />}>
              <ul className={ul}>
              {data.allFile.edges.map((file, index) => (
                <ListItem key={`item-${index}-${file.node.name}`}>
                  {/* <AssignmentIcon /> */}
                  {/* <Link href={`/booktoread?item=${file.node.name}`} className={link} > {`Item ${file.node.name}`} </Link> */}
                </ListItem>
              ))}
              </ul>
            </List>
          </Grid>
        </Grid>
      </div>
      <br /><br />
      <p className={textBold}>About me</p>
      <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
    </Layout>
 
  )
}

export default IndexPage
