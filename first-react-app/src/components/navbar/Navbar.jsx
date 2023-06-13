import "./index.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/",
    },
    {
      id: 3,
      name: "Contacts",
      url: "/",
    },
  ];

  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li> */}
        {/* ANALOGO A QUANTO SOPRA - ma in rendering multiplo */}
        {links.map((link) => (
          <li className="Navbar__list--item" key={link.id}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
