import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<>
			Home

			<Button>
				<Link href="/demo">Go to Demo Page</Link>
			</Button>
		</>
	)
}