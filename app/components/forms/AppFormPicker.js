import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ name, placeholder, items, width }) {
  const { setFieldValue, errors, values, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        onItemSelect={(item) => {
          setFieldValue(name, item);
        }}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
