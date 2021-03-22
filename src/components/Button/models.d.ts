export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
    ariaLabel: string;
    onClick?: () => void;
}