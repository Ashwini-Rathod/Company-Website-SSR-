import RawLayout from "./Layouts/RawLayout";
import CsLayout from "./Layouts/CsLayout";
import SbLayout from "./Layouts/SbLayout";

const layouts = {
  raw: RawLayout,
  cs: CsLayout,
  sb: SbLayout,
};

const LayoutWrapper = (props) => {
  const Layout = layouts[props.children.type.layout];
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  return <SbLayout {...props}>{props.children}</SbLayout>;
};

export default LayoutWrapper;