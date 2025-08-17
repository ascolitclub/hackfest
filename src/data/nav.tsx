interface NavProps {
  title: string;
  url: string;
  hasDropdown: boolean;
  dropdown?: unknown;
}

interface Props {
  primaryNav: Array<NavProps>;
}

export const getMenu = (): Props => ({
  primaryNav: [
    {
      title: "Product",
      url: "/product",
      hasDropdown: false,
    },
  ],
});
