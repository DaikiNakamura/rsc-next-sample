import { Suspense } from "react";
import styles from "../page.module.css";
import { RSComponent } from "../../components/rsc"

export default async function RSCTestPage() {
  
  return (
    <main className={styles.main}>
      <Suspense fallback={<p>loading...</p>}>
        <RSComponent />
      </Suspense>
    </main>
  );
}
