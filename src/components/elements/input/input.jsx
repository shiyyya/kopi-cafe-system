import './input.css';

function Input({
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    className = "",
    disabled = false,
}) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            disabled={disabled}
        />
    );
}

export default Input;

