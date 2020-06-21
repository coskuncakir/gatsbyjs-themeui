import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

const Reading = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allGoodreadsShelf(
        filter: { name: { in: ["currently-reading", "read"] } }
        sort: { order: ASC, fields: reviews___date_added }
      ) {
        shelves: nodes {
          reviews {
            book {
              id
              title
              authors {
                name
              }
              image_url
              link
              description
            }
            date_added
            read_at
          }
          name
        }
      }
    }
  `)

  return (
    <>
      {data.allGoodreadsShelf.shelves.map(shelf =>
        shelf.reviews.map(review => (
          <Card
            tag={shelf.name}
            key={review.book.id}
            title={review.book.title}
            url={review.book.link}
            img={review.book.image_url}
            author={review.book.authors[0].name}
          >
            {review.book.description}
          </Card>
        ))
      )}
    </>
  )
}

export default Reading
