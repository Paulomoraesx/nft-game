import { Button } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import celeiroImg from '../../img/map.png'
import galinhaImg from '../../img/Galinha1_Spritesheet.png'

export default function ContainerGame({ henhouses }) {
    const canvasRef = useRef(null);
    const [celeiro, setCeleiro] = useState(false)
    const [galinha, setGalinha] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (celeiro === true) {
            var img = new Image();
            img.src = celeiroImg;
            img.onload = function () {
                ctx.drawImage(img, 0, 0)
            }
        }
        else {
            console.log('vc n tem nenhum celeiro')
        } if (galinha === true) {
            var img2 = new Image();
            img2.src = galinhaImg;
            img2.onload = function () {
                ctx.drawImage(img2, 60, 200)
                ctx.beginPath();
            }
        }
        else {
            console.log('vc n tem nenhuma galinha')
        }

    }, [celeiro, galinha])

    function addHenHouse() {
        setCeleiro(true)
        console.log("entrou")
        console.log(celeiro)
    }
    function addGalinha() {
        setGalinha(true)
        console.log("entrou")
        console.log(galinha)
    }

    return (
        <>
            <canvas id="canvas" ref={canvasRef} style={{ backgroundColor: "green" }} height={315} width={340}>
            </canvas>
            <Button onClick={() => addHenHouse()}>add celeiro</Button>
            <Button onClick={() => addGalinha()}>add galinha</Button>
        </>

    )
}
