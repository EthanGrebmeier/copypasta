import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Body from "../src/components/Body"
import { BottomBorder, LeftBorder, RightBorder, TopBorder } from "../src/components/Border"
import Column from "../src/components/Column"
import ContentBlock from "../src/components/ContentBlock"
import HomeButton from "../src/components/HomeButton"
import Row from "../src/components/Row"
import WordContainer from "../src/components/wordle/WordContainer"
import useTyper from "../src/hooks/useTyper"

const Wordle: NextPage = () : JSX.Element => {
  const router = useRouter()
  const [title, setTitle] = useState('Wordle ' + new Date().toLocaleDateString())
  const [greeting, isGreetingFinished] = useTyper({
    inputWords:  title,
    wpm: 1600
  })

  useEffect(() => {
    if (typeof router.query.endless !== 'undefined') {
      setTitle('Endless Mode')
    }
  }, [router])

  
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
              <Row
                width='100%'
                justifyContent='space-between'
                alignItems='center'
              >
                <Link
                  href={{
                    query: {...router.query, endless: 'true'}
                  }}
                  passHref
                >
                  <h1>
                    {greeting}
                  </h1>
                </Link>
                <HomeButton/>
              </Row>
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