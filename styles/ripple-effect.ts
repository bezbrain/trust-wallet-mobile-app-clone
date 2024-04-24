export const rippleEffect = (pressed: boolean, looseStyle?: Object) => {
  return [
    pressed && {
      opacity: 0.5,
    },
    ,
    looseStyle,
  ];
};
