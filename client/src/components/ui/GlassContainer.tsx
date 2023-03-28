import classNames from 'classnames';

interface GlassContainerProps {
  children: React.ReactNode;
  onClick?: () => void;
  clickable?: boolean;
  focusable?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={classNames(
        'w-full border shadow-inner rounded-xl bg-black/10  backdrop-opacity-40 backdrop-blur-3xl backdrop-brightness-200 border-cool-grey/20',
        {
          'cursor-pointer transition active:scale-95 hover:border-cool-grey/80':
            props.clickable,
        },
        {
          'focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-cool-grey/80':
            props.focusable,
        }
      )}
    >
      {props.children}
    </div>
  );
};

export default GlassContainer;
