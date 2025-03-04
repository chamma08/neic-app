const Wrapper = ({ children }) => {
  //return <div className="w-11/12 mx-auto md:w-4/5">{children}</div>;
  return (
    <div className="max-w-[75rem] lg:mx-auto px-5 md:px-10 xl:px-0 w-full">
      {children}
    </div>
  );
};

export default Wrapper;
