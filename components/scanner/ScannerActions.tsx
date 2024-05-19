import { useContext } from "react";
import { dimensions } from "@/styles/dimensions";
import { TextThemed, ViewThemed } from "../Themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "../Themed/Divider";
import ThemeContext from "@/styles";
import { useTranslation } from "react-i18next";

interface MyProps {
  handleUploadImage: Function;
  handleFacing: Function;
}

export function ScannerActions({ handleUploadImage, handleFacing }: MyProps) {
  const { themeColors } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <ViewThemed
      style={[
        styles.camActions,
        { borderColor: themeColors.highlightedColored },
      ]}
    >
      <TouchableOpacity
        onPress={() => handleUploadImage()}
        style={styles.camAction}
      >
        <View style={styles.camActionBody}>
          <TextThemed style={styles.camActionBodyText}>
            {t("SCANNER_ACTIONS_Search in")}
          </TextThemed>
          <View style={styles.camActionContent}>
            <Feather
              style={{ marginRight: dimensions.margin.sm }}
              name="image"
              size={22}
              color={themeColors.highlightedColored}
            />
            <TextThemed
              bold
              color="highlightedColored"
              style={styles.camActionContentText}
            >
              {t("SCANNER_ACTIONS_Image")}
            </TextThemed>
          </View>
        </View>
      </TouchableOpacity>

      <Divider size="md" mode="vertical" color="highlightedColored" />

      <TouchableOpacity onPress={() => handleFacing()} style={styles.camAction}>
        <View style={styles.camActionBody}>
          <TextThemed style={styles.camActionBodyText}>
            {t("SCANNER_ACTIONS_Invert the")}
          </TextThemed>
          <View style={styles.camActionContent}>
            <MaterialCommunityIcons
              style={{ marginRight: dimensions.margin.sm }}
              name="camera-retake-outline"
              size={26}
              color={themeColors.highlightedColored}
            />
            <TextThemed
              color="highlightedColored"
              bold
              style={styles.camActionContentText}
            >
              {t("SCANNER_ACTIONS_Camera")}
            </TextThemed>
          </View>
        </View>
      </TouchableOpacity>
    </ViewThemed>
  );
}

const styles = StyleSheet.create({
  camActions: {
    position: "absolute",
    left: 25,
    right: 25,
    bottom: "6%",
    height: 75,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: dimensions.radius.lg,
    borderWidth: dimensions.border.md,
  },
  camAction: {
    display: "flex",
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  camActionBody: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  camActionContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  camActionBodyText: {
    fontSize: 10,
  },
  camActionContentText: {
    fontSize: 16,
  },
});