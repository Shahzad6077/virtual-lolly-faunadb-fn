import { gql } from "@apollo/client"

export const CREATE_VIRTUAL_LOLLY = gql`
  mutation create(
    $to: String!
    $from: String!
    $description: String!
    $fillTop: String!
    $fillCenter: String!
    $fillBottom: String!
  ) {
    createVirtualLolly(
      data: {
        to: $to
        from: $from
        description: $description
        fillTop: $fillTop
        fillCenter: $fillCenter
        fillBottom: $fillBottom
      }
    )
  }
`
