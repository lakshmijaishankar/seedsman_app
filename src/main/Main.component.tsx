import AsideContainer from "../aside/Aside.container";
import FilterContainer from "../filter/Filter.container";
import ProductListContainer from "../productlist/ProductList.container";
const MainComponent = (): JSX.Element => {
  return (
    <section className="main_container flex p-[0_60px] m-[0_50px]">
      <AsideContainer className="sticky align-baseline top-0">
        <FilterContainer />
      </AsideContainer>
      <div className="flex-[1] w-full">
        <ProductListContainer />
      </div>
    </section>
  );
};
export default MainComponent;
