import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { useTodoStore } from "@/lib/store";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export default function TaskForm() {
  const { addTask } = useTodoStore();
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button type="submit" size="icon">
        <Plus />
      </Button>
    </form>
  );
}
