const Panel = ({ children, value, chosenTab }) => {
  return <>{value === chosenTab && <>{children}</>}</>;
};

export default Panel;
