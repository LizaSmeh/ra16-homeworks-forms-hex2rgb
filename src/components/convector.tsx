import { useRef, useState } from 'react';

const hexToRgbValue = (hex: string): string => {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`
}
console.log(hexToRgbValue('#6535AD'))

const HexToRgb = () => {
  const [color, setColor] = useState("#FF00FF")
const inputRef = useRef<HTMLInputElement>(null);


const chooseColor = (event: React.FormEvent) => {
    event.preventDefault()


    if (!inputRef.current.value.startsWith("#")) {
        inputRef.current.value = "#" + inputRef.current.value
    }

    if (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(inputRef.current.value)){ 
        const color : string = inputRef.current.value
        setColor(color) 
    }
    else {setColor("#990303")}

}   

    return (
        <div 
        className="container"
        style={{backgroundColor: color}}
        >
        <>
        
            <form className="colorizer" onSubmit={(event)=> chooseColor(event)}>
                <input className="colorizer__input"
                type="text" 
                ref={inputRef}
                />
                <label 
                className="colorizer__label"
                style={{backgroundColor: color}}
                >{color == "#990303" ? "Ошибка!" : hexToRgbValue(color)  }</label>
            
            </form>
            </>
       
        </div>
    )
}

export default HexToRgb;
