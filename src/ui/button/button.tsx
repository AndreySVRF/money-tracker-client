import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonVariant } from './type';
import classNames from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<IButtonProps> = ({
  variant = ButtonVariant.Primary,
  ...props
}) => {
  console.log('props.className', props.className);
  return (
    <button
      {...props}
      className={classNames(
        'btn',
        {
          ['btn-green']: variant === ButtonVariant.Primary,
          ['btn-outline']: variant === ButtonVariant.Secondary,
          ['btn-red']: variant === ButtonVariant.Danger
        },
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export { Button };
