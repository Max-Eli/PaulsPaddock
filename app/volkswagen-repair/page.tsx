import { MakePage, makeMetadata } from "@/app/components/MakePage";

export const metadata = makeMetadata("volkswagen");

export default function Page() {
  return <MakePage slug="volkswagen" />;
}
