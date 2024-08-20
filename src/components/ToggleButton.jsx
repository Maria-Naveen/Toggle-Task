const ToggleButton = ({ toggle, onClick }) => {
  return (
    <div className="w-24 mx-auto">
      <button
        className="w-full bg-white p-8 transform hover:scale-110 duration-100"
        onClick={onClick}
      >
        {toggle ? "On" : "Off"}
      </button>
    </div>
  );
};

export default ToggleButton;
