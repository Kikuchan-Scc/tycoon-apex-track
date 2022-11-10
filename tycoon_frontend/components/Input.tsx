import React from 'react'

const Input = (props: any) => {
    return (
        <div className="form-group mb-6">
            <label className={props.style_label}>{props.text}</label>
            <input value={props.value} name={props.name} type={props.type} onChange={props.state} className={props.style_input} id="exampleInputPassword2"
                placeholder={props.placeholder} />
        </div>
    )
}

export default Input