import { TicketCard } from "../components";
import avatar from "../images/spike_duck.png";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Devin Curtis",
      avatar: `${avatar}`,
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.",
      timestamp: "4-14-2022T15:45:00+0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and Sell AI Model",
      owner: "Brandon Curtis",
      avatar: `${avatar}`,
      status: "in progress",
      priority: 2,
      progress: 70,
      description: "Make a video about AI.",
      timestamp: "4-15-2022T15:46:00+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Build a bot",
      owner: "Brandon Curtis",
      avatar: `${avatar}`,
      status: "stuck",
      priority: 3,
      progress: 10,
      description: "Make a video about making a bot.",
      timestamp: "4-16-2022T15:47:00+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(185,255,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
