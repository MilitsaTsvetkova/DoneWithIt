import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const ref = useRef(null);

  const scrollToEnd = () => {
    ref.current.scrollToEnd({ animated: true });
  };
  return (
    <View>
      <ScrollView horizontal ref={ref} onContentSizeChange={scrollToEnd}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                key={uri}
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
