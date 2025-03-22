import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Edit, Trash } from "lucide-react";
import { useTodoStore } from "@/lib/store";

export default function TaskList() {
  const { tasks, toggleTask, updateTask, deleteTask } = useTodoStore();
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (index: number) => {
    updateTask(index, editText);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex justify-between gap-2 items-center p-2 border-b ${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(index)}
              className="mr-2"
              id={`completed-${index}`}
            />
            {editIndex === index ? (
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleUpdate(index)}
                autoFocus
              />
            ) : (
              <label htmlFor={`completed-${index}`}>{task.text}</label>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                setEditIndex(index);
                setEditText(task.text);
              }}
              size="icon"
            >
              <Edit />
            </Button>
            <Button onClick={() => deleteTask(index)} size="icon">
              <Trash />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
