"use client";
import { SIZE_VARIANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { cloneElement, forwardRef, isValidElement } from "react";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
const buttonVariants = cva(
  `relative inline-flex items-center justify-center cursor-pointer inline-flex items-center space-x-2 text-center ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border`,
  {
    variants: {
      type: {
        default: `bg-primary text-foreground shadow-xs hover:bg-primary/80 border`,
        secondary: "bg-foreground text-background hover:text-border-stronger",
      },
      block: {
        true: "w-full flex items-center justify-center",
      },
      size: {
        ...SIZE_VARIANTS,
      },
      rounded: {
        true: "rounded-full",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      defaultVariants: {
        variant: "default",
        size: "sm",
        block: false,
        rounded: false,
        disabled: false,
      },
    },
  }
);

export type LoadingVariantProps = VariantProps<typeof loadingVariants>;
const loadingVariants = cva("", {
  variants: {
    type: {
      default: "text-foreground",
      secondary: "text-border-muted",
    },
    loading: {
      default: "",
      true: "animate-spin",
    },
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    Omit<ButtonVariantProps, "disabled">,
    Omit<LoadingVariantProps, "type"> {
  asChild?: boolean;
  type?: ButtonVariantProps["type"];
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  rounded?: boolean;
}

const IconContainerVariants = cva("", {
  variants: {
    size: {
      sm: "[&_svg]:h-[18px] [&_svg]:w-[18px]",
      md: "[&_svg]:h-[20px] [&_svg]:w-[20px]",
      lg: "[&_svg]:h-[20px] [&_svg]:w-[20px]",
    },
    type: {
      primary: "text-primary",
      default: "text-primary",
      secondary: "text-border-muted",
      danger: "text-destructive-600",
      warning: "text-warning-600",
    },
  },
});

/**
 * slot asChild property needs update
 */ const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      icon,
      type = "default",
      loading,
      htmlType = "button",
      className,
      iconLeft,
      children,
      iconRight,
      size = "sm",
      block = false,
      rounded = false,
      disabled: rawDisabled,
      ...props
    },
    ref
  ) => {
    const _Component = asChild ? Slot : "button";
    const disabled = loading || rawDisabled;

    const showIcon = loading || icon;
    const _iconLeft: React.ReactNode = icon ?? iconLeft;

    return (
      <_Component
        ref={ref}
        type={htmlType}
        disabled={!!disabled}
        className={cn(
          buttonVariants({ type, size, block, rounded, disabled: false }),
          className
        )}
        onClick={(e) => {
          if (disabled) return e.preventDefault();
          else props?.onClick?.(e);
        }}
        {...props}
      >
        {asChild ? (
          isValidElement(children) ? (
            cloneElement(
              children,
              undefined,
              showIcon &&
                (loading ? (
                  <div className={cn(IconContainerVariants({ size, type }))}>
                    <Loader2
                      className={cn(loadingVariants({ loading, type }))}
                    />
                  </div>
                ) : _iconLeft ? (
                  <div className={cn(IconContainerVariants({ size, type }))}>
                    {_iconLeft}
                  </div>
                ) : null),
              children && <span className={"truncate"}>{children}</span>,
              iconRight && !loading && (
                <div className={cn(IconContainerVariants({ size, type }))}>
                  {iconRight}
                </div>
              )
            )
          ) : null
        ) : (
          <>
            {showIcon &&
              (loading ? (
                <div className={cn(IconContainerVariants({ size, type }))}>
                  <Loader2 className={cn(loadingVariants({ loading, type }))} />
                </div>
              ) : _iconLeft ? (
                <div className={cn(IconContainerVariants({ size, type }))}>
                  {_iconLeft}
                </div>
              ) : null)}

            {children && children}

            {iconRight && !loading && (
              <div className={cn(IconContainerVariants({ size, type }))}>
                {iconRight}
              </div>
            )}
          </>
        )}
      </_Component>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
