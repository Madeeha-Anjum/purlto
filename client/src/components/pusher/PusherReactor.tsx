interface PusherReactorProps {
  children?: React.ReactNode;
  activate?: boolean;
}

const PusherReactor: React.FC<PusherReactorProps> = (props) => {
  return (
    <>
      <div className={`${props.activate ? 'animate-push-reaction' : ''}`}>
        {props.children}
      </div>
    </>
  );
};

export default PusherReactor;
