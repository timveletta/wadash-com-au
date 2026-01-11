import React from "react";

export function NavigationMenu({ label, items }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    console.log("toggle");
    setIsMenuOpen((open) => !open);
  };

  return (
    <>
      <button onClick={toggleMenu}>{label}</button>
      {isMenuOpen && (
        <div>
          <ul>
            {items.map((item) => (
              <li>{item.label}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
