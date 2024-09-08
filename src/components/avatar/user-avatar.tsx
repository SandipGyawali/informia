import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserAvatar = () => {
  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src="" />
      <AvatarFallback>S</AvatarFallback>
    </Avatar>
  );
};
