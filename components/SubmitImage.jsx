import Theme from "../styles/Theme.js";
import ReactDOM from 'react-dom';
import React, { useState, Component } from 'react';
import { image } from "@tensorflow/tfjs";
 



const SubmitImage = () => {

    function fileUploadHandler() {
        alert("Upload was successful!");
    }

        
    return (
        <div style={{marginRight: "600px", backgroundColor: "beige", position: "fixed"}}>
            <input type="button" 
            value="X" 
            class="closeButton" 
            style={{ 
                height: "25px",
                width: "25px",
                cursor: "pointer",
                marginLeft: "610px", 
                marginTop: "35px", 
                marginBottom: "0px", 
                backgroundColor: "salmon", 
                borderRadius: "7px", 
                borderColor: "black" }} >
                </input>

            <h1 
            style={{
                marginLeft: "60px", 
                marginTop: "0px", 
                marginRight: "300px", 
                fontWeight: "normal" }}>
                    Upload an image</h1>
            <pre 
            style={{ 
                marginLeft: "60px", 
                marginTop: "40px", 
                fontWeight: "lighter", 
                fontFamily: "sans-serif" }}>
                    Pick a food of your choosing, upload and submit {"\n"} for a list of similar dishes.</pre>
            <div 
            style={{ 
                borderRadius: "15px", 
                border: "7px solid gray", 
                marginLeft: "60px", 
                marginRight: "300px" }}>
                <body>
                    <svg 
                    style={{marginTop:"20px"}} 
                    width="310" 
                    height="110" 
                    viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 59.25C0 44.0491 12.0593 31.6648 27.1328 31.1422C30.0734 13.4713 45.4323 0 63.9375 0C84.5446 0 101.25 16.7054 101.25 37.3125C101.25 38.7651 101.167 40.1983 101.005 41.6076C111.802 43.5291 120 52.9635 120 64.3125C120 76.987 109.776 87.2735 97.125 87.3743V87.375H73.875V81.75H97.0332C97.0489 81.7497 97.0645 81.7496 97.0802 81.7494C106.644 81.6733 114.375 73.8954 114.375 64.3125C114.375 55.7374 108.18 48.5978 100.02 47.1456C97.0946 46.625 95.0787 43.9191 95.417 40.9672C95.5543 39.77 95.625 38.5506 95.625 37.3125C95.625 19.812 81.438 5.625 63.9375 5.625C48.2275 5.625 35.1781 17.063 32.6815 32.0655C32.2421 34.706 30.0029 36.671 27.3277 36.7638C15.2725 37.1818 5.625 47.0904 5.625 59.25C5.625 71.2721 15.0565 81.095 26.9202 81.7184C27.0448 81.725 27.1682 81.7355 27.2904 81.75H49.125V87.375H26.625V87.3357C11.7894 86.5561 0 74.2798 0 59.25Z" fill="#8AB661" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M61.1521 45.3751C61.8816 45.3827 62.5751 45.6935 63.0662 46.233L76.3787 60.858C77.3546 61.9301 77.2766 63.5903 76.2045 64.5662C75.1324 65.5421 73.4722 65.4641 72.4963 64.392L63.75 54.7834V107.062C63.75 108.512 62.5748 109.688 61.125 109.688C59.6753 109.688 58.5 108.512 58.5 107.062V54.5809L49.1543 64.4317C48.1565 65.4834 46.4951 65.5271 45.4433 64.5293C44.3916 63.5315 44.3479 61.8701 45.3457 60.8183L59.2207 46.1933C59.7228 45.664 60.4226 45.3676 61.1521 45.3751Z" fill="#8AB661" />
                    </svg>
                </body>
                <pre 
                style={{ 
                    marginLeft: "75px", 
                    fontFamily: "sans-serif" }}>
                        <b>Drop & Drag</b> a file here {"\n"}            or click...</pre>
                <input type="file" 
                class="uploadBtn" 
                onChange={fileUploadHandler}
                style={{ 
                    maxWidth: "120px",
                    marginBottom: "20px", 
                    border: "none", 
                    marginLeft: "90px", 
                    fontSize: 17, 
                    cursor: "pointer",
                    borderRadius: "15px", 
                    backgroundColor: "salmon", 
                    padding: "5px 20px" }}></input>
            </div>
            <input type="button" 
            value="Submit" 
            style={{ 
            marginBottom: "30px", 
            cursor: "pointer",
            border: "none", 
            marginLeft: "540px", 
            fontSize: 17, 
            borderRadius: "15px", 
            backgroundColor: "salmon", 
            padding: "5px 20px" }}></input>

        </div>
    );
}

export default SubmitImage;




