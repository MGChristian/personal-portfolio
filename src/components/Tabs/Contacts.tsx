import type { PopUpInterface } from "../../types/PopUpInterface";
import ContactItem from "../ContactItem";
import SignBoard from "../SignBoard";
import { contacts } from "../../constants/contacts";

interface ContactsProps extends PopUpInterface {}

function Contacts({ onClose, coordinates, setCoordinates }: ContactsProps) {
  return (
    <SignBoard
      title="contacts.txt"
      onClose={onClose}
      width="w-xl"
      coordinates={coordinates}
      setCoordinates={setCoordinates}
    >
      <div className="flex flex-col gap-8 px-6 py-8 text-lg">
        <h1 className="text-center text-3xl md:text-4xl">
          Connect With <span className="text-rose-500">Me</span>
        </h1>
        <div className="flex flex-col gap-4">
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              name={contact.name}
              value={contact.value}
              href={contact.href}
              icon={contact.icon}
              className={contact.className}
            />
          ))}
        </div>
      </div>
    </SignBoard>
  );
}

export default Contacts;
