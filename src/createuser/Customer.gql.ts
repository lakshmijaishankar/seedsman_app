import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`
  mutation createCustomer($input_1: CustomerCreateInput!) {
    createCustomerV2(input: $input_1) {
      customer {
        email
        firstname
        lastname
        date_of_birth
        created_at
      }
    }
  }
`;
