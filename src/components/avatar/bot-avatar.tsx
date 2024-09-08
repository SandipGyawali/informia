import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src="/bot.png" />
      <AvatarFallback>B</AvatarFallback>
    </Avatar>
  );
};
