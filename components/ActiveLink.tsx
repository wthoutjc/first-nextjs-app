import { useRouter } from "next/router";

// Components
import Link from "next/link";
import { CSSProperties } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  href: string;
  text: string;
}

const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}> {text} </a>
    </Link>
  );
};

export default ActiveLink;
