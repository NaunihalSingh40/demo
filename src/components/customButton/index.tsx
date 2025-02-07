import React from 'react';
import { StyledButton } from '../../styles/customButton';

interface CustomButtonProps {
  label: string;
  variant?:
    | 'contained'
    | 'contained1'
    | 'contained2'
    | 'disabled'
    | 'outline'
    | 'outline1'
    | 'text'; 
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode; 
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [key: string]: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant,
  type = 'button', 
  icon,
  disabled = false, 
  onClick,
  ...rest
}) => (
  <StyledButton
    variant={variant}
    type={type}
    disabled={disabled}
    onClick={onClick}
    {...rest}>
    {label}
    {icon}
  </StyledButton>
);

export default CustomButton;
