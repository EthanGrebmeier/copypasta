import axios from 'axios'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Body from '../src/components/Body'
import { BottomBorder, LeftBorder, RightBorder, TopBorder } from '../src/components/Border'
import Column from '../src/components/Column'
import ContentBlock from '../src/components/ContentBlock'
import DiceRoll from '../src/components/DiceRoll'
import LinkList from '../src/components/LinkList'
import Row from '../src/components/Row'
import Typer from '../src/components/Typer'
import useTyper from '../src/hooks/useTyper'
const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [greeting, isGreetingFinished] = useTyper({
    inputWords: 'Welcome :)' ,
    wpm: 1600
  })
  const [linkOne, isLinkOneFinished] = useTyper({
    inputWords: 'Wordle',
    wpm: 800,
    ready: isGreetingFinished
  })
  const [linkTwo, isLinkTwoFinished] = useTyper({
    inputWords: 'Copypasta Reader',
    wpm: 800,
    ready: isLinkOneFinished
  })

  return (
    <Body>
      <Column
        height='100%'
        width='100%'
      >
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
            <h1>
              {greeting}
            </h1>
          </ContentBlock>
        </Row>
        <Row 
          width='100%'
          maxWidth='880px' 
          flex
        >
          <ContentBlock
            width='70%'
            mobileWidth='100%'
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
            <h3>
              Links
            </h3>
            <LinkList>
              <li>
                <Link
                  href='/wordle'
                >
                  Wordle
                </Link>
              </li>
              <li>
                <Link 
                  href='/copypasta'
                >
                  Copypasta
                </Link>
              </li>
            </LinkList>
          </ContentBlock>
        </Row>
      </Column>
    </Body>
  )
}

export default Home
