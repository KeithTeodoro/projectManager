import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    setProjectStateId: undefined,
    projects: [],
    tasks: [],
  });
  console.log(projectState);
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.setProjectStateId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleAddProjectClick() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectStateId: null,
      };
    });
  }

  function handleCancelProjectClick() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectStateId: undefined,
      };
    });
  }

  function addNewProject(data) {
    setProjectState((prevState) => {
      const newId = Math.random();
      const newData = {
        ...data,
        newId,
      };

      return {
        ...prevState,
        setProjectStateId: undefined,
        projects: [...prevState.projects, newData],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectStateId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectStateId: undefined,
        projects: prevState.projects.filter(
          (project) => project.newId !== prevState.setProjectStateId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.newId === projectState.setProjectStateId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
      projectStateId={projectState.setProjectStateId}
    />
  );

  if (projectState.setProjectStateId === undefined) {
    content = <NoProjectSelected onAddProjectClick={handleAddProjectClick} />;
  } else if (projectState.setProjectStateId === null) {
    content = (
      <NewProject onCancel={handleCancelProjectClick} onAdd={addNewProject} />
    );
  }

  return (
    <>
      <main className="h-screen mt-8 flex gap-8">
        <ProjectSidebar
          onAddProjectClick={handleAddProjectClick}
          projects={projectState.projects}
          onSelect={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
