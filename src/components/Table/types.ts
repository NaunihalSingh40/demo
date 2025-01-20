import { JSX } from "react"

export type TColumn<T, K extends keyof T> = {
    key: K
    header: JSX.Element
    theadVariants?: string
    tbodyVariants?: string
  }
  
  export type TRow<T> = T
  
  export type TTable<T, K extends keyof T> = {
    rows: Array<TRow<T>>
    columns: Array<TColumn<T, K>>
  }