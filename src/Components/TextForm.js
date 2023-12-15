import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        console.log("Upper case was clicked on " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCaseClick = () => {
        console.log("Lower case was clicked on " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        console.log(event);
        // jo input diya h humne to vo value set hojaegi setText ki
        // qki console me dkh event ko
        // jo text enter kr rhe h hum,vo event me target me value me h
        setText(event.target.value);    
    }

    //iska mtlb h ki event me jo default h vo h text jiski value humne "Enter the text here" rkh rkhi h
    //or setText h ki agr uski value hune kuchh di to vo text ki jagah ajaega 
                                                       //useState is a hook
    const[text , setText] = useState("Enter the text here");

    return (
        <>
        <div className = {`container text-${props.mode === "light"? "dark":"light"}`}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                {/* value ka mtlb h box ke andr text show kro  */}
                {/* onChange ka mtlb h ki jo present text h box me, agr usme kuchh add kre to handleOnChange call maro,is function ki help se jo text add kra h,agr usme or kuchh bhi add krna hua to add kr skte h  */}
                {/* jb bhi koi change krenge current text me to vo text ke brabar hojaega */}
                <textarea 
                    className = {`form-control bg-${props.mode} bg-gradient text-${props.mode === "light"? "dark":"light"}`} 
                    value={text} 
                    // onChange={(event) => handleOnChange(event)} 
                    //          OR
                    onChange={handleOnChange} 
                    id="exampleFormControlTextarea1" 
                    rows="8">
                </textarea>
            </div>

            {/* onclick handleUpperCaseClick ko call krdo */}
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Upper Case</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Lower Case</button>
            <button type="button" className="btn btn-danger mx-1" onClick={handleClearText} >Clear Text</button>
        </div>

        <div className={`container my-3 text-${props.mode === "light"? "dark":"light"}`}>
            <h2>Your text summary</h2>
            
            {/* is se bina kuchh dale bhi 1 word show kr rha tha so to fix that slight change kia h code me*/}
            {/* <p>{text.split(" ").length} words and {text.length} characters </p> */}
            <p>{text.split(" ").filter( (element) => {return element.length !== 0}).length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
