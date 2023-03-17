import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const MovieInfoWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const MovieTextWrapper = styled.div`
  padding: 100px 50px;
`;

export const SubMenuList = styled.ul`
  display: flex;
`;

export const SubNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #001a00;
  &.active {
    color: #a01d1d;
  }
`;

export const SubMenuItem = styled.li`
  padding: 10px;
`;
