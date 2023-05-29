import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  display: block;
  width: 138px;
  padding: 13px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: #f6f7fb;

  &:last-of-type {
    margin: -1px;
  }

  &.active {
    background: #383847;
    color: #60c470;
  }
`;

export const WrapStyled = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const mobileTab = styled(NavLink)`
  position: sticky;
  bottom: 0;
  display: block;
  width: 138px;
  padding: 13px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  color: #f6f7fb;

  &:last-of-type {
    margin: -1px;
  }
`;
