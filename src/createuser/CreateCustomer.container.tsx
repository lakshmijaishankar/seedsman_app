import { useMutation } from "@apollo/client";
import CreateUserComponent from "./CreateCustomer.component";
import { CREATE_CUSTOMER } from "./Customer.gql";
import React, { useState } from "react";
import { CustomerFields } from "./CreateCustomer.type";

type CreateCustomerMutationField = {
  input_1: {
    firstname: string;
    lastname: string;
    email: string;
    date_of_birth: string;
    is_subscribed: boolean;
    allow_remote_shopping_assistance: boolean;
    password: string;
  };
};

const CreateUserContainer = () => {
  const [customerField, setCustomerField] = useState<{ [key: string]: string }>(
    {} as CustomerFields
  );
  const [customerMutation] = useMutation<unknown, CreateCustomerMutationField>(
    CREATE_CUSTOMER
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    delete customerField["confirmPassword"];

    customerMutation({
      variables: {
        input_1: {
          firstname: customerField["firstname"],
          lastname: customerField["lastname"],
          email: customerField["email"],
          password: customerField["password"],
          is_subscribed: false,
          date_of_birth: "12/12/1948",
          allow_remote_shopping_assistance: false,
        },
      },
    });
  };

  const handleInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCustomerField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CreateUserComponent
      handleFormSubmit={handleFormSubmit}
      handleInputFiled={handleInputField}
      customerFields={{ ...customerField }}
    />
  );
};

export default CreateUserContainer;
