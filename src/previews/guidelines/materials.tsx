export const PreviewProps = {
  title: "Materials",
};

export default function Preview() {
  return (
    <div>
      BG 1
      <div className="font-mono text-hmono bg-fg-1 border border-stroke-1 p-16 flex flex-col gap-8 rounded-xl">
        FG 1
        <div className="font-mono text-hmono bg-fg-2 border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2
        </div>
        <div className="font-mono text-hmono bg-fg-2-accent border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 ACCENT
        </div>
        <div className="font-mono text-hmono bg-fg-2-red border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 RED
        </div>
        <div className="font-mono text-hmono bg-fg-2-orange border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 ORANGE
        </div>
        <div className="font-mono text-hmono bg-fg-2-yellow border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 YELLOW
        </div>
        <div className="font-mono text-hmono bg-fg-2-green border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 GREEN
        </div>
        <div className="font-mono text-hmono bg-fg-2-blue border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 BLUE
        </div>
        <div className="font-mono text-hmono bg-fg-2-purple border border-stroke-2 px-16 py-12 rounded-xl">
          FG 2 PURPLE
        </div>
      </div>
    </div>
  );
}
