import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addProject = () => {
    if (!project) return;

    setProjects([...projects, project]);
    setProject("");
  };

  const deleteProject = (index) => {
    setProjects(
      projects.filter((_, i) => i !== index)
    );
  };

  const editProject = (index) => {
    setProject(projects[index]);
    setEditIndex(index);
  };

  const updateProject = () => {
    const updated = [...projects];

    updated[editIndex] = project;

    setProjects(updated);
    setProject("");
    setEditIndex(null);
  };

  return (
    <div className="project-page">
      <h1>Project Management</h1>

      <div className="project-form">
        <input
          type="text"
          placeholder="Enter Project Name"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />

        {editIndex === null ? (
          <button onClick={addProject}>
            Add Project
          </button>
        ) : (
          <button onClick={updateProject}>
            Update Project
          </button>
        )}
      </div>

      <div className="project-list">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <h3>{item}</h3>

            <button onClick={() => editProject(index)}>
              Edit
            </button>

            <button onClick={() => deleteProject(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;