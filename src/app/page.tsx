import Input from "@/components/Input/Input";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Input type="text" clearable={true} />
        <Input type="text" clearable={false} />
        <Input type="password" clearable={true} />
        <Input type="password" clearable={false} />
      </main>
    </div>
  );
}
