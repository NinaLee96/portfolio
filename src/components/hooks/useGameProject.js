import { useStaticQuery, graphql } from "gatsby";

export const use2dGameProject = () => {
  const data = useStaticQuery(graphql `
  {
    project: allContentfulProject(filter: {id: {eq: "3ef83b0b-d935-530a-a8ce-be8275cadffa"}}) {
      nodes {
        name
        id
        github
        url
        description {
          json
        }
      }
    }
  }
  `)

  return data.project;
}