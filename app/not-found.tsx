import { Sun } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-light-bg grid-pattern py-20">
      <Container>
        <div className="text-center max-w-lg mx-auto bg-white rounded-3xl p-10 border border-slate-200 shadow-xl">
          <div className="w-20 h-20 rounded-3xl solar-gradient mx-auto mb-6 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Sun className="w-10 h-10 text-slate-950" />
          </div>

          <h1 className="text-6xl sm:text-7xl font-black text-amber-600 mb-2">
            404
          </h1>
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Page Not Found
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-sm">
            Looks like this page has gone off the grid. Let&apos;s get you back to clean solar energy.
          </p>
          <Button href="/" size="lg" id="not-found-home" className="font-bold">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
