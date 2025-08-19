import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const MenuItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    description?: string;
    icon?: string;
    hasChevron?: boolean;
    hoverColor?: "foreground" | "brand";
  }
>(
  (
    {
      className,
      href,
      // hoverColor = "foreground",
      description,
      children,
      icon,
      title,
      ...props
    },
    ref
  ) => {
    return (
      <Link
        href={href as string}
        ref={ref}
        className={cn(
          "group/menu-item flex items-center text-foreground text-sm hover:text-foreground select-none gap-3 rounded-md p-2 leading-none no-underline outline-none focus-visible:ring-2",
          description && "items-center",
          className
        )}
        {...props}
      >
        {children ?? (
          <>
            {icon && (
              <div className="shrink-0 border bg-surface-200 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                <svg
                  className="h-5 w-5 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={icon}
                    stroke="currentColor"
                  />
                </svg>
              </div>
            )}

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1">
                <p className={cn(`leading-snug text-foreground`)}>{title}</p>
              </div>
              {description && (
                <p className="line-clamp-2 leading-snug text-foreground group-hover/menu-item:text-foreground text-xs">
                  {description}
                </p>
              )}
            </div>
          </>
        )}
      </Link>
    );
  }
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
