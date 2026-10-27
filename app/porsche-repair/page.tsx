import { MakePage, makeMetadata } from "@/app/components/MakePage";

export const metadata = makeMetadata("porsche");

export default function Page() {
  return <MakePage slug="porsche" />;
}
