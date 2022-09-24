import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PageSection = (props: Props) => {
  return (
    <>
      <section className='mx-auto max-w-7xl'>
        <div className='sm:px-28'>{props.children}</div>
      </section>
    </>
  );
};

export default PageSection;
