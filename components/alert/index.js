import styles from "./alert.module.css";
import { clsx } from "clsx";

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
        ["text-red-500"]: true
      }, ["flex justify-center"])}
    >
      {children}
    </div>
  );
}
