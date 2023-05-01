const Footer = () => {
  const today = new Date();
  return (
    <footer className="h-[4rem] flex justify-center items-center border-t border-t-black">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
