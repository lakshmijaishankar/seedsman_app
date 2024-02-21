import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxhooks/reduxHooks";
import { fetchFilterData } from "../redux/slice/filterSlice";
import FilterComponent from "./Filter.component";
import "./Filter.css";
import { FilterContainerExpandState } from "./Filter.type";

const FilterContainer = () => {
  const [expand, setExpanded] = useState<FilterContainerExpandState>({});
  const expandRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();
  const { filterData, loading } = useAppSelector(
    (state) => state.filterReducer
  );

  useEffect(() => {
    dispatch(fetchFilterData());
  }, []);

  useEffect(() => {
    let ulElement = expandRef.current;
    let tabIndex: number = -1;
    if (ulElement) {
      tabIndex = ulElement.tabIndex;
      ulElement.style.maxHeight = ulElement.scrollHeight + "px";
    }
    return () => {
      if (ulElement) {
        ulElement.style.maxHeight = "0";
      }
    };
  }, [expand]);

  const handleExpandFilter = useCallback(
    (index: number) => {
      setExpanded((preState) => {
        return {
          ...preState,
          [index]: !expand[index],
        };
      });
    },
    [expand]
  );

  return (
    <>
      <FilterComponent
        data={filterData.data}
        handleExpandFilter={handleExpandFilter}
        isExpand={expand}
        loading={loading}
        expandRef={expandRef}
      />
    </>
  );
};

export default memo(FilterContainer);
