import { Provider } from "react-redux";
import { store } from "./context/redux";
import "./styles.css";
import TaskForm from "./components/TaskForm";
import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <TasksHeader />
          <TasksList />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
