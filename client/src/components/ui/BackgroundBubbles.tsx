const BackgroundBubbles: React.FC = () => {
  return (
    <div>
      {/* absolute relative to the body */}
      <span className='absolute scale-150 bg-transparent border rounded-full w-60 h-60 top-10 -right-10 border-cool-grey/10'></span>
      <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 right-44 top-48'></span>
      <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 left-44 top-72'></span>
      <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 left-60 bottom-44'></span>
      <span className='absolute w-2.5 h-2.5 rounded-full bg-cool-grey/10 right-60 bottom-32'></span>
    </div>
  );
};

export default BackgroundBubbles;
