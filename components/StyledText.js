import React from "react";
import { Text } from "react-native";
import colors from "../constants/Colors";


const getFontSize = size => {
  return (size * width * (1.8 - 0.0021 * width)) / 400;
};

const title = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-bold",
            color: props.color || colors.black,
            fontSize: getFontSize(26)
          },
          props.style
        ]}
    />
);

const description = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-light",
            fontSize: getFontSize(14),
            color: colors.dark
          },
          props.style
        ]}
    />
);

const header = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-bold",
            fontSize: getFontSize(14),
            color: colors.black
          },
          props.style
        ]}
    />
);

const label = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-semiBold",
            fontSize: getFontSize(14),
            color: colors.grey
          },
          props.style
        ]}
    />
);

const labelInput = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-semiBold",
            fontSize: getFontSize(18),
            color: colors.grey,
          },
          props.style
        ]}
    />
);

const labelTitle = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-semiBold",
            fontSize: getFontSize(16),
            color: colors.grey,
            fontWeight: "bold"
          },
          props.style
        ]}
    />
);

const button = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-bold",
            fontSize: getFontSize(20),
            color: colors.white
          },
          props.style
        ]}
    />
);

const link = props => (
    <Text
        {...props}
        style={[
          {
            // fontFamily: "montserrat-bold",
            fontSize: getFontSize(18),
            color: props.color || colors.tintColor,
            textDecorationLine: 'underline'
          },
          props.style
        ]}
    />
);

export default {
  title,
  description,
  header,
  button,
  label,
  link,
  labelTitle,
  labelInput
};
