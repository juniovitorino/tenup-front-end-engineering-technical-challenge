import { useEffect, useState, useCallback } from 'react';
import type { FC } from 'react';

import styled from 'styled-components'
import Logo from './CompanyLogo';
import TopNavigationMenu from './TopNavigationMenu';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import Button from './Button';
import { isMobileDevice } from '../support/isMobileDevice';
import Paragraph from './Paragraph';

const StyledHeader = styled.header`
  background-image: var(--hero-background);
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 840px;
  }
`

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-image: url(/public/images/device-ipad.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 110%;

  @media only screen and (min-width: 768px) {
    height: 100%;
    padding: 5.3rem 8.5rem 2.5rem 11.4rem;

    background-size: cover;
    background-size: contain;
    background-position: 90%;
  }
`

const ContainerRow = styled.div`
  padding: 2rem;

  &.header-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  &.header-body {
    @media only screen and (min-width: 768px) {
      margin-top: 12.6rem;
      max-width: 40%;
    }
  }

  &.header-body h3,
  &.header-body h2 {
    margin: 0 0 1.3rem 0;
  }

  &.header-body p {
    width: 24ch;
    @media only screen and (min-width: 768px) {
      width: 35ch;
    }
    margin-top: 3rem;
  }

  &.header-footer {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      max-width: 40%;
      flex-direction: row;
    }
  }
`

interface HeaderProps {
  section?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(isMobileDevice());
  const responsiveLogoHandler = useCallback(() => setIsMobile(isMobileDevice()), [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', responsiveLogoHandler);
    return () => {
      window.removeEventListener('resize', responsiveLogoHandler);
    };
  }, [responsiveLogoHandler]);

  return (
    <StyledHeader data-testid="main-header">
      <Container>
        <ContainerRow className="header-head">
          <Logo isMobile={isMobile} />
          <TopNavigationMenu />
        </ContainerRow>
        { /* Note: This 👇🏽 may be improved by using context API and component composition. I kept it simple but worth mentioning. */}
        <ContainerRow className="header-body">
          <SectionSubtitle {...props}>Who we are</SectionSubtitle>
          <SectionTitle {...props}>Engage brand and increase viewability.</SectionTitle>
          <Paragraph {...props}>Elementum sagittis vitae et leo duis ut. Eu feugiat pretium nibh ipsum consequat.</Paragraph>
        </ContainerRow>
        <ContainerRow className="header-footer">
          <Button href="https://example.com/download">Download Now</Button>
          <Button href="https://example.com/lean-more" isLink={true}>Learn More</Button>
        </ContainerRow>
      </Container>
    </StyledHeader>
  )
}

export default Header;
