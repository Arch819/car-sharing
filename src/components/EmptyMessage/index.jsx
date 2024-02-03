import { EmptyMessageStyle } from "./EmptyMessage.styled";

function EmptyMessage({ children }) {
  return <EmptyMessageStyle>{children}</EmptyMessageStyle>;
}

export default EmptyMessage;
