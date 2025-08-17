import { cn } from "@/app/lib/utils";

type Props = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { hideHeader, hideFooter, className, children } = props;

  return (
    <>
      navbar
      <main className={cn(`relative min-h-screen`, className)}>{children}</main>
      footer
    </>
  );
};

export default DefaultLayout;
