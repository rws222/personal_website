import Tab from '@mui/material/Tab';
import styled from 'styled-components';

const StyledTab = styled(Tab).attrs((props) => ({
  disableRipple: true,
}))`
  && {
    text-transform: none !important;
    // background-color: var(--background);
    color: var(--text-secondary);
    transition-duration: var(--transition-dur);
    &.Mui-selected {
      color: var(--text-primary);
    }
    &:hover {
      background-color: var(--accent-2); 
    }
  }
`;

export default StyledTab;