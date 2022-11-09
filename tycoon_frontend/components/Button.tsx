import React from 'react'

const Button = (props: any) => {
    return (
        <button type="submit" className={props.style}>{props.text}</button>
    )
}

export default Button