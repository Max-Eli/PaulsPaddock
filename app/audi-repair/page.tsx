import { MakePage, makeMetadata } from "@/app/components/MakePage";

export const metadata = makeMetadata("audi");

export default function Page() {
  return <MakePage slug="audi" />;
}
