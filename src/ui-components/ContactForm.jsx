/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, Heading, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function ContactForm(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    input: {},
  };
  const [input, setInput] = React.useState(initialValues.input);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setInput(initialValues.input);
    setErrors({});
  };
  const validations = {
    "input.age": [],
    "input.birthDate": [],
    "input.email": [{ type: "Email" }],
    "input.name": [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          input,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "ContactForm")}
      {...rest}
    >
      <Heading
        level={3}
        children="Input"
        {...getOverrideProps(overrides, "input")}
      ></Heading>
      <TextField
        label="Age"
        type="number"
        step="any"
        value={input["age"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              input: { ...input, age: value },
            };
            const result = onChange(modelFields);
            value = result?.input?.age ?? value;
          }
          if (errors["input.age"]?.hasError) {
            runValidationTasks("input.age", value);
          }
          setInput({ ...input, age: value });
        }}
        onBlur={() => runValidationTasks("input.age", input["age"])}
        errorMessage={errors["input.age"]?.errorMessage}
        hasError={errors["input.age"]?.hasError}
        {...getOverrideProps(overrides, "input.age")}
      ></TextField>
      <TextField
        label="Birth date"
        type="datetime-local"
        value={input["birthDate"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              input: { ...input, birthDate: value },
            };
            const result = onChange(modelFields);
            value = result?.input?.birthDate ?? value;
          }
          if (errors["input.birthDate"]?.hasError) {
            runValidationTasks("input.birthDate", value);
          }
          setInput({ ...input, birthDate: value });
        }}
        onBlur={() => runValidationTasks("input.birthDate", input["birthDate"])}
        errorMessage={errors["input.birthDate"]?.errorMessage}
        hasError={errors["input.birthDate"]?.hasError}
        {...getOverrideProps(overrides, "input.birthDate")}
      ></TextField>
      <TextField
        label="Email"
        value={input["email"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              input: { ...input, email: value },
            };
            const result = onChange(modelFields);
            value = result?.input?.email ?? value;
          }
          if (errors["input.email"]?.hasError) {
            runValidationTasks("input.email", value);
          }
          setInput({ ...input, email: value });
        }}
        onBlur={() => runValidationTasks("input.email", input["email"])}
        errorMessage={errors["input.email"]?.errorMessage}
        hasError={errors["input.email"]?.hasError}
        {...getOverrideProps(overrides, "input.email")}
      ></TextField>
      <TextField
        label="Name"
        value={input["name"]}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              input: { ...input, name: value },
            };
            const result = onChange(modelFields);
            value = result?.input?.name ?? value;
          }
          if (errors["input.name"]?.hasError) {
            runValidationTasks("input.name", value);
          }
          setInput({ ...input, name: value });
        }}
        onBlur={() => runValidationTasks("input.name", input["name"])}
        errorMessage={errors["input.name"]?.errorMessage}
        hasError={errors["input.name"]?.hasError}
        {...getOverrideProps(overrides, "input.name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
