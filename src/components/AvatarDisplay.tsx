import blankAvatar from "../images/user_blank.png";

type Props = {
  ticket: {
    category: string;
    color: string;
    title: string;
    owner: string;
    avatar: string;
    status: string;
    priority: number;
    progress: number;
    description: string;
    timestamp: string;
  };
};

const AvatarDisplay = ({ ticket }: Props) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={"photo of " + ticket.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
