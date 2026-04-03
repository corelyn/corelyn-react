import './button.css'

export const Button = (props) => {
    return (
        <button 
        className="button" 
        onClick={props.onClick}
        style={{padding: props.scale}}
        >
            {props.children}
        </button>
    );
}