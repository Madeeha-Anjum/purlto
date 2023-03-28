interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <h1 className='mb-10 text-center break-words text-site-name'>
      {props.children}
    </h1>
  );
};

export default Title;
