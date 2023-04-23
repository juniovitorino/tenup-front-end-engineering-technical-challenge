import { useState } from "react";
import type { FC } from 'react';
import styled from "styled-components";

interface TopNavigationMenuProps { }

const StyledToggleButton = styled.button`
  background: none;
  border: none;
  max-width: 40px;
`

const TopNavigationMenu: FC<TopNavigationMenuProps> = ({ }) => {

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible)

  return (
    <div data-testid="menu">
      <StyledToggleButton data-testid="toggleMenuButton" onClick={toggleMenuVisibility}>
        <svg xmlns="http://www.w3.org/2000/svg" height="28">
          <rect width={26.783} height={3.652} fill="#fff" rx={1} />
          <rect width={36.522} height={3.652} y={12.174} fill="#fff" rx={1} />
          <rect width={24.348} height={3.652} y={24.348} fill="#fff" rx={1} />
        </svg>
      </StyledToggleButton>
      {isMenuVisible &&
        <nav data-testid="top-navigation-menu">
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default TopNavigationMenu;
