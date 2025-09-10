import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by&nbsp;
        <Link
          href="https://github.com/Lannnnnzzzzzzzzzzz"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Lann Zephry
        </Link>
        .&nbsp;The source code is available on wa&nbsp;
        <Link
          href="https://wa.me/6289518141833?text=Bang%2C%20mau%20source%20code"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          WhatsApp
        </Link>
      </p>
    </footer>
  );
}
