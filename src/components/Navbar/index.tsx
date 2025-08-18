"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/Navigation-Menu";
import { getMenu } from "@/data/nav";
import MenuItem from "./MenuItem";
import { Button } from "../ui/Button";

interface Props {
  hideNavbar: boolean;
  stickyNavbar?: boolean;
}

function Navbar({ hideNavbar, stickyNavbar = true }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>();
  const menu = getMenu();

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
        <nav className={cn(`relative z-40 border border-b`)}>
          <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
            <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
              <div className="flex items-center">
                <div className="flex items-center shrink-0">
                  {/* <RightClick */}
                </div>
                <NavigationMenu
                  delayDuration={0}
                  className="hidden pl-8 sm:space-x-4 lg:flex h-16"
                >
                  <NavigationMenuList>
                    {menu.primaryNav.map((menuItem) =>
                      menuItem.hasDropdown ? (
                        <NavigationMenuItem
                          className="text-sm font-medium"
                          key={menuItem.title}
                        >
                          <NavigationMenuTrigger
                            className={cn(
                              // buttonVariants({ type: "text", size: "small" }),
                              "!bg-transparent hover:text-brand-link data-[state=open]:!text-brand-link data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter data-[radix-collection-item]:focus-visible:text-foreground px-2 h-auto"
                            )}
                          >
                            {menuItem.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            {menuItem.dropdown}
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      ) : (
                        <NavigationMenuItem
                          className="text-sm font-medium"
                          key={menuItem.title}
                        >
                          <NavigationMenuLink asChild>
                            <MenuItem
                              href={menuItem.url}
                              title={menuItem.title}
                              hoverColor="brand"
                            />
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    )}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className="flex items-center gap-2 animate-fade-in !scale-100 delay-300">
              <Button variant="default">Hello</Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
