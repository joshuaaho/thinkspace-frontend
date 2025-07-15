interface ErrorProps {
  error: string;
}
const Error = ({ error }: ErrorProps) => {
  return <p className="text-error text-sm mt-1">{error}</p>;
};

export default Error;
