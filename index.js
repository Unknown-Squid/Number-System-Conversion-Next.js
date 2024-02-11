import React from "react";
import styles from "../styles/index.module.css";

export default function Button() {
    return (
        <div className={styles.mainCont}>
            <div className={styles.navCont}>
                <button className={styles.Logo} onClick={()=>window.location.href="/"}></button>
                <div className={styles.butnCont}>
                    <button id={styles.binaryButton} onClick={()=>window.location.href="/binary"}> BINARY </button>
                    <button id={styles.octalButton} onClick={()=>window.location.href="/octal"}> OCTAL </button>
                    <button id={styles.decimalButton} onClick={()=>window.location.href="/decimal"}> DECIMAL </button>
                    <button id={styles.hexadecimalButton} onClick={()=>window.location.href="/hexadecimal"}> HEXADECIMAL </button>
                </div>
            </div>
            <div className={styles.contentCont}>
                <div className={styles.subCont}>
                    <h1> What is Number System?</h1>
                    <p> Number System is defined as a system of <br/> writing to express number.</p>
                    <p> We use different kind of number system to <br/> communicate to the computer since they
                    <br/> cannot understand a human language.</p>
                    <p> These are the four types of number system or <br/> the four seaons of number system: </p>
                    <div className={styles.fourSeasoncont}>
                        <img src="binary.JPG"/>
                        <img src="octal.JPG"/>  
                        <img src="decimal.JPG"/>  
                        <img src="hexadecimal.JPG"/>                 
                    </div>
                </div>
            </div>
        </div> 
  )
}
