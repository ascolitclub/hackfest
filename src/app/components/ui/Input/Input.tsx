"use client";
import React from "react";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  copy?: boolean;
  icon?: unknown;
  reveal?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  defaultValue?: string | number;
  disabled?: boolean;
  iContainerClassName?: string;
}

function Input({
  inputClassName,
  copy,
  icon,
  reveal = false,
  size = "md",
  defaultValue,
  disabled,
  iContainerClassName,
  id = "",
  name = "",
  type = "text",
  value = undefined,
  ...props
}: Props) {}
