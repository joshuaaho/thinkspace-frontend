import { useParams } from "react-router-dom";

function useRequiredParams<T extends Record<string, any>>() {
  const params = useParams<T>();
  return params as T;
}

export default useRequiredParams;