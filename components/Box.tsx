import { ViewThemed, ViewThemedProps } from "./Themed";
import { dimensions } from "@/styles/dimensions";

interface MyProps {}

export type BoxProps = MyProps & ViewThemedProps;

export default function Box({ children, style, ...rest }: BoxProps) {
  return (
    <ViewThemed style={[{ padding: dimensions.padding.md }, style]} {...rest}>
      {children}
    </ViewThemed>
  );
}
