export const rippleEffect = (
  pressed: boolean,
  activeHeaderIcon: Object,
  looseStyle?: Object
) => {
  return [pressed && activeHeaderIcon, looseStyle];
};
