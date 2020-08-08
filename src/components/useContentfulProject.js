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
    project: allContentfulProject(filter: {id: {eq: "b07dfa46-1286-5bda-90b4-a484e616915d"}}) {
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


