
import React from 'react';
import Data from '.././Myform/components/Data';
import Input from '.././Myform/components/Input';
import TextArea from '.././Myform/components/TextArea';
import Select from '.././Myform/components/Select';
import CheckBox from '.././Myform/components/CheckBox';
import Radio from '.././Myform/components/Radio';
import Button from '.././Myform/components/Button';
import Validate from '.././Myform/Validate';
import { info } from './Ccontext';

let initFormState = {
  firstname: {
    name: "firstname",
    title: "First Name",
    type: "text",
    value: "",
    placeholder: "First Name",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 4,
     
      isRequired: true,
      isAlpha: true,
      // isNumber: true
    },
  },
  Amount: {
    name: "Amount",
    title: "Amount Of Loan Required",
    type: "number",
    value: "",
    placeholder: "Amount of loan required",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      maxLength: 5 ,
      isRequired: true,
      isNumber: true,
     
    },
  },
  lastname: {
    name: "lastname",
    title: "Last Name",
    type: "text",
    value: "",
    placeholder: "Last Name",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 4,

      isRequired: true,
      isAlpha: true,
      // isNumber: true
    },
  },
  my_email: {
    type: "text",
    value: "",
    placeholder: "What is your email",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
      isEmail: true,
    },
  },

  phone: {
    name: "phone",
    title: "Phone Number",
    type: "text",
    value: "",
    placeholder: "Enter the Phone Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 10,
      maxLength: 10,
      isRequired: true,
      isNumber: true,
    },
  },

  
  age: {
    name: "age",
    title: "Age",
    type: "text",
    value: "",
    placeholder: "Age",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 1,
      maxLength: 2,
      isRequired: true,
      isNumber: true,
    },
  },

  gender: {
    name: "gender",
    title: "Gender",
    type: "radio",
    value: "",
    placeholder: "Gender",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "male", displayValue: "Male" },
      { value: "female", displayValue: "Female" },
      { value: "Others", displayValue: "Others" },
    ],
  },

  country: {
    name: "country",
    title: "country",
    type: "select",
    value: "",
    placeholder: "country",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "USA", displayValue: "USA" },
      { value: "India", displayValue: "India" },
      { value: "China", displayValue: "China" },
      { value: "Russia", displayValue: "Russia" },
    ],
  },
  State: {
    name: "State",
    title: "State",
    type: "select",
    value: "",
    placeholder: "state",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "Arunachal Pradesh", displayValue: "Arunachal Pradesh" },
      { value: "Andhra Pradesh", displayValue: "Andhra Pradesh" },
      { value: "Bihar", displayValue: "Bihar" },
      { value: "Assam", displayValue: "Assam" },
      { value: "Chattisgarh", displayValue: "Chattisgarh" },
      { value: "Goa", displayValue: "Goa" },
      { value: "Gujarat", displayValue: "Gujarat" },
      { value: "Haryana", displayValue: "Haryana" },
      { value: "Himachal Pradesh", displayValue: "Himachal Pradesh" },
      { value: "karnataka", displayValue: "karnataka" },
      { value: "Kerala", displayValue: "Kerala" },
      { value: "Madya Pradesh", displayValue: "Madya Pradesh" },
      { value: "Maharastra", displayValue: "Maharastra " },
      { value: "Orissa", displayValue: "Orissa" },
      { value: "Punjab", displayValue: "Punjab" },
      { value: "TamilNadu", displayValue: "TamilNadu" },
      { value: "Telangana", displayValue: "Telangana" },
      { value: "UP", displayValue: "UP" },
      { value: "WestBengal", displayValue: "WestBengal" },
     
    ],
  },
  EmployementType: {
    name: "EmployementType",
    title: "Employement Type",
    type: "radio",
    value: "",
    placeholder: "EmployementType",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "Salaried", displayValue: "Salaried" },
      { value: "Self-Employed", displayValue: "Employed" },
      { value: "Bussiness", displayValue: "Bussiness" },
      { value: "Others", displayValue: "Others" },
    ],
  },

  address: {
    type: "textarea",
    value: "",
    placeholder: "What is your address",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 8,
      isRequired: true,
    },
  },
  zipcode: {
    name: "zipcode",
    title: "zipcode",
    type: "text",
    value: "",
    placeholder: "zipcode",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 6,
      maxLength: 6,
      isRequired: true,
      zipcode:true,
    },
  },
  Nominee: {
    type: "select",
    value: [],
    placeholder: "Select your nominee",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,

    },
    
    options: [
      { value: "mom", displayValue: "mom" },
      { value: "father", displayValue: "father" },
      { value: "son", displayValue: "son" },
      { value: "daughter", displayValue: "daughter" },
    ],
  },
  
  LoanType: {
    name: "LoanType",
    title: "LoanType",
    type: "select",
    value: "",
    placeholder: "loantype",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "Personal", displayValue: "Personal" },
      { value: "Business", displayValue: "Business" },
      { value: "Car", displayValue: "Car" },
      { value: "House", displayValue: "House" },
      { value: "Education", displayValue: "Education" },
      { value: "Gold", displayValue: "Gold" },
    ],
  },
    
  
  BankAccountNumber: {
    name: "BankAccountNumber",
    title: "Bank Account Number",
    type: "text",
    value: "",
    placeholder: "Enter the Aadhar Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
      accountno:true,
     
    },
  },
  Salary: {
    name: "Salary",
    title: "Salary",
    type: "text",
    value: "",
    placeholder: "Enter the Salary",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 3,
      maxLength: 6,
      isRequired: true,
      isNumber: true,
    },
  },
  AadharNumber: {
    name: "AadharNumber",
    title: "Aadhar Number",
    text: 'Ex: 1234 1234 1234',
    type: "text",
    value: "",
    placeholder: "Enter the Aadhar Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
     
      isRequired: true,
      aadhar:true,
    },
  },
  PanNumber: {
    name: "PanNumber",
    title: "Pan Number",
    type: "text",
    text: 'Ex: BNZAA2318J',
    value: "",
    placeholder: "Enter the Pan Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
      pancard:true,
    },
  },
  
  termsandconditions: {
    type: "checkbox",
    value: [],
    placeholder: "Technology",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "Terms&conditions", displayValue: "Terms&conditions" },
      { value: "Privacy&Policy", displayValue: "Privacy&Policy" },
    ],
  },
};

class ApplyLoan extends React.Component {
  static contextType = info
  constructor(props) {
    super(props);
    this.state = {
      formIsValid: false,
      formControls: initFormState,
    };
  }
      

  changeHandler = (event) => {
    const name = event.target.name;
    // console.log("Name : " + name);

    const updatedControls = {
      ...this.state.formControls,
    };

    const updatedFormElement = {
      ...updatedControls[name],
    };

    let value;
    let selectedOptions;
    let newValArray;

    if (
      updatedControls[name].value instanceof Array &&
      updatedControls[name].type === "select" &&
      updatedControls[name].multiple !== undefined &&
      updatedControls[name].multiple
    ) {
      selectedOptions = event.target.selectedOptions;
      newValArray = [...selectedOptions].map((option) => option.value);
      value = newValArray;
      // console.log("MultiSelect - Value : " + value);
    } else {
      value = event.target.value;
      if (
        updatedControls[name].value instanceof Array &&
        updatedControls[name].type === "checkbox"
      ) {
        // console.log("Before Checkbox Value : " + value);
        if (updatedControls[name].value.indexOf(value) > -1) {
          newValArray = updatedControls[name].value.filter((s) => s !== value);
        } else {
          newValArray = [...updatedControls[name].value, value];
        }
        value = newValArray;
        // console.log("Checkbox Value : " + value);
      } else {
        value = event.target.value;
        // console.log("Value : " + value);
      }
    }

    updatedFormElement.value = value;
    updatedFormElement.touched = true;



    if(name === 'Salary'){
      value = event.target.value
      for(let changeAmount in updatedControls ){
          if(updatedControls[changeAmount].name === 'Amount'){
            let Amount 
              if(value>300000){
                Amount = 70000
              }
              else Amount= 25000
              updatedControls[changeAmount].value = Amount; 
              updatedControls[changeAmount].touched = true;
          }
      }
      
  }


    let ValidationResult = Validate(value, updatedFormElement.validationRules);
    // console.log(ValidationResult);
    updatedFormElement.valid = ValidationResult.valid;
    if (!updatedFormElement.valid && updatedFormElement.touched) {
      updatedFormElement.errorMsg = ValidationResult.errorMsg;
    } else {
      updatedFormElement.errorMsg = "";
    }

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].    && formIsValid;
    }





    this.setState({
      formControls: updatedControls,
      // formIsValid: true,
      formIsValid: formIsValid,
    });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const context = this.context
    console.log(context)
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
    const newForm = [...context.loan, formData]
    // console.log(newForm)
    // spread operator is coping the loan values as objects then adding form data values
    context.setLoan(newForm)
    //setting newform value into setLoan
    this.setState({
      formControls: initFormState,
      formIsValid: false,
    });

    // console.log(context.loan, "context,loan");
    // console.table(formData);
  };

  handleClearForm = () => {
    this.setState({
      formControls: initFormState,
      formIsValid: false,
    });
  };

  render() {
    return (
      <div className="centermine">
        <Input
          inputType={"text"}
          title={this.state.formControls.firstname.title}
          name={this.state.formControls.firstname.name}
          placeholder={this.state.formControls.firstname.placeholder}
          value={this.state.formControls.firstname.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.firstname.touched}
          valid={this.state.formControls.firstname.valid}
          errorMsg={this.state.formControls.firstname.errorMsg}
        />
        <Input
          inputType={"text"}
          title={this.state.formControls.lastname.title}
          name={this.state.formControls.lastname.name}
          placeholder={this.state.formControls.lastname.placeholder}
          value={this.state.formControls.lastname.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.lastname.touched}
          valid={this.state.formControls.lastname.valid}
          errorMsg={this.state.formControls.lastname.errorMsg}
        />
         <Input
          inputType={"text"}
          title={this.state.formControls.age.title}
          name={this.state.formControls.age.name}
          placeholder={this.state.formControls.age.placeholder}
          value={this.state.formControls.age.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.age.touched}
          valid={this.state.formControls.age.valid}
          errorMsg={this.state.formControls.age.errorMsg}
        />
        <Input
          inputType={"email"}
          title={"Email"}
          name={"my_email"}
          placeholder={this.state.formControls.my_email.placeholder}
          value={this.state.formControls.my_email.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.my_email.touched}
          valid={this.state.formControls.my_email.valid}
          errorMsg={this.state.formControls.my_email.errorMsg}
        />
        <Input
          inputType={"text"}
          title={this.state.formControls.phone.title}
          name={this.state.formControls.phone.name}
          placeholder={this.state.formControls.phone.placeholder}
          value={this.state.formControls.phone.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.phone.touched}
          valid={this.state.formControls.phone.valid}
          errorMsg={this.state.formControls.phone.errorMsg}
        />
        
       
        <Radio
          title={this.state.formControls.gender.title}
          name={this.state.formControls.gender.name}
          handleChange={this.changeHandler}
          value={this.state.formControls.gender.value}
          options={this.state.formControls.gender.options}
          touched={this.state.formControls.gender.touched}
          valid={this.state.formControls.gender.valid}
          errorMsg={this.state.formControls.gender.errorMsg}
        />
         <TextArea
          title={"Address"}
          name={"address"}
          placeholder={this.state.formControls.address.placeholder}
          value={this.state.formControls.address.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.address.touched}
          valid={this.state.formControls.address.valid}
          errorMsg={this.state.formControls.address.errorMsg}
        />
        <Select
          title={this.state.formControls.country.title}
          name={this.state.formControls.country.name}
          placeholder={this.state.formControls.country.placeholder}
          value={this.state.formControls.country.value}
          handleChange={this.changeHandler}
          options={this.state.formControls.country.options}
          touched={this.state.formControls.country.touched}
          valid={this.state.formControls.country.valid}
          errorMsg={this.state.formControls.country.errorMsg}
        />
        <Select
          title={this.state.formControls.State.title}
          name={this.state.formControls.State.name}
          placeholder={this.state.formControls.State.placeholder}
          value={this.state.formControls.State.value}
          handleChange={this.changeHandler}
          options={this.state.formControls.State.options}
          touched={this.state.formControls.State.touched}
          valid={this.state.formControls.State.valid}
          errorMsg={this.state.formControls.State.errorMsg}
        />
        <Input
          inputType={"text"}
          name={this.state.formControls.zipcode.name}
          title={this.state.formControls.zipcode.title}
          placeholder={this.state.formControls.zipcode.placeholder}
          value={this.state.formControls.zipcode.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.zipcode.touched}
          valid={this.state.formControls.zipcode.valid}
          errorMsg={this.state.formControls.zipcode.errorMsg}
        />
       <Select
          title={"Nominee"}
          name={"Nominee"}
          placeholder={this.state.formControls.Nominee.placeholder}
          value={this.state.formControls.Nominee.value}
          handleChange={this.changeHandler}
          options={this.state.formControls.Nominee.options}
          touched={this.state.formControls.Nominee.touched}
          valid={this.state.formControls.Nominee.valid}
          errorMsg={this.state.formControls.Nominee.errorMsg}
         
        />
        <Radio
          title={this.state.formControls.EmployementType.title}
          name={this.state.formControls.EmployementType.name}
          handleChange={this.changeHandler}
          value={this.state.formControls.EmployementType.value}
          options={this.state.formControls.EmployementType.options}
          touched={this.state.formControls.EmployementType.touched}
          valid={this.state.formControls.EmployementType.valid}
          errorMsg={this.state.formControls.EmployementType.errorMsg}
        />
        
        <Input
          inputType={"text"}
          name={this.state.formControls.BankAccountNumber.name}
          title={this.state.formControls.BankAccountNumber.title}
          placeholder={this.state.formControls.BankAccountNumber.placeholder}
          value={this.state.formControls.BankAccountNumber.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.BankAccountNumber.touched}
          valid={this.state.formControls.BankAccountNumber.valid}
          errorMsg={this.state.formControls.BankAccountNumber.errorMsg}
        />
        <Select
          title={this.state.formControls.LoanType.title}
          name={this.state.formControls.LoanType.name}
          placeholder={this.state.formControls.LoanType.placeholder}
          value={this.state.formControls.LoanType.value}
          handleChange={this.changeHandler}
          options={this.state.formControls.LoanType.options}
          touched={this.state.formControls.LoanType.touched}
          valid={this.state.formControls.LoanType.valid}
          errorMsg={this.state.formControls.LoanType.errorMsg}
        />
        <Input
          inputType={"text"}
          name={this.state.formControls.Salary.name}
          title={this.state.formControls.Salary.title}
          placeholder={this.state.formControls.Salary.placeholder}
          value={this.state.formControls.Salary.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.Salary.touched}
          valid={this.state.formControls.Salary.valid}
          errorMsg={this.state.formControls.Salary.errorMsg}
        />
        <Input
          inputType={"text"}
          name={this.state.formControls.PanNumber.name}
          title={this.state.formControls.PanNumber.title}
          placeholder={this.state.formControls.PanNumber.placeholder}
          value={this.state.formControls.PanNumber.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.PanNumber.touched}
          valid={this.state.formControls.PanNumber.valid}
          errorMsg={this.state.formControls.PanNumber.errorMsg}
        />
        <Input
          inputType={"text"}
          name={this.state.formControls.AadharNumber.name}
          title={this.state.formControls.AadharNumber.title}
          placeholder={this.state.formControls.AadharNumber.placeholder}
          value={this.state.formControls.AadharNumber.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.AadharNumber.touched}
          valid={this.state.formControls.AadharNumber.valid}
          errorMsg={this.state.formControls.AadharNumber.errorMsg}
        />
        <Input
          inputType={"text"}
          title={this.state.formControls.Amount.title}
          name={this.state.formControls.Amount.name}
          placeholder={this.state.formControls.Amount.placeholder}
          value={this.state.formControls.Amount.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.Amount.touched}
          valid={this.state.formControls.Amount.valid}
          errorMsg={this.state.formControls.Amount.errorMsg}
        />
        <CheckBox
          title={"Company Terms"}
          name={"termsandconditions"}
          handleChange={this.changeHandler}
          value={this.state.formControls.termsandconditions.value}
          options={this.state.formControls.termsandconditions.options}
          touched={this.state.formControls.termsandconditions.touched}
          valid={this.state.formControls.termsandconditions.valid}
          errorMsg={this.state.formControls.termsandconditions.errorMsg}
        />
        
        ̥{" "}
        <Button
          action={this.formSubmitHandler}
          type={"primary"}
          title={"Apply"}
          style={buttonStyle}
          disabled={!this.state.formIsValid}
        />
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
      </div>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px",
};

export default ApplyLoan;
