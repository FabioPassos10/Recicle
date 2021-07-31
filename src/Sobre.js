import React, { useState } from "react";
import { Button, Fade } from 'reactstrap';


export default function sobre (props) {

    const [fadeIn, setFadeIn] = useState(true);
    const toggle = () => setFadeIn(!fadeIn);

    return(
        <>

            <p id="teste"> teste teste oiiiii ai ai i iaiaifiii i i iogh 423htui3q rhwh </p>
            <div>
                <Button color="primary" onClick={toggle}>Toggle Fade</Button>
                <Fade in={fadeIn} tag="h5" className="mt-3">
                    asdf.
                </Fade>
            </div>

        </>
)

}