type GetDecoratorFn = () => Function;

// https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata#usage-with-inversifyjs
export const makeLazyInject = (original: GetDecoratorFn): Function => {
  return (...args: any[]) => (target: any, propertyName: any, ...decoratorArgs: any[]) => {
    const decorator = original();
    decorator(...args)(target, propertyName, ...decoratorArgs);

    return Object.getOwnPropertyDescriptor(target, propertyName);
  };
};
