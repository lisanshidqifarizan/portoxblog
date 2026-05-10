const skills = [
    "html",
    "css",
    "js",
    "next",
    "mongodb",
    "rust",
    "github",
    "git",
    "vsc",
    "tiptap",
    "cloudinary",
];

export default function Skills() {
    return (
        <div className="grid grid-cols-5 place-content-center place-items-center gap-2">
        {skills.map((skill) => (
            <img
            key={skill}
            src={`/img/skills/${skill}.png`}
            alt={skill}
            className="w-10 h-10 object-contain"
            />
        ))}
        </div>
    );
}