import {
  AvatarDisplay,
  StatusDisplay,
  PriorityDisplay,
  ProgressDisplay,
  DeleteBlock,
} from "./";
import { Link } from "react-router-dom";

type Props = {
  color: string;
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

const TicketCard = ({ color, ticket }: Props) => {
  return (
    <div className="ticket-card">
      <Link to={`/ticket/`} id="link">
        <div className="ticket-color" style={{ backgroundColor: color }}></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
      <DeleteBlock />
    </div>
  );
};

export default TicketCard;
