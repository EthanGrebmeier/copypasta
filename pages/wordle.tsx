import { NextPage } from "next"
import { useState } from "react"
import Body from "../src/components/Body"
import { BottomBorder, LeftBorder, RightBorder, TopBorder } from "../src/components/Border"
import Column from "../src/components/Column"
import ContentBlock from "../src/components/ContentBlock"
import Row from "../src/components/Row"
import Typer from "../src/components/Typer"
import Letterbox from "../src/components/wordle/LetterBox"
import WordContainer from "../src/components/wordle/WordContainer"
import useTyper from "../src/hooks/useTyper"

const Wordle: NextPage = () : JSX.Element => {
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [greeting, isGreetingFinished] = useTyper({
      inputWords: 'Wordle ' + new Date().toLocaleDateString() ,
      wpm: 1600
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
              <WordContainer/>
            </ContentBlock>
          </Row>
        </Column>
      </Body>
    )
}

export default Wordle