import { useState, useEffect, useContext } from "react";
import { TicketCard } from "../components";
import axios from "axios";
import CategoriesContext from "../context";
// import avatar from "../images/spike_duck.png";

type ticket = {
  status: string;
  progress: number;
  timestamp: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  owner: string;
  avatar: string;
  documentId: string;
};

const Dashboard = () => {
  const [tickets, setTickets] = useState<ticket[]>([]);
  const { categories, setCategories } = useContext(CategoriesContext);

  useEffect(() => {
    const getTicketData = async () => {
      const response = await axios.get("http://localhost:8000/tickets/");
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

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [tickets, setCategories]);

  console.log("categories: ", categories);

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
                .filter((ticket: ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => {
                  console.log("filteredTicket: ", filteredTicket);
                  return (
                    <TicketCard
                      key={_index}
                      color={colors[categoryIndex] || colors[0]}
                      ticket={filteredTicket}
                    />
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
