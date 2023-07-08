import type { ReactElement } from "react";
import { RouteObject } from "react-router-dom";

export interface SMeta {
  icon?: ReactElement;
  title?: string | ReactElement;
}

// @ts-ignore
export interface SRoute extends RouteObject {
  children?: SRoutes;
  meta?: SMeta;
  hidden?: boolean;
  path:string
  element?:JSX.Element
}



export type SRoutes = SRoute[];
