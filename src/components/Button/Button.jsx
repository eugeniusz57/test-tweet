import { FollowingBtn } from "./Button.styled";

const Button = ({ onClick, children }) => {
  return <FollowingBtn onClick={onClick}>{children}</FollowingBtn>;
};

export default Button;
