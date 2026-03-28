import JarvisText from "./JarvisText";

export default function JarvisPanel({ message }) {
  return (
    <div className="absolute top-6 left-6 w-[320px] border border-cyan-400/30 bg-black/60 backdrop-blur p-4 rounded-lg">
      <div className="text-xs text-cyan-400 mb-2 tracking-wider">
        JARVIS SYSTEM
      </div>

      <JarvisText text={message} />
    </div>
  );
}
