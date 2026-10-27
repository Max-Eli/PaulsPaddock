import { MakePage, makeMetadata } from "@/app/components/MakePage";

export const metadata = makeMetadata("mini");

export default function Page() {
  return <MakePage slug="mini" />;
}
