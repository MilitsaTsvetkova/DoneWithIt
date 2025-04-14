import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  name,
  placeholder,
  items,
  width,
  numberOfColumns,
  PickerItemComponent,
}) {
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
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
