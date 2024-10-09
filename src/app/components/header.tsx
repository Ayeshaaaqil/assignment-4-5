import Link from "next/link";

export default function Header() {
  return (
    <header
    className="styles.header">
      <div className="styles.logo">
        <h1 style ={{
          color:"red"
        }}
        className="fw-bold text-dark"> MY FLOWER WEBSITE</h1>
        </div>

      <nav className="style.nav">
        <ul className="container flex gap-8">
          <li>
            <Link href="/">
            
        <h1 style ={{
          color:"coral"
        }}
        className="fw-bold text-dark"> Home</h1></Link>
          </li>

          <li>
            <Link href="/responsive">
            <h1 style ={{
          color:"coral"
        }}
        className="fw-bold text-dark"> Media Query Example</h1></Link>
          </li>
          
          

        </ul>
      </nav>
    </header>
  );
}