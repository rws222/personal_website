import Tabs from '@mui/material/Tabs';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
  && {
    background-color: var(--background);
    & .MuiTabs-indicator {
      background-color: var(--accent);
    }
  }
`;

export default StyledTabs;