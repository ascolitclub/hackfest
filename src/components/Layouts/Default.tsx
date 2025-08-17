import { cn } from "@/lib/utils";
import Navbar from "../Navbar";

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
      <Navbar hideNavbar={false} />
      <main className={cn(`relative min-h-screen`, className)}>{children}</main>
      footer
    </>
  );
};

export default DefaultLayout;
