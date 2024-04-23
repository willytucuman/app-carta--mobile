import QRCode from 'qrcode';
import React, {useEffect,useRef} from 'react';

function QRCodeGenerator({url}) {
    const canvasRef = useRef(null);
    useEffect(() => {
        if(canvasRef.current) {
            QRCode.toCanvas(canvasRef.current, url, error => {
                if(error) {
                    console.error('Error en la generacion de codigo QR:', error);
                }
            });
        }
    }, [url]);

    return <canvas ref={canvasRef} />;
}

export default QRCodeGenerator;