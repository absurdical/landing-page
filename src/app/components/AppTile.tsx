type AppTileProps = {
  id: number;
  symbol: string;
  name: string;
  description: string;
  url: string;
  color: string;
};

export default function AppTile({ id, symbol, name, description, url, color }: AppTileProps) {
  return (
    <a
      href={url}
      className="block p-4 rounded shadow hover:scale-105 hover:shadow-lg transition text-black"
      style={{ backgroundColor: color }}
    >
      <div className="text-sm text-gray-600">{id}</div>
      <div className="text-4xl font-bold">{symbol}</div>
      <div className="mt-2 font-medium">{name}</div>
      <p className="text-sm mt-1">{description}</p>
    </a>
  );
}
