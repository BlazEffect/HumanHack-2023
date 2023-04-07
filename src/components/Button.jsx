export default function Button({ handleClick, children, className }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(
        className,
        "border-[#70B839] border-2 py-1 rounded-[10px] bg-[#FEE7CD] text-[18px] w-[150px] uppercase font-[300]"
      )}
    >
      {children}
    </button>
  );
}
