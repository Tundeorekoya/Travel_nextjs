import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean
};
const button = ({ type, title, icon, variant,full }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 border rounded-full ${variant} ${full && `w-full`}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default button;
