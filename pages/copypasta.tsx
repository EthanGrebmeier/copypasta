import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Body from '../src/components/Body'
import { BottomBorder, LeftBorder, RightBorder, TopBorder } from '../src/components/Border'
import ContentBlock from '../src/components/ContentBlock'
import DiceRoll from '../src/components/DiceRoll'
import HomeButton from '../src/components/HomeButton'
import Row from '../src/components/Row'
import Typer from '../src/components/Typer'
const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  useEffect(() => {
    getNewText()
  }, [])
  const getNewText = () => {
    axios.get('https://www.reddit.com/r/copypasta/random.json').then(res => {
      setText(res.data[0].data.children[0].data.selftext)
      setAuthor(res.data[0].data.children[0].data.author)
    })
  }

  return (
    <Body>
      <Row 
        width='100%'
        maxWidth='880px'
      >
        <ContentBlock
          width='100%'
        >
          <TopBorder
            showDesktop
            showMobile
          />
          <RightBorder
            showDesktop
            showMobile
          />
          <LeftBorder
            showDesktop
            showMobile
          />
          <Row
            width='100%'
            alignItems='center'
            justifyContent='space-between'
          >
            <h1>
              Copypasta Reader
            </h1>
            <HomeButton/>
          </Row>
        </ContentBlock>
      </Row>
      <Row 
        width='100%'
        maxWidth='880px'
        wrap
      >
        <ContentBlock
          width='70%'
          mobileWidth='100%'
          height='400px'
          mobileHeight='53vh'
          flex
        > 
          <TopBorder
            showDesktop
            showMobile
          />
          <RightBorder
            showDesktop
            showMobile
          />
          <BottomBorder
            showDesktop
            showMobile
          />
          <LeftBorder
            showDesktop
            showMobile
          />
          <Typer
            text={text}
          />
        </ContentBlock>
        <ContentBlock
          width='30%'
          mobileWidth='100%'
        >
          <TopBorder
            showDesktop
          />
          <RightBorder
            showDesktop
            showMobile
          />
          <BottomBorder
            showDesktop
            showMobile
          />
          <LeftBorder
            showMobile
          />
          <DiceRoll
            onClick={getNewText}
          />
        </ContentBlock>
      </Row>
      <Row
        width='100%'
        maxWidth='880px'
      >
        <ContentBlock
          width='100%'
        >
          <RightBorder
            showDesktop
            showMobile
          />
          <BottomBorder
            showDesktop
            showMobile
          />
          <LeftBorder
            showDesktop
            showMobile
          />
          <h2> Beautifully Written by: /u/{author} </h2>
          <p> All posts pulled from <a href='www.reddit.com/r/copypasta'> /r/copypasta </a></p>
        </ContentBlock>
      </Row>
    </Body>
  )
}

export default Home
