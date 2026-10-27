import { MakePage, makeMetadata } from "@/app/components/MakePage";

export const metadata = makeMetadata("mercedes-benz");

export default function Page() {
  return <MakePage slug="mercedes-benz" />;
}
