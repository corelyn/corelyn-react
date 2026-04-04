import './button.css'

export const Button = ({ className = '', square = false, scale, onClick, children, ...rest }) => {
    const buttonClass = `button${square ? ' square' : ''}${className ? ` ${className}` : ''}`;
    const buttonStyle = scale ? { padding: scale } : undefined;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            style={buttonStyle}
            {...rest}
        >
            {children}
        </button>
    );
}