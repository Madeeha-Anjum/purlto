import { AwesomeButton } from 'react-awesome-button';
import './awesome-button.css';

interface ShortenLinkButton {
  onSubmit: () => void;
  onReset: () => void;
  isLoading?: boolean;
  showReset?: boolean;
}

const ShortenLinkButton: React.FC<ShortenLinkButton> = (props) => {
  if (props.isLoading) {
    return (
      <AwesomeButton type='primary' disabled>
        Loading...
      </AwesomeButton>
    );
  }

  if (!props.isLoading && props.showReset) {
    return (
      <AwesomeButton onPress={props.onReset} type='primary'>
        Do Another One!
      </AwesomeButton>
    );
  }

  return (
    <AwesomeButton onPress={props.onSubmit} type='primary'>
      Shorten Link
    </AwesomeButton>
  );
};

export default ShortenLinkButton;
