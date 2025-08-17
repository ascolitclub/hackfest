/**
 * Global Theme Setup
 */

const defaults = {
  bg: {},
  text: {
    body: "text-foreground-light",
    title: "text-foreground",
  },
  border: {
    primary: "border-default",
    secondary: "border-secondary",
  },
  placeholder: "placeholder-foreground-muted",
  focus: `outline-none focus:ring-current focus:ring-2`,
  size: {
    text: {
      sm: "text-sm leading-4",
      md: "text-sm",
      lg: "text-base",
      xl: "text-base",
    },
    padding: {
      sm: "px-3 py-2",
      md: "px-4 py-2",
      lg: "px-4 py-2",
      xl: "px-6 py-3",
    },
  },
};

export default {
  input: {
    base: `block box-border w-full rounded-md shadow-sm transition-all text-foreground border focus-visible:shadow-md ${defaults.focus} group`,
  },
} as const;
