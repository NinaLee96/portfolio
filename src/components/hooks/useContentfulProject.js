import { useStaticQuery, graphql } from "gatsby";

// queries for all projects from contentful

// export const useContentfulProject = () =>{
//   const data = useStaticQuery(graphql`
//   {
//     projects: allContentfulProject {
//       nodes {
//         name
//         id
//         description {
//           json
//         }
//         github
//         url
//       }
//     }
//   }
//   `)
//   return data.projects
// }
//queries for studenthub project only
//add queries for the other projects

export const useStudenthubProject = () => {
  const data = useStaticQuery(graphql `
  {
    project: allContentfulProject(filter: {id: {eq: "9a029a12-55bc-55c4-a0f8-c32c99d278b0"}}) {
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



