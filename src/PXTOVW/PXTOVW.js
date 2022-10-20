import React, { useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
function PXTOVW(props) {
    const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)



    }

    let pxValue = Number(watch('pixel'));
    let windowCalc = Number(Number(window.innerWidth) / 100);
    let calcValue = Number(pxValue / windowCalc)
    setValue('vw', calcValue.toFixed(2))
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
                <label htmlFor="">VW</label>
                <br />
                <br />
                <input type="text" {...register('vw')} disabled={true} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div >
    )
}

export default PXTOVW;