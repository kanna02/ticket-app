import React, { useState } from 'react';
import { TicketCard } from "../ticket-card/TicketCard";
import "./Status-column.css";

export const StatusColumn = () => {
  const [columns, setColumns] = useState({
    todo: [{ name: "Change default settings", id: "23", priority: "high" }, { name: "Change something settings", id: "24", priority: "medium" }],
    inProgress: [],
    inReview: [],
    done: [],
  });

  const handleDragStart = (e, { id, from }) => {
    const dragInfo = JSON.stringify({ id, from });
    e.dataTransfer.setData("text/plain", dragInfo);
  };

  const handleOnDrop = (e, column) => {
    e.preventDefault();
    const dragInfo = JSON.parse(e.dataTransfer.getData("text/plain"));
    const draggedItem = columns[dragInfo.from].find(item => item.id === dragInfo.id);
  
    if (!draggedItem) {
      // If the draggedItem is not found, we don't want to proceed further
      return;
    }
  
    const newColumns = {
      ...columns,
      [dragInfo.from]: columns[dragInfo.from].filter(item => item.id !== dragInfo.id),
      [column]: [...columns[column], draggedItem]
    };
  
    setColumns(newColumns);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary for the onDrop event to fire
  };

  return (
    <div className="board">
      {Object.entries(columns).map(([columnKey, columnItems]) => (
        <div className="column" key={columnKey}>
          <div className="column-header">{columnKey.toUpperCase()}</div>
          <div className="column-content"
               onDrop={e => handleOnDrop(e, columnKey)}
               onDragOver={handleDragOver}>
            {columnItems.map((project, index) => (
              <div 
                key={index} 
                draggable 
                onDragStart={(e) => handleDragStart(e, { id: project.id, from: columnKey })}
              >
                <TicketCard 
                  name={project.name}
                  id={project.id} 
                  priority={project.priority}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};