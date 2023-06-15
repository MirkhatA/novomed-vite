const Button = (props) => {
  const { value } = props;
  return <button className="border bg-lightGreen">{value}</button>;
};

export default Button;
