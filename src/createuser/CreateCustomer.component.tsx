import { DatePicker } from "rsuite";
import { CreateCustomerComponentProps } from "./CreateCustomer.type";
import "rsuite/DatePicker/styles/index.css";
import "./CreateCustomer.css";

const formDetails: {
  className: string;
  id: string;
  name: string;
  placeholder: string;
  title: string;
  htmlfor: string;
  type: string;
}[] = [
  {
    className: "first_name",
    id: "firstname",
    placeholder: "First Name",
    title: "First Name",
    htmlfor: "firstname",
    name: "firstname",
    type: "text",
  },
  {
    className: "last_name",
    id: "lastname",
    placeholder: "Last Name",
    title: "Last Name",
    htmlfor: "lastname",
    name: "lastname",
    type: "text",
  },
  {
    className: "email_address",
    id: "emailaddress",
    placeholder: "Email Address",
    title: "Email Address",
    htmlfor: "emailaddress",
    name: "email",
    type: "email",
  },
  {
    className: "date_of_birth",
    id: "dob",
    placeholder: "First Name",
    title: "Date of Birth",
    htmlfor: "dob",
    name: "dateOfBirth",
    type: "date",
  },
  {
    className: "set_password",
    id: "setpassword",
    placeholder: "Set Password",
    title: "Set Password",
    htmlfor: "setpassword",
    name: "password",
    type: "password",
  },
  {
    className: "confirm_password",
    id: "confirmpassword",
    placeholder: "Confirm Password",
    title: "Confirm Password",
    htmlfor: "confirmpassword",
    name: "confirmPassword",
    type: "text",
  },
];

const CreateUserComponent = ({
  handleFormSubmit,
  handleInputFiled,
  customerFields,
}: CreateCustomerComponentProps) => {
  return (
    <>
      <form
        noValidate
        className="create_an_account_form_container"
        method="Post"
        onSubmit={handleFormSubmit}
      >
        <div className="create_an_account_form">
          {formDetails.map((form) => (
            <label htmlFor={form.htmlfor} className={`flex`} key={form.name}>
              {form.type === "date" ? (
                <DatePicker format="MM/dd/yyyy" />
              ) : (
                <input
                  type={form.type}
                  name={form.name}
                  id={form.id}
                  title={form.title}
                  placeholder={form.placeholder}
                  className={`${form.className}`}
                  autoComplete="off"
                  onChange={handleInputFiled}
                  value={customerFields[form.name] || ""}
                />
              )}
            </label>
          ))}
        </div>
        <button type="submit" className="create_user_btn">
          CREATE AN ACCOUNT
        </button>
      </form>
    </>
  );
};
export default CreateUserComponent;
