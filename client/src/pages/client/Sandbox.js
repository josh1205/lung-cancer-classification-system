// React
import React, { useState } from 'react';

export default function Sandbox() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <h1>Sandbox</h1>
        </>
    )

}