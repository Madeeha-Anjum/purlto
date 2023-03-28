interface PusherContainerProps {
  children: React.ReactNode;
}

const PusherContainer: React.FC<PusherContainerProps> = (props) => {
  return <div className='relative'>{props.children}</div>;
};

export default PusherContainer;
