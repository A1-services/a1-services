type ButtonProps = { children: React.ReactNode; onClick?(): void };

const Button = (props: ButtonProps) => {
  return <button {...props} className=""/>;
};

export default Button;
