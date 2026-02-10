interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  technologies?: string[];
  onClick?: () => void;
}

function ProjectItem({
  title,
  description,
  image,
  liveLink,
  githubLink,
  technologies,
  onClick,
}: ProjectItemProps) {
  return (
    <div className={`flex gap-4`}>
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-4">
        <img
          src={image}
          alt={title}
          onClick={onClick}
          className="h-48 rounded-md object-cover brightness-75 duration-150 ease-in-out hover:scale-102 hover:cursor-pointer hover:brightness-90"
        />
        {technologies && (
          <div className="flex w-full flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-200 px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-justify text-base">{description}</p>
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-500 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
