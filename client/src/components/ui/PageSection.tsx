type PropsType = {
  children: React.ReactNode;
};
const PageSection = (props: PropsType) => {
  return <section className='mx-auto max-w-7xl'>{props.children}</section>;
};

export default PageSection;
