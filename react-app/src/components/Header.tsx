import styled from 'styled-components'
import CompanyLogo from './CompanyLogo';
import Menu from './Menu';

const Header = styled.header`
  font-family: Cousine;
  font-weight: bold;
  display: flex;
  align-items: start;
  background-image: var(--hero-background);
  min-height: 50vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-between;
`

interface HeaderInterface {
  siteLogo: string;
}

const HeaderComp= ({ siteLogo }:HeaderInterface) => {
  return(
    <Header>
      <CompanyLogo alt="Company's Logo" src={siteLogo} />
      <Menu />
    </Header>
  )
}

export default HeaderComp;
