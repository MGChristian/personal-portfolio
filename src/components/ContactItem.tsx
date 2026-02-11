interface ContactItemProps {
  name: string;
  value: string;
  className?: string;
  href?: string;
  icon: React.ComponentType<any>;
}

function ContactItem({ name, value, className, href, icon }: ContactItemProps) {
  const classNameDefault = `border-3 p-2 items-center rounded-md border-stone-800 flex gap-2 hover:-translate-y-2 duration-75 ease-in-out ${className}`;
  const smallClassNameDefault = "font-semibold";
  const Icon = icon;
  const iconClassNameDefault = "h-16 w-16";
  return href ? (
    <a href={href} target="_blank" className={classNameDefault}>
      <Icon className={iconClassNameDefault} />
      <div className="flex flex-col gap-2">
        {value}
        <small className={smallClassNameDefault}>{name}</small>
      </div>
    </a>
  ) : (
    <div className={classNameDefault}>
      <Icon className={iconClassNameDefault} />
      <div className="flex flex-col gap-2">
        {value}
        <small className={smallClassNameDefault}>{name}</small>
      </div>
    </div>
  );
}

export default ContactItem;
