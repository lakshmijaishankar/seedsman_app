import React, { FC, memo } from "react";
import { FilterComponentProps } from "./Filter.type";
import Skeleton from "react-loading-skeleton";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { ConfigProvider } from "antd";
import "react-loading-skeleton/dist/skeleton.css";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const FilterComponent: FC<FilterComponentProps> = ({
  data,
  loading,
}): JSX.Element => {
  const renderSkeletonLoading = (): JSX.Element => {
    return (
      <span className="w-full">
        {Array.from({ length: 15 }).map((_, index) => {
          return (
            <Skeleton
              count={1}
              className="min-h-[50px] rounded-[0px_!important] "
              key={index}
            />
          );
        })}
      </span>
    );
  };

  const renderMenuItems = () => {
    return data.products.filters
      .filter(({ name }) => name !== "Categories")
      .map(({ name, filter_items }) => {
        return getItem(
          name,
          name,
          null,
          filter_items.map(({ label }) => {
            return getItem(
              label,
              `${name}_${label}`,
              <input
                type="checkbox"
                name={label}
                className="filter_checkbox min-w-[20px_!important] aspect-square"
                onChange={(e) => console.log(e.target.name)}
              />
            );
          })
        );
      });
  };

  return (
    <aside className="filter_sidebar w-full self-baseline sticky top-[80px]">
      {loading ? (
        renderSkeletonLoading()
      ) : (
        <div className="filter_sidebar_container">
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  colorBgContainer: "white",
                  itemHoverBg: "none",
                  itemActiveBg: "none",
                  padding: 0,
                  borderRadius: 0,
                },
              },
            }}
          >
            <Menu
              mode="inline"
              items={renderMenuItems()}
              selectable={false}
              rootClassName="menu-container font-ubuntu"
            />
          </ConfigProvider>
        </div>
      )}
    </aside>
  );
};

export default memo(FilterComponent);
