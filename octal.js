import { useState, useEffect } from 'react';
import React from "react";
import styles from "../styles/octal.module.css";

export default function Button() {

    const [value, setValue] = useState("")
    const [result, setResult] = useState("")
    const [select, setSelect] = useState("binary")
    const onKeyUp = (evt) => {
        setValue(evt.target.value)
    }


    const onClick = async () => {
        if (select == "binary"){
            setResult(parseInt(value, 8).toString(2))
        }
        if (select == "decimal"){
            setResult(parseInt(value, 8))
        }
        if (select == "hexadecimal"){
            setResult(parseInt(value, 8).toString(16))
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
                <label class={styles.binary}>OCTAL</label>
                <div class={styles.cont1}>
                    <label><b>OCTAL</b></label>
                    <label> ------------ </label>
                    <select onChange={onChange}>
                        <option value="binary">BINARY</option>
                        <option value="decimal">DECIMAL</option>
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
                    <input type="text" name="Result" value={result} disabled="true"/>
                </div>
                <div class={styles.cont4}>
                    <div class={styles.vidCont}>
                    </div>
                </div>                 
            </div>
        </div>
  )
}
