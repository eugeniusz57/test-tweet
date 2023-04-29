import styled from "styled-components";

export const FollowingBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  background: ${(p) => (p.isFollowing ? "#5cd3a8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  min-width: 196px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  border: none;
  margin-top: 26px;
  margin-left: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  &:hover {
    background: ${(p) => (p.isFollowing ? "#ebd8ff" : "#5cd3a8")};
  }
`;
