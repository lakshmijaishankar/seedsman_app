import React, { HTMLAttributes } from "react";

export interface AsideContainerType extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface AsideComponentProps {
  childern: React.ReactNode;
}
