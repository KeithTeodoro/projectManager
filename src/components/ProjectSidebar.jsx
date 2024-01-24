import Button from "./Button";
export default function ProjectSidebar({
  onAddProjectClick,
  projects,
  onSelect,
}) {
  return (
    <section className="w-1/3 bg-stone-900 md:w-72 rounded-r-xl px-8 py-16">
      <h2 className="text-stone-200 font-bold md:text-xl uppercase mb-8">
        Your Projects
      </h2>
      <Button onClick={onAddProjectClick}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 text-stone-400 ";

          return (
            <li key={project.newId}>
              <button
                className={cssClasses}
                onClick={() => onSelect(project.newId)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
