import LinkItem from "./LinkItem";

const Links = ({ links, handleCLick }) => {
  return (
    <>
      {links.map((link) => (
        <LinkItem
          id={link.id}
          linkText={link.text}
          link={link.link}
          handleCLick={handleCLick}
        />
      ))}
    </>
  );
};

export default Links;
