import { useState } from "react";
import type { FC } from 'react';
import styled from "styled-components";

interface TopNavigationMenuProps {
  isOpen?: boolean;
}

const StyledTopNavigationMenu = styled.div<TopNavigationMenuProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.6rem;
  width: 130px;
  background-color: ${(p: TopNavigationMenuProps) => p.isOpen ? "var(--menu-footer-background-color)" : 'transparent'};

  position: absolute;
  right: 0;
  top: -10px;
`
const StyledToggleButton = styled.button`
  background: none;
  border: none;
  align-self: end;
`

const StyledNavigation = styled.nav<TopNavigationMenuProps>`
  ul {
    background-color: var(--menu-footer-background-color);
    font-family: Montserrat, sans-serif;
    padding: 0;
    font-size: clamp(1.2rem, 0.9771rem + 0.9143vw, 1.8rem);
    list-style: none;
    font-weight: 600;
  }

  ul a {
    display: block;
    margin-bottom: 2rem;
    text-decoration: none;
    color: white;
  }
`

const TopNavigationMenu: FC<TopNavigationMenuProps> = ({ }) => {

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible)

  return (
    <StyledTopNavigationMenu data-testid="menu" isOpen={isMenuVisible}>
      <StyledToggleButton data-testid="toggleMenuButton" onClick={toggleMenuVisibility}>
        {!isMenuVisible &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -12 42 42" width="42" height="42">
            <rect width={26.783} height={3.652} fill="#fff" rx={1} />
            <rect width={36.522} height={3.652} y={12.174} fill="#fff" rx={1} />
            <rect width={24.348} height={3.652} y={24.348} fill="#fff" rx={1} />
          </svg>}
        {isMenuVisible &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42" height="42">
            <path fill="#fff" d="m35.767 10.176 4.739 4.74-25.59 25.59-4.74-4.739z" />
            <path fill="#fff" d="m41.129 35.644-4.74 4.739L10.8 14.792l4.739-4.74z" />
          </svg>}
      </StyledToggleButton>
      {isMenuVisible &&
        <StyledNavigation data-testid="top-navigation-menu" isOpen={isMenuVisible}>
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </StyledNavigation>
      }
    </StyledTopNavigationMenu>
  )
}

export default TopNavigationMenu;
