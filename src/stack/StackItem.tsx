import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  FlexStyle,
  FlexAlignType,
} from 'react-native';

export type directionType = 'vertical' | 'horizontal';
export type gapType = number | string;

interface StackItemProps {
  inline?: boolean;
  reverse?: boolean;
  // align?: FlexAlignType;
  gap?: gapType;
  style?: StyleProp<ViewStyle>;
}

export const StackItem = React.forwardRef<View, StackItemProps>(
  (
    {inline = false, reverse = false, gap = 0, style, children, ...props},
    ref,
  ) => {
    return (
      <View
        style={[
          {
            // justifyContent: justify,
            // alignItems: align,
          },
          ...(Array.isArray(style) ? style : [style]),
        ]}>
        {children}
      </View>
    );
  },
);
