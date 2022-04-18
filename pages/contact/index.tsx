import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <>
      <MainLayout>
        <h1 className={styles.title}>
          Go to <Link href={"/"}>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </MainLayout>
    </>
  );
};

export default Contact;
