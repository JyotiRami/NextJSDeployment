import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
  query GetAllUser {
    getAllUser {
        id
        userName
        email
        contactNo
        isValid
        departmentId {
            id
            departmentName
        }
    }
  }
`;
