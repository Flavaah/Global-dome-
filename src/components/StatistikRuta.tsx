interface StatistikRutaProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatistikRuta({ title, value, color = "bg-[#F5F7FA]" }: StatistikRutaProps) {
  return (
    <div className={`${color} rounded-xl p-6 text-center shadow`}>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
