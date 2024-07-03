const Headername = ({ title, leftChild, rightChild }) => {
  return (
    <header className="flex items-center py-5">
      <div className="w-[25%] justify-start">{leftChild}</div>
      <div className="w-[50%] size-7 text-xl justify-center text-center content-center">
        {title}
      </div>
      <div className="w-[25%] justify-end ">{rightChild}</div>
    </header>
  );
};

export default Headername;
