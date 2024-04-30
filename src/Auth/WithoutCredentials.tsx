type withoutCredentialsProps = {
  children: React.ReactNode;
};

function WithoutCredentials(props: withoutCredentialsProps) {
  const { children } = props;

  return <>{children}</>;
}

export default WithoutCredentials;
