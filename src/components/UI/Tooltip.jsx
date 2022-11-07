const Tooltip = ({ message }) => {
  return (
    <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full relative top-0">
      {message}
      <svg
        class="absolute text-black h-2 left-0 ml-3 bottom-0"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
      >
        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );
};

export default Tooltip;
