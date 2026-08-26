 /*
onClick: onClick is a function to run when user clicks the chip
selected: selected is a boolean true or false. If it is true, it mean the chip is selected, if it is false, the chip is unselected.
label: It is the text on the chip
disabled: Make the chip unclickable, the chip should also look disabled
 */
 
 export default function Chip({onClick, selected, label, disabled}) {
    const className = selected ? "selected chip" : "chip"
    return <button aria-pressed = {selected} onClick = {onClick} className={className} disabled = {disabled}>{label}</button>
}