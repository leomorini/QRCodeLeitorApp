import { createContext, PropsWithChildren, useContext, useState } from "react";
import AwesomeAlert from "react-native-awesome-alerts";
import { dimensions } from "@/styles/dimensions";
import ThemeContext from "@/styles";

export interface AlertContextType {
  show: Function;
  close: Function;
}

export interface AlertOptionsType {
  title: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  onClose?: Function;
  onConfirmPressed?: Function;
  closeOnTouchOutside?: boolean;
  closeOnHardwareBackPress?: boolean;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
}

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);

export const AlertNotificationRoot = ({ children }: PropsWithChildren) => {
  const defaultOptions = {
    title: "Titulo",
    message: "Mensagem",
    cancelText: "",
    confirmText: "Fechar",
    onConfirmPressed: () => false,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AlertOptionsType>(defaultOptions);

  const { themeColors } = useContext(ThemeContext);
  const stylesProps = getStylesProps(themeColors);

  function show(newOptions: AlertOptionsType) {
    setNewOptions(newOptions);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function onDismiss() {
    close();
    
    if (typeof options.onClose === "function") {
      options.onClose();
    }

    setNewOptions(defaultOptions);
  }

  function setNewOptions(newOptions: AlertOptionsType) {
    const merged = {
      ...options,
      ...newOptions,
    };

    if (merged.message.length > 200) {
      merged.message = merged.message.substring(0, 200) + "...";
    }

    setOptions(merged);
  }

  function handleConfirm() {
    if (typeof options.onConfirmPressed === "function") {
      options.onConfirmPressed();
    }

    close();
  }

  return (
    <AlertContext.Provider value={{ show, close }}>
      <>
        {children}

        <AwesomeAlert
          show={isOpen}
          showProgress={false}
          title={options.title}
          message={options.message}
          closeOnTouchOutside={options.closeOnTouchOutside || true}
          closeOnHardwareBackPress={options.closeOnHardwareBackPress || true}
          showCancelButton={false}
          showConfirmButton={options.showConfirmButton || true}
          cancelText={options.cancelText || ""}
          confirmText={options.confirmText || ""}
          onConfirmPressed={handleConfirm}
          onDismiss={onDismiss}
          {...stylesProps}
        />
      </>
    </AlertContext.Provider>
  );
};

// Styles
interface AlertAwesomeStylesProps {
  alertContainerStyle?: object;
  overlayStyle?: object;
  contentContainerStyle?: object;
  contentStyle?: object;
  titleStyle?: object;
  messageStyle?: object;
  actionContainerStyle?: object;
  cancelButtonColor?: string;
  cancelButtonTextStyle?: object;
  cancelButtonStyle?: object;
  confirmButtonColor?: string;
  confirmButtonTextStyle?: object;
  confirmButtonStyle?: object;
}

function getStylesProps(themeColors) {

  const stylesProps: AlertAwesomeStylesProps = {
    contentContainerStyle: {
      backgroundColor: themeColors.foreground2,
      borderWidth: dimensions.border.md,
      borderColor: themeColors.border,
      borderRadius: dimensions.radius.xl,
      minWidth: "80%",
    },
    actionContainerStyle: {
      marginTop: dimensions.margin.md,
    },
    titleStyle: {
      fontFamily: "InterBold",
      color: themeColors.text,
      fontSize: 20,
    },
    messageStyle: {
      fontFamily: "InterRegular",
      color: themeColors.text,
      fontSize: 14,
    },
    cancelButtonStyle: {
      backgroundColor: "transparent",
      borderWidth: dimensions.border.md,
      borderColor: themeColors.highlighted,
      borderRadius: dimensions.radius.md,
      fontFamily: "InterRegular",
    },
    cancelButtonTextStyle: {
      color: themeColors.highlighted,
    },
    confirmButtonStyle: {
      alignItems: "center",
      width: "100%",
      backgroundColor: themeColors.highlightedColored,
      paddingVertical: dimensions.padding.md,
      borderRadius: dimensions.radius.md,
    },
    confirmButtonTextStyle: {
      color: themeColors.text,
      fontFamily: "InterBold",
      fontSize: 18,
    },
  };

  return stylesProps;
}
