import type { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size = "medium",
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
}) => {
  // Base styles
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant styles
  const variantStyles = {
    primary: "bg-mindo-blue text-white hover:opacity-90 focus:ring-mindo-blue",
    secondary:
      "bg-mindo-green text-white hover:opacity-90 focus:ring-mindo-green",
    outline:
      "bg-transparent border-2 border-mindo-blue text-mindo-blue hover:bg-mindo-blue hover:text-white focus:ring-mindo-blue",
  };

  // Size styles
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  // Disabled styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
