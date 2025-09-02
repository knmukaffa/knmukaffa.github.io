export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Khairun N. Mukaffa</p>
      </div>
    </footer>
  );
}
