import './Button.css'
export const Button = ({value, i, color, onClick}) => {
    return (
        <button onClick={onClick} className={color} value={value}>{i}</button>
    )
}