export default function HUDContent({ active }) {
  if (!active) return null;

  const data = {
    projects: "Showcase of frontend builds with modern UI/UX.",
    skills: "React, Tailwind, JavaScript, Python, Docker.",
    experience: "Hands-on development across multiple domains.",
    contact: "Reach out via email or GitHub.",
  };

  return (
    <div>
      <h2 className="text-xl mb-2 capitalize text-cyan-300">{active}</h2>
      <p className="text-sm text-cyan-200/70">{data[active]}</p>
    </div>
  );
}
