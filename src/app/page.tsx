import Features from "@/components/landing/Features";
import Privacy from "@/components/landing/Privacy";
import Tools from "@/components/landing/Tools";
import Welcome from "@/components/landing/Welcome";

export default function Home() {
  return (
    <main className="p-5 md:p-24">
      <Welcome />
      <Features />
      <Privacy />
      <Tools />
    </main>
  );
}
