interface IContainer {
  children: React.ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="px-4">{children}</div>;
}

export default Container;
