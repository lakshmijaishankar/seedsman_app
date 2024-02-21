import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxhooks/reduxHooks";
import { fetchProductList } from "../redux/slice/productListSlice";
import ProductListComponent from "./ProductList.component";
import { ConfigProvider, Pagination } from "antd";

const ProductListContainer = () => {
  const {
    loading,
    prdListData: { data },
  } = useAppSelector((state) => state.prdListReducer);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProductList(currentPage));
  }, [currentPage]);

  return (
    <>
      <ProductListComponent data={data} loading={loading} />
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorBgTextHover: "none",
              colorBgTextActive: "none",
            },
          },
        }}
      >
        <Pagination
          defaultCurrent={1}
          showSizeChanger={false}
          defaultPageSize={1}
          total={10}
          rootClassName="flex justify-end"
          onChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 645, behavior: "smooth" });
          }}
        />
      </ConfigProvider>
    </>
  );
};
export default memo(ProductListContainer);
