import MainLayout from "../../components/layouts/MainLayout";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <>
      <>
        <h1 className={styles.title}>
          Go to <Link href={"/contact"}>Contact</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout> {page} </MainLayout>;
};
