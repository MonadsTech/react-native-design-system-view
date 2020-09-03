# react-native-design-system-text

React Native Design System Text Component

### How to use

```ts
//define config
const config: TextConfigType = {
  size: {
    h1: 21,
    h2: 19,
    h3: 16,
    p: 14,
  },
};

// create custom-charged text component
const {CustomText} = createTextSystem(config);

// use it in your components
export const CustomTextExample: FC<{}> = () => {
  return <CustomText size="h1" />;
};
```
