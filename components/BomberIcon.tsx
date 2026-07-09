export default function BomberIcon({
  className = "h-9 w-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="18" fill="#FCC900" />
      <polygon
        points="50,34 88,58 64,58 58,65 50,58 42,65 36,58 12,58"
        fill="#101010"
      />
    </svg>
  );
}
