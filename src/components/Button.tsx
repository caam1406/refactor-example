import { Icon } from './Icon';
import '../styles/button.scss';
import { IButtonProps } from '../interfaces/buttonProps.I';

export function Button({ iconName, title, selected, ...rest }: IButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}