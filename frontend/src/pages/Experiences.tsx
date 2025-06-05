import { useState, useEffect } from "react";
import { Experience } from "../types";
import ExperienceCard from "../components/experience-card/experience-card";
import classes from "./Experiences.module.css";
import { fetchExperiences } from "../api";

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getExperiences() {
      try {
        const data = await fetchExperiences();
        setExperiences(data);
        setError(null);
      } catch (err) {
        setError("Failed to load experiences. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    getExperiences();
  }, []);

  if (loading) {
    return <div className={classes.loading}>Loading experiences...</div>;
  }

  if (error) {
    return <div className={classes.error}>{error}</div>;
  }

  if (experiences.length === 0) {
    return <div className={classes.noExperiences}>No experiences found.</div>;
  }

  return (
    <div className={classes.experiences}>
      <h1>My Experiences</h1>
      <div className={classes.grid}>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <p>{experience.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
