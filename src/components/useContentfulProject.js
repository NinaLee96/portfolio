import { useStaticQuery, graphql } from "gatsby";

// queries for all projects from contentful

export const useContentfulProject = () =>{
  const data = useStaticQuery(graphql`
  {
    projects: allContentfulProject {
      nodes {
        name
        id
        description {
          json
        }
        image {
          id
          file {
            url
          }
        }
        github
        url
      }
    }
  }
  `)
  return data.projects
}


