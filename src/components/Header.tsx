interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="">
        <span>{title}</span>
      </h1>
      <p className="">
        <span>{description}</span>
      </p>
    </div>
  );
};

export default Header;
