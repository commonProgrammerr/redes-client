import styled, { css } from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const contentStyles = css`
  min-width: 220px;
  background-color: ${({ theme }) => theme.color.upper};
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &[data-state="open"] {
    &[data-side="top"] { animation-name: slideDownAndFade }
    &[data-side="right"] { animation-name: slideLeftAndFade }
    &[data-side="bottom"] { animation-name: slideUpAndFade }
    &[data-side="left"] { animation-name: slideRightAndFade }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
${contentStyles};
`;
export const DropdownMenuSubContent = styled(DropdownMenu.SubContent)`${contentStyles}`

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.color.upper};
`;

const itemStyles = css`
  all: unset;
  font-size: 13px;
  line-height: 1px;
  color: ${({ theme }) => theme.color.text};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;

  &[data-disabled] {
    color: ${({ theme }) => theme.color.text2};
    pointer-events: none,
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.color.highligth};
    color: white;
  }
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`${itemStyles}`;
export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem)`${itemStyles}`;
export const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem)`${itemStyles}`;
export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger)` 
  &[data-state="open"] {
    background-color: ${({ theme }) => theme.color.highligth};
    color: white;
  }
  ${itemStyles}
`;

export const DropdownMenuLabel = styled(DropdownMenu.Label)`
  padding-left: 25px;
  font-size: 12px;
  line-Height: 25px;
  color: ${({ theme }) => theme.color.text2};
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.color.text2};
  margin: 5px;`


export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator)`
  position: absolute;
  left: 0px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: currentColor;
`;

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  
  padding: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  color: ${({ theme }) => theme.color.text};
  background-color: transparent;
  cursor: pointer;
  &:focus,
  &:hover { background-color: ${({ theme }) => theme.color.hoverBg}; }
  
`;

