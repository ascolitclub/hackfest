export const SIZE = {
  text: {
    sm: "text-sm leading-4",
    md: "text-sm",
    lg: "text-base",
  },
  padding: {
    sm: "px-3 py-2",
    md: "px-4 py-2",
    lg: "px-4 py-2",
  },
  height: {
    sm: "h-[34px]",
    md: "h-[38px]",
    lg: "h-[42px]",
  },
};

export const SIZE_VARIANTS_DEFAULT = "sm";

export const SIZE_VARIANTS = {
  sm: `${SIZE.text["sm"]} ${SIZE.padding["sm"]} ${SIZE.height["sm"]}`,
  md: `${SIZE.text["md"]} ${SIZE.padding["md"]} ${SIZE.height["md"]}`,
  lg: `${SIZE.text["lg"]} ${SIZE.padding["lg"]} ${SIZE.height["lg"]}`,
};
