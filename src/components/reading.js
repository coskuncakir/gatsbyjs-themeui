import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Reading = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGoodreadsReview {
        nodes {
          link
          book {
            title
            authors {
              name
            }
            uri
            image_url
            publisher
            ratings_count
            isbn
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allGoodreadsReview.nodes.map(node => (
        <a href={node.link} target="_blank" rel="noopener noreferrer">
          <Img fixed={node.book.image_url} />
          {node.book.title}
        </a>
      ))}
    </>
  )
}

export default Reading
