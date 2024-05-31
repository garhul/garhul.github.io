import { Container } from "react-bootstrap";
import Background from "./components/background/background";
import ProjectsPage from "./pages/projects";

export function App() {
  return (
    <Container>
      <Background />
      <ProjectsPage />
    </Container>
  );
}

export default App;
