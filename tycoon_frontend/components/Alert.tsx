import React from 'react'
import Swal from 'sweetalert2'
import cookie from 'react-cookies'
import { atom, useAtom } from 'jotai'
import Router from 'next/router'

const replyText = atom<string>('')

const Alert = ({ e }: any) => {
    const [reply, setReply] = useAtom(replyText)
    const submitReply = () => {
        Swal.fire({
            title: '回复@' + e.author.username,
            input: 'textarea',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: '发送',
            cancelButtonText: '取消',
            showLoaderOnConfirm: true,
            preConfirm: (content) => {
                return fetch(`http://localhost:3001/api/replys/list/${e.id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        content: content
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${cookie.load('token')}`
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        Router.reload()
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
        })
    }
    return (
        <button onClick={submitReply} className='absolute right-0 top-0 pr-5 pt-5 flex justify-center items-center space-x-2'>
            <p className='text-[#494949] hover:text-[#8c99a2] text-[14px]'>👈回复</p>
        </button>
    )
}

export default Alert