import classNames from 'classnames';
import ChevronRightIcon from '../icons/ChevronRightIcon';

interface ErrorMessageProps {
  showMessage?: boolean;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  return (
    <div
      className={classNames(
        'mt-2 text-[#56A44C] font-bold flex items-center opacity-1',
        {
          'opacity-0': !props.showMessage,
        }
      )}
    >
      <ChevronRightIcon className='mr-1' />
      {props.message}
    </div>
  );
};

export default ErrorMessage;
