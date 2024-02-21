import { FC, memo } from "react";
import { ProductListProps } from "./ProductList.type";
import { Button, Card, ConfigProvider, Image } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductList.css";

const { Meta } = Card;
const ProductListComponent: FC<ProductListProps> = ({ data, loading }) => {
  console.log(data.products.items);

  const renderProductCards = () => {
    return data.products.items.map(({ tile_title, image: { url } }) => {
      return (
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryBg: "transparent",
            },
            components: {
              Card: { borderRadiusLG: 5 },
              Button: {
                contentFontSize: 14,
                primaryShadow: "none",
                algorithm: true,
              },
            },
          }}
          key={tile_title}
        >
          <Card
            hoverable
            cover={
              <figure className="aspect-square flex">
                <Image
                  src={url}
                  preview={false}
                  alt={tile_title}
                  loading="eager"
                  placeholder={<Skeleton className="min-h-full" />}
                />
              </figure>
            }
            bordered={false}
            classNames={{ body: "font-ubuntu" }}
            children={
              <>
                <Meta title={tile_title} />
                <span className="feminised">Feminised</span>
                <div className="feminised_photoperiod mt-4 space-x-1">
                  <span className="py-2 px-3 bg-[#eaf5e7] rounded-2xl ">
                    Feminised
                  </span>
                  <span className="py-2 px-3 bg-[#c8c7ba] rounded-2xl">
                    photoperiod
                  </span>
                </div>
                <div className="product_pricewraper">
                  <Button
                    shape="round"
                    size="middle"
                    className="bg-[#739536] text-white font-semibold"
                  >
                    Add To Basket
                  </Button>
                </div>
              </>
            }
          />
        </ConfigProvider>
      );
    });
  };
  const renderLoadingProductCart = () => {
    return Array.from({ length: 9 }).map((_, index) => {
      return (
        <div className="productcard_loading bg-white shadow-md" key={index}>
          <Skeleton containerClassName="min-h-[240px] flex productimg_loading" />
          <div className="product_title_loading bg-white -mt-3 relative px-2 py-3 rounded-tl-2xl space-y-3">
            <Skeleton width={210} height={30} />
            <Skeleton width={70} height={25} />
            <div className="add_to_basket flex justify-end">
              <Skeleton width={150} height={40} />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={`productlist_container ${loading ? "min-h-[1224px]" : ""}`}>
      {loading ? renderLoadingProductCart() : renderProductCards()}
    </div>
  );
};
export default memo(ProductListComponent);
