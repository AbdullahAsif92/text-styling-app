import React,{useState} from 'react'

export default function TextForm(props) {
    const upperCaseButton = () => {
        let textAreaUpperCaseValue = text.toUpperCase();
        updatetext(textAreaUpperCaseValue)
    }
    const lowerCaseButton = () => {
        let textAreaLowerCaseValue = text.toLowerCase();
        updatetext(textAreaLowerCaseValue);
    }
    const clear = () => {
        let textAreaEmptyValue = '';
        updatetext(textAreaEmptyValue)
    }
    const titleCaseButton = () => {
        let textAreaTitleCaseValue = text.split(" ").map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
        let finalTitleCaseButton = textAreaTitleCaseValue.join(" ");
        updatetext(finalTitleCaseButton);
    }
    const handleOnChange = (textAreaValueUpdated) =>{
        updatetext(textAreaValueUpdated.target.value);
    }
    const [text,updatetext] = useState("");
  return (
    <>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1>{props.heading}</h1>
            <textarea className={`form-control my-3 custom-textarea ${props.mode}`} style={props.mode === 'dark' ? {backgroundColor: props.colorInputText === "" ? "black" : props.colorInputText,color:"white"} : {backgroundColor:"white",color:"black"} } value={text} onChange={handleOnChange} rows={9} id='mybox' placeholder='Enter Text Here'></textarea>
            <button className='btn btn-secondary mx-1 my-1' onClick={upperCaseButton}>ToUpperCase</button>
            <button className='btn btn-secondary mx-1 my-1' onClick={lowerCaseButton}>ToLowersCase</button>
            <button className='btn btn-secondary mx-1 my-1' onClick={clear}>Clear</button>
            <button className='btn btn-secondary mx-1 my-1' onClick={titleCaseButton}>TitleCase</button>
        </div>
        <div className={`container py-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h2>Text Summary</h2>
            <p>Words In the text {text.split(" ").filter((element)=>{return element.length !== 0}).length} & Charteries In the text {text.length}</p>
            <p>Time to read the Pararaph total Time {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minute</p>
            <h2>Preview</h2>
            <p>{text === '' ? 'Nothing to preview' : text}</p>
        </div>
    </>
  )
}
