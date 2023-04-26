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
  height: 840px;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: 100%;

  margin: 0 auto;
  padding: 5.3rem 8.5rem 2.5rem 11.4rem;

  background-image: url(/public/images/device-ipad.png);
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (min-width: 768px) {
    background-size: contain;
    background-position: 90%;
  }
`

const ContainerRow = styled.div`
  &.header-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.header-body {
    max-width: 40%;
    padding-left: 5.6rem;
    margin-top: 12.6rem;
  }

  &.header-body h3,
  &.header-body h2 {
    margin: 0 0 1.3rem 0;
  }

  &.header-body p {
    width: 35ch;
    margin-top: 3rem;
  }

  &.header-footer {
    padding-left: 5.2rem;
    margin-top: 4.8rem;
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
