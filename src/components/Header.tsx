
interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="caret-blue-600 no-underline m-0 leading-5 text-3xl text-center my-4">
        <span>{title}</span>
      </h1>
      <p className="text-center my-7 leading-6 text-xl">
        <span>{description}</span>
      </p>
    </div>
  );
};

export default Header;
