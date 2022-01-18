import { useEffect, useState } from "react"
import styled from "styled-components"
import { UilDiceOne, UilDiceTwo, UilDiceThree, UilDiceFour, UilDiceFive, UilDiceSix } from '@iconscout/react-unicons'
const Wrapper = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
`

type DiceRollProps = {
    onClick: () => any; 
}

const DiceRoll = ({onClick} : DiceRollProps) => {
    const [index, setIndex] = useState(0)
    const [speed, setSpeed] = useState(500)
    const dice = [
        <UilDiceOne
            key={0}
            size={90}
            color='var(--dark)'
            onClick={onClick}
        />, 
        <UilDiceTwo
            key={1}
            size={90}
            color='var(--dark)'
            onClick={onClick}
        />, 
        <UilDiceThree
            key={2}
            size={90}
            color='var(--dark)'
            onClick={onClick}
        />, 
        <UilDiceFour
            key={3}
            size={90}
            color='var(--dark)'
            onClick={onClick}
        />, 
        <UilDiceFive
            key={4}
            size={90}
            color='var(--dark)'
            onClick={onClick}
        />, 
        <UilDiceSix
            key={5}
            size={90}
            color='var(--dark)'
            onClick={onClick}
        />
    ]
    useEffect(() => {
     const interval = setInterval(() => {
        setIndex(Math.floor(Math.random() * 6))
     }, speed)  
     return () => {
        clearInterval(interval)
     }
    }, [speed])
    return (
        <Wrapper
            onClick={onClick}
            onMouseEnter={() => {
                setSpeed(100)
            }}
            onMouseLeave={() => {
                setSpeed(500)
            }}
        >
            {dice[index]}
        </Wrapper>
    )
}

export default DiceRoll