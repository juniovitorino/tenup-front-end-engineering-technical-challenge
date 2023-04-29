import type { FC } from "react";
import styled from "styled-components";
import TenUpLogo from "./TenUpLogo";

interface FooterProps { }

const StyledFooter = styled.footer<FooterProps>`
  width: 100%;
  background-color: var(--menu-footer-background-color);
`

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 0;
`

const Footer: FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <TenUpLogo />
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer;
