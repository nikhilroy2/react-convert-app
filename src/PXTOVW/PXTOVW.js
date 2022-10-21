import React, { useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
function PXTOVW(props) {
    const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    // for px to vw
    conversionFunc('pixel', window.innerWidth, 'vw')
    conversionFunc('pixel_for_vh', window.innerHeight, 'vh')

    function conversionFunc(to, windowSize, from) {
        let pxValue = Number(watch(to)); 
        let windowCalc = Number(Number(windowSize) / 100);
        let calcValue = Number(pxValue / windowCalc)
        setValue(from, calcValue + from)
    }

    const copyBtn = (value) => {
        let getValue = document.getElementById(value);
        getValue.select();
        getValue.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
        navigator.clipboard.writeText(getValue.value);
    }
    return (
        <div id="PXTOVW">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: 0 }}>
                        Pixel to ViewWidth Convert
                    </h3>
                    <h5 style={{ marginTop: 0 }}>
                        (PX TO VW)
                    </h5>
                </div>
                <label htmlFor="">
                    Enter PX:
                </label>
                <br />
                <input type="text"  {...register('pixel', { required: true })} />
                <br />
                <br />
                <label htmlFor="">VW</label>
                <br />
                <input type="text" id='vw_input' {...register('vw')} disabled={true} />
                <br />
                <button type='button' onClick={() => copyBtn('vw_input')} className="btn_copy" style={{ cursor: 'pointer' }}>Copy</button>
                <br />
            </form>



            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: 0 }}>
                        Pixel to ViewHeight Convert
                    </h3>
                    <h5 style={{ marginTop: 0 }}>
                        (PX TO VH)
                    </h5>
                </div>
                <label htmlFor="">
                    Enter PX:
                </label>
                <br />
                <input type="text"  {...register('pixel_for_vh', { required: true })} />
                <br />
                <br />
                <label htmlFor="">VH</label>
                <br />
                <input type="text" id='vh_input' {...register('vh')} disabled={true} />
                <br />
                <button type='button' onClick={() => copyBtn('vh_input')} className="btn_copy" style={{ cursor: 'pointer' }}>Copy</button>
                <br />
            </form>
        </div >
    )
}

export default PXTOVW;