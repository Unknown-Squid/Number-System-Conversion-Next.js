import { useState, useEffect } from 'react';
import React from "react";
import styles from "../styles/decimal.module.css";

export default function Button() {

    const [value, setValue] = useState("")
    const [result, setResult] = useState("")
    const [select, setSelect] = useState("binary")
    const onKeyUp = (evt) => {
        setValue(evt.target.value)
    }


    const onClick = async () => {
        if (select == "binary"){
            setResult(parseInt(value).toString(2))
        }
        if (select == "octal"){
            setResult(parseInt(value).toString(8))
        }
        if (select == "hexadecimal"){
            setResult(parseInt(value).toString(16))
        }      

    }
    const onChange = (evt) => {
        setSelect(evt.target.value)
    }

    return (
        <div className={styles.mainCont}>
            <div className={styles.navCont}>
                <button className={styles.Logo} onClick={()=>window.location.href="/"}></button>
                <div className={styles.butnCont}>
                    <button id={styles.binaryButton} onClick={()=>window.location.href="binary"}> BINARY </button>
                    <button id={styles.octalButton} onClick={()=>window.location.href="octal"}> OCTAL </button>
                    <button id={styles.decimalButton} onClick={()=>window.location.href="decimal"}> DECIMAL </button>
                    <button id={styles.hexadecimalButton} onClick={()=>window.location.href="hexadecimal"}> HEXADECIMAL </button>
                </div>
            </div>
            <div className={styles.contentCont}>    
                <label class={styles.binary}>DECIMAL</label>
                <div class={styles.cont1}>
                    <label><b>DECIMAL</b></label>
                    <label> ------------ </label>
                    <select onChange={onChange}>
                        <option value="binary">BINARY</option>
                        <option value="octal">OCTAL</option>
                        <option value="hexadecimal">HEXADECIMAL</option>
                    </select>
                </div>
                <div class={styles.cont2}>
                    <label>VALUE:</label>
                    <input type="text" name="Value" value={value} onChange={onKeyUp}/>
                    <button type="button" onClick={onClick}>CONVERT</button>
                </div>
                <div class={styles.cont3}>
                    <label>RESULT:</label>
                    <input type="text" name="Result" value={result}/>
                </div>
                <div class={styles.cont4}>
                    <div class={styles.vidCont}>
                    </div>
                </div>             
            </div>
        </div>

        //<label className={styles.label}> First Name: </label>
        //<input className={styles.input} type="text" name="First_Name" value={state.First_Name} onChange={onKeyUp} required></input >
        //<label className={styles.label}> AGE: </label>
        //<input className={styles.input} type="text" name="Age" value={state.Age} onChange={onKeyUp} required></input>
       
        
  )
}