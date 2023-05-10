import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler;
  children: any;
  disabled: boolean;
  className?: string;
  dataTestId?: string;
}
const PaginationBtn: FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
  dataTestId,
}) => (
  <li>
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {children}
    </button>
  </li>
);

export default PaginationBtn;
