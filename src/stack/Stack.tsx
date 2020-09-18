import React from 'react';
import {
  View,
  StyleProp,
  StyleSheet,
  ViewStyle,
  FlexAlignType,
  FlexStyle,
  ScrollView,
} from 'react-native';

export type directionType = 'vertical' | 'horizontal';
export type gapType = number;

export interface StackProps {
  inline?: boolean;
  reverse?: boolean;
  justify?: FlexStyle['justifyContent'];
  align?: FlexAlignType;
  direction?: directionType;
  gap?: gapType;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  // flex?: number;
  scroll?: boolean;
}

const FLEX_DIRECTION = {
  horizontal: 'row',
  vertical: 'column',
};

const Stack = React.forwardRef<View, StackProps>(function Stack(
  {
    reverse = false,
    direction = 'horizontal',
    justify = 'flex-start',
    align,
    gap = 0,
    containerStyle,
    children,
    ...props
  },
  ref,
) {
  const flexDirection = React.useMemo(
    () =>
      (FLEX_DIRECTION[direction] +
        (reverse ? '-reverse' : '')) as FlexStyle['flexDirection'],
    [direction, reverse],
  );

  const renderChildren = React.useMemo(() => {
    if (React.Children.count(children) === 0) {
      return null;
    }
    if (React.Children.count(children) === 1) {
      return children as JSX.Element;
    }

    const childCount = React.Children.count(children);
    return React.Children.map(children, (_childItem, index) => {
      const childItem = _childItem as JSX.Element;

      const last = childCount - 1 === index;
      const first = index === 0;

      const marginStyle = last ? {} : getGapStyle(direction, reverse, gap);
      const itemStyle = Array.from([marginStyle, childItem.props.style]).flat();

      return React.cloneElement(childItem, {
        index,
        last,
        first,
        gap,
        direction,
        reverse,
        style: itemStyle,
      });
    });
  }, [children, direction, reverse, gap]);

  return (
    <ScrollView horizontal={direction === 'horizontal'} {...props}>
      <View
        ref={ref}
        style={[
          defaultStyles.root,
          {
            flexDirection,
            justifyContent: justify,
            alignItems: align,
            // flex,
          },
          ...(Array.isArray(containerStyle)
            ? containerStyle
            : [containerStyle]),
        ]}>
        {renderChildren}
      </View>
    </ScrollView>
  );
});

Stack.displayName = 'Stack';

export {Stack};

const defaultStyles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    //TODO: remove following style post dev
    // backgroundColor: '#fa2',
    // borderWidth: 3,
    // borderColor: '#222',
  },
});

type sideMapType = {
  [key: string]: string;
};
const sideMap: sideMapType = {
  horizontal: 'Right',
  'horizontal-reverse': 'Left',
  vertical: 'Bottom',
  'vertical-reverse': 'Top',
};

const getGapStyle = (
  direction: directionType,
  reverse = false,
  gap: gapType,
) => {
  const side = sideMap[`${direction}${reverse ? '-reverse' : ''}`];

  return {
    ['margin' + side]: gap,
  };
};
