// Type definitions for react-native-retro-button
// Project: https://github.com/rcaferati/react-native-retro-button
// Definitions by: Rafael Caferati <https://github.com/rcaferati>
// TypeScript Version: 3.0.0

declare module "react-native-retro-button" {
  import React, { Component } from "react";
  import { ViewStyle } from "react-native";

  type AfterPressFn = (callback: () => void) => void;

  export interface AwesomeButtonProps {
    activityColor?: string;
    backgroundActive?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundDarker?: string;
    backgroundPlaceholder?: string;
    backgroundProgress?: string;
    backgroundShadow?: string;
    borderColor?: string;
    borderRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderLeftBottomRadius?: number;
    borderWidth?: number;
    ExtraContent?: React.ReactNode;
    disabled?: boolean;
    height?: number;
    paddingHorizontal?: number;
    progress?: boolean;
    paddingBottom?: number;
    raiseLevel?: number;
    springRelease?: boolean;
    stretch?: boolean;
    style?: ViewStyle;
    textColor?: string;
    textLineHeight?: number;
    textSize?: number;
    textFamily?: string;
    width?: number;
    onPress?: (afterPressFn?: AfterPressFn) => void;
  }

  export default class AwesomeButton extends Component<
    AwesomeButtonProps,
    {}
  > {}
}
