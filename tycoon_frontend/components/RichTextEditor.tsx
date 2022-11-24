import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme

const RichTextEditor = () => {
    const { quill, quillRef } = useQuill();
    return (
        <div>
            <div className='h-64' ref={quillRef}></div>
        </div>
    )
}

export default RichTextEditor