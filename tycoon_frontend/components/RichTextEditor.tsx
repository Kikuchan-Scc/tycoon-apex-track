import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme

const RichTextEditor = () => {
    const { quill, quillRef } = useQuill();
    return (
        <div className='pt-5'>
            <div ref={quillRef}></div>
        </div>
    )
}

export default RichTextEditor