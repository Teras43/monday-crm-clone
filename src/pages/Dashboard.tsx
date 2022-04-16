import { useState, useEffect, useContext } from "react";
import { TicketCard } from "../components";
import axios from "axios";
import avatar from "../images/spike_duck.png";

const Dashboard = () => {
  const [tickets, setTickets] = useState<[]>([]);

  useEffect(() => {
    const getTicketData = async () => {
      const response = await axios.get("http://localhost:8000/tickets");
      const dataObject = response.data.data;
      const arrayOfKeys = Object.keys(dataObject);
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
      const formattedArray: any = [];
      arrayOfKeys.forEach((key, index) => {
        const formattedData = { ...arrayOfData[index] };
        formattedData["documentId"] = key;
        formattedArray.push(formattedData);
      });
      console.log("Formatted Array, END: ", formattedArray);
      setTickets(formattedArray);
    };
    getTicketData();
  }, []);

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
                .filter((ticket: any) => ticket.category === uniqueCategory)
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
