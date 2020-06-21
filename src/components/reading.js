import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

const Reading = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGoodreadsReview(limit: 10) {
        pageInfo {
          perPage
          totalCount
          pageCount
          itemCount
          hasPreviousPage
          hasNextPage
          currentPage
        }
        nodes {
          link
          book {
            title
            authors {
              name
            }
            uri
            image_url
            description
            large_image_url
            publisher
            ratings_count
            isbn
            link
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allGoodreadsReview.nodes.map(node => (
        <Card
          title={node.book.title}
          url={node.book.link}
          img={node.book.image_url}
          author={node.book.authors[0].name}
        >
          {node.book.description}
        </Card>
      ))}
    </>
  )
}

export default Reading
