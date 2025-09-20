import Layout from "./Layout";

const withLayout = <TProps extends object>(
  Component: React.ComponentType<TProps>
) => {
  return (props: TProps) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
