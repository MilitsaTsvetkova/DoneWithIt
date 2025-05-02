import * as Notifications from "expo-notifications";
import { Alert, Keyboard } from "react-native";
import * as Yup from "yup";
import messagesApi from "../api/messages";
import { AppForm, AppFormField, SubmitButton } from "./forms";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);
    if (!result.ok) {
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      },
      trigger: null,
    });
  };
  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        name="message"
        placeholder="Message..."
        multiline
        numberOfLines={3}
        maxLength={255}
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

export default ContactSellerForm;
