import Link from 'next/link'
import React from 'react'

const Button = (props: any) => {
    return (
        <button onClick={props.onClick} className={props.style}>{props.text}</button>
    )
}

export default Button