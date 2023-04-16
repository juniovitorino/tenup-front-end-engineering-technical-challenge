import styled from 'styled-components'

const Header = styled.header`
  font-family: Cousine;
  font-weight: bold;
`
const HeaderComp = () => {
  return(
    <Header>
      <h1>My title</h1>
    </Header>
  )
}

export default HeaderComp;
