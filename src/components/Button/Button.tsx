import React, { FC } from 'react';
import { ButtonProps } from './models';

import './Button.scss';

const Button: FC<ButtonProps> = ({
    children,
    ariaLabel,
    onClick,
    className,
    type = 'button',
}) => (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );

export default Button;