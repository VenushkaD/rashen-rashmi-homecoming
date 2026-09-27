import { Suspense } from "react";
import InviteCard from "@/components/InviteCard";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <InviteCard />
    </Suspense>
  );
}
