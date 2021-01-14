import HomeLayout from "./Layouts/HomeLayout";
import RawLayout from "./Layouts/RawLayout";
import CsLayout from "./Layouts/CsLayout";
import SbLayout from "./Layouts/SbLayout";

const layouts = {
  home: HomeLayout,
  raw: RawLayout,
  cs: CsLayout,
  sb: SbLayout,
};

const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return <HomeLayout {...props}>{props.children}</HomeLayout>;
};

export default LayoutWrapper;