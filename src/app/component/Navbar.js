import Link from 'next/link';
import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-4">
      <ul className="flex items-center">
        <li className="mr-6">
          <Link href="/dashboard">
            <Button variant="primary">Dashboard</Button>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/profile">
            <Button variant="primary">Profile</Button>
          </Link>
        </li>
        <li>
          <Link href="/theme">
            <Button variant="primary">Theme</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;