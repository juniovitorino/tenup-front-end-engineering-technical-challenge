import { useState } from "react";
import type { FC } from 'react';

interface TopNavigationMenuProps { }

const TopNavigationMenu: FC<TopNavigationMenuProps> = ({ }) => {

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const toggleMenuVisibility = () => setIsMenuVisible(!isMenuVisible)

  return (
    <div>
      <button data-testid="open-close" onClick={toggleMenuVisibility}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none">
          <rect width={26.783} height={3.652} fill="#fff" rx={1} />
          <rect width={36.522} height={3.652} y={12.174} fill="#fff" rx={1} />
          <rect width={24.348} height={3.652} y={24.348} fill="#fff" rx={1} />
        </svg>
      </button>
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
