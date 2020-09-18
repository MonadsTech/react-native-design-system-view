# react-native-design-system-view

React Native Design System View Components

Work in progress ...

- [Views](#views)
  - [Stack](#stack)

### Views

We have following views available

#### Stack

You can use ant component as child of stack, but it must be direct child of Stack.

Basic stack example

```js
<Stack gap={20} direction="horizontal">
  <View style={{backgroundColor: '#f01'}} />
  <View style={{backgroundColor: '#ff1'}} />
  <View style={{backgroundColor: '#0f2'}} />
</Stack>
```

Props available for Stack

- inline?: boolean;
- reverse?: boolean;
- justify?: FlexStyle['justifyContent'];
- align?: FlexAlignType;
- direction?: directionType;
- gap?: gapType;
- style?: StyleProp<ViewStyle>;
- containerStyle?: StyleProp<ViewStyle>;
- children?: React.ReactNode;
- scroll?: boolean;
