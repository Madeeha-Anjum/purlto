import { AwesomeButton } from 'react-awesome-button';

import './awesome-button.css';

import classnames from 'classnames';

interface RaisedButtonProps {
  onClick?: () => void;

  disabled?: boolean;

  children: React.ReactNode;
}

const RaisedButton: React.FC<RaisedButtonProps> = (props) => {
  const isDisabled = props.disabled ?? false;

  const buttonPrimaryClass = 'bg-[#6ac8af]';
  const buttonPrimaryDarkClass = 'bg-[#0c807c]';
  const buttonPrimaryHoverClass = 'group-hover:bg-[#69bbb1]';
  const buttonPrimaryActiveClass = 'group-active:bg-[#7ec5bb]';
  const buttonDisabledClass = 'bg-[#afafaf]';
  const buttonDisabledDarkClass = 'bg-[#898989]';
  const buttonDisabledHoverClass = 'group-hover:bg-[#afafaf]';
  const buttonDisabledActiveClass = 'group-active:bg-[#afafaf]';

  const buttonColors = {
    primary: !isDisabled ? buttonPrimaryClass : buttonDisabledClass,
    dark: !isDisabled ? buttonPrimaryDarkClass : buttonDisabledDarkClass,
    hover: !isDisabled ? buttonPrimaryHoverClass : buttonDisabledHoverClass,
    active: !isDisabled ? buttonPrimaryActiveClass : buttonDisabledActiveClass,
  };

  const pushableClasses = classnames(
    `group ${buttonColors.dark} rounded shadow-lg outline-offset-4`,
    {
      'cursor-not-allowed pointer-events-none': isDisabled,
    }
  );

  const frontClasses = classnames(
    'block px-4 py-2 rounded font-bold transition',
    `${buttonColors.primary} -translate-y-[5px]`,
    `${buttonColors.hover} group-hover:-translate-y-[3px]`,
    `${buttonColors.active} group-active:-translate-y-0`
  );

  return (
    <button
      onClick={props.onClick}
      className={pushableClasses}
      disabled={isDisabled}
    >
      <span className={frontClasses}>{props.children}</span>
    </button>
  );
};

interface ShortenLinkButton {
  onSubmit: () => void;

  onReset: () => void;

  isLoading?: boolean;

  showReset?: boolean;
}

const ShortenLinkButton: React.FC<ShortenLinkButton> = (props) => {
  if (props.isLoading) {
    return <RaisedButton disabled>Loading...</RaisedButton>;
  }

  if (!props.isLoading && props.showReset) {
    return <RaisedButton onClick={props.onReset}>Do Another One!</RaisedButton>;
  }

  return <RaisedButton onClick={props.onSubmit}>Shorten Link</RaisedButton>;
};

export default ShortenLinkButton;
