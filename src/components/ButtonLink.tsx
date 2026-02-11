interface ButtonLinkProps {
  text: string;
  onClick?: () => void;
  icon: React.ComponentType<any>;
}

function ButtonLink({ text, onClick, icon }: ButtonLinkProps) {
  const Icon = icon;
  return (
    <button
      className="flex cursor-pointer flex-col items-center gap-2 rounded-md p-4 hover:-translate-y-2"
      onClick={onClick}
    >
      <Icon className="h-16 w-16" />
      <p className="text-center">{text}</p>
    </button>
  );
}

export default ButtonLink;
