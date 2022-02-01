import { UilHome } from '@iconscout/react-unicons'
import Link from 'next/link'
import styled from 'styled-components'
import Row from './Row'

const Wrapper = styled.span`
    display: block;
    cursor: pointer;
    p {
        font-size: 2rem;
    }
`

const HomeButton = () => {
    return (
        <Wrapper>
            <Link
                href='/'
                passHref
                >
            <Row
                alignItems='center'
                >

                <p
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        margin: '8px'
                    }}
                    > 
                    Home 
                </p>
                <UilHome
                    color='var(--secondary)'
                    size='20'
                    />
                </Row>
            </Link>
        </Wrapper>
    )
}

export default HomeButton