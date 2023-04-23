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
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 5.3rem 8.5rem 2.5rem 11.4rem;
  height: 100%;
  /* background-image: url(/public/images/device-ipad.png); */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* background-position: center 20px; */
  /* overflow: hidden; */

  /* @media only screen and (min-width: 768px) { */
  /*   background-size: contain; */
  /* } */
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
  }
`

const Header: FC = () => {
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
          <SectionSubtitle>Who we are</SectionSubtitle>
          <SectionTitle>Engage brand and increase viewability.</SectionTitle>
          <Paragraph>Elementum sagittis vitae et leo duis ut. Eu
            feugiat pretium nibh ipsum consequat.</Paragraph>
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
