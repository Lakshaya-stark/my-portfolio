export default function HoverProjects({ title, projects }) {
  return (
    <div className="absolute bottom-full mb-4 w-64 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
      <div className="bg-black border border-[#e6af07] p-4 text-xs">
        <div className="mb-2 font-bold">{title}</div>

        {projects.map((p, i) => (
          <p key={i}>- {p}</p>
        ))}
      </div>
    </div>
  );
}
