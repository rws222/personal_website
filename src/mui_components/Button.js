import Button from '@mui/material/Button';
import styled from 'styled-components';

const StyledButton = styled(Button).attrs((props) => ({
  disableRipple: true,
}))`
  && {
    text-transform: none !important;
    padding: 10px;
    font-weight: bold;
    background-color: var(--accent);
    color: var(--background);
    // transition-duration: var(--transition-dur);

    &:hover {
      background-color: var(--accent-1); 
    }
  }
`;

export default StyledButton;