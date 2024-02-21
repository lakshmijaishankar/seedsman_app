import React from "react";

export interface FilterComponentProps {
  data: {
    products: {
      filters: Array<{
        filter_items: Array<{
          label: string;
          count: number;
          value_string: string;
          swatch_data: string;
        }>;
        name: string;
        has_swatch: boolean;
        request_var: string;
        is_boolean: boolean;
      }>;
      max_price?: number;
      min_price?: number;
    };
  };
  handleExpandFilter: (index: number) => void;
  isExpand: {
    [key: string]: boolean;
  };
  loading: boolean;
  expandRef: React.RefObject<HTMLUListElement>;
}

export interface FilterContainerExpandState {
  [key: string]: boolean;
}
