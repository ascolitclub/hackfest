import { cn } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  hideNavbar: boolean;
  stickyNavbar?: boolean;
}

function Navbar({ hideNavbar, stickyNavbar = true }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  React.useEffect(() => {
    // if()
  }, []);

  const disableStickyNavbar = !stickyNavbar;

  if (hideNavbar) return null;

  return (
    <>
      <div
        className={cn(
          "sticky top z-40 transform",
          disableStickyNavbar && "relative"
        )}
      >
        <nav className={cn(`relative z-40 border-default border-b`)}>
          Hello THis is navbar
        </nav>
      </div>
    </>
  );
}

export default Navbar;
