export default function Title({ children, className }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <h2
      className={classNames(
        className,
        'text-[24px] text-white uppercase mx-auto text-center font-[900] title'
      )}
    >
      {children}
    </h2>
  );
}
