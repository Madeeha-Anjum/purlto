interface PusherProps {
  activate?: boolean;
  revealedText?: string;
}

const Pusher: React.FC<PusherProps> = (props) => {
  return (
    <>
      <div
        id='pusher'
        className={`absolute right-0 top-0 h-full w-0 bg-gradient-to-r from-[#7be5c9] via-[#7ec5bb] to-[#0e9c97] rounded-xl ${
          props.activate ? 'animate-push' : 'animate-reset-push'
        }`}
      >
        <div className='flex items-center justify-center h-full'>
          <div
            className={`opacity-0 text-white ${
              props.activate && 'animate-revealed-text'
            }`}
          >
            {props.revealedText}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pusher;
