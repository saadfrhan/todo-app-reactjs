import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="max-w-md mx-auto mt-10 p-5">
        <Card>
          <CardHeader>
            <CardTitle>Todo App</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskForm />
            <TaskList />
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default App;
