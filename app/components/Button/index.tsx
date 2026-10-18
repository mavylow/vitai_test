import "./style.css";

interface ButtonLinkProps {
  text: string;
  href: string;
}

function ButtonLink({ text, href }: ButtonLinkProps) {
  return (
    <a className="button" href={href}>
      {text}
    </a>
  );
}

export default ButtonLink;
