import { Dimensions, PixelRatio } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;

const guidelineBaseWidth = 375;

export const containerSize = (count: number, offset: number) =>
  WINDOW_WIDTH / count - offset;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

const dimensions = (
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: string
) => {
  let styles: { [key: string]: number } = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = (top: any, right: any, bottom: any, left: any) =>
  dimensions(top, right, bottom, left, "margin");

export const padding = (top: any, right: any, bottom: any, left: any) =>
  dimensions(top, right, bottom, left, "padding");
