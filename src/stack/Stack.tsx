import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  FlexAlignType,
  FlexStyle,
} from 'react-native';

export type directionType = 'vertical' | 'horizontal';
export type gapType = number | string;

export interface StackProps {
  inline?: boolean;
  reverse?: boolean;
  justify?: FlexStyle['justifyContent'];
  align?: FlexAlignType;
  direction?: directionType;
  gap?: gapType;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  flex?: number;
  onMessage?(...args: any): void;
}

const FLEX_DIRECTION = {
  horizontal: 'row',
  vertical: 'column',
};

const StackWrapper = React.forwardRef<View, StackProps>(function Stack(
  {
    inline = false,
    reverse = false,
    direction = 'horizontal',
    justify = 'flex-start',
    align,
    gap = 0,
    flex = 1,
    style,
    children,
    onMessage,
    ...props
  },
  ref,
) {
  console.log('children', children);
  const flexDirection = (FLEX_DIRECTION[direction] +
    (reverse ? '-reverse' : '')) as FlexStyle['flexDirection'];
  console.log('flexDirection', flexDirection);

  React.useEffect(() => {
    if (onMessage) {
      onMessage(children);
    }
  }, [children, onMessage]);
  return (
    <View
      ref={ref}
      style={[
        {
          flexDirection,
          justifyContent: justify,
          alignItems: align,
          // backgroundColor: '',
          // flex,
        },
        ...(Array.isArray(style) ? style : [style]),
      ]}>
      <View style={{backgroundColor: '#f73', width: 100, height: 50}} />
      {children}
    </View>
  );
});

StackWrapper.displayName = 'Stack';

export {StackWrapper};
// export default {Stack: StackWrapper};
