import { cn } from "@/lib/utils";
import { FooterSection } from "../Footer";
import { Navbar } from "../Navbar/Navbar";

type Props = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { className, children } = props;

  return (
    <>
      <Navbar />
      <main className={cn(`relative min-h-screen`, className)}>{children}</main>
      <FooterSection />
    </>
  );
};

export default DefaultLayout;
