const MenuToggle = () => {
  const handleMenu = () => {
    const siteNav = document.getElementById("site-nav");
    siteNav.classList.toggle("hidden");
  };
  return (
    <button className="ms-auto" onClick={handleMenu}>
      Menu
    </button>
  );
};

export default MenuToggle;
