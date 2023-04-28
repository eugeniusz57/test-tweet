import { FollowingBtn } from "./Button.styled";

const Button = ({ onClick, children, isFollowing }) => {
  return (
    <FollowingBtn onClick={onClick} isFollowing={isFollowing}>
      {children}
    </FollowingBtn>
  );
};

export default Button;
