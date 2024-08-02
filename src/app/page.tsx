import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Link from "next/link";

const Home = async () => {
  return (
      <main>
          <SignedOut>
              <Link href="/signin">Sign In</Link>
          </SignedOut>
          <SignedIn>
              <UserButton />
          </SignedIn>
      </main>
  );
}

export default Home
