import { UilHome } from '@iconscout/react-unicons'
import Link from 'next/link'
import styled from 'styled-components'
import Row from './Row'

const StyledLink = styled(Link)`
    display: block;
    p {
        font-size: 2rem;
    }
`

const HomeButton = () => {
    return (
        <StyledLink
            href='/'
            passHref
        >
           <Row
            alignItems='center'
           >

            <p
                style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                }}
            > 
                Home 
            </p>
            <UilHome
                color='var(--secondary)'
                size='20'
            />
            </Row>
        </StyledLink>
    )
}

export default HomeButton