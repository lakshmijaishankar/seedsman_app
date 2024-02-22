import { ChangeEvent, FormEvent } from "react";

export interface CreateCustomerComponentProps {
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputFiled: (e: ChangeEvent<HTMLInputElement>) => void;
  customerFields: CustomerFields;
}

export interface CustomerFields {
  [key: string]: string;
}
