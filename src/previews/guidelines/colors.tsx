export const PreviewProps = {
  title: "Colors",
};

export default function Preview() {
  return (
    <div className="font-mono text-text-reversed text-hmono bg-fg-1 border border-stroke-1 p-16 flex flex-col gap-8 rounded-xl">
      <div className="font-mono text-hmono bg-accent border border-stroke-2 px-16 py-12 rounded-xl">
        ACCENT
      </div>
      <div className="font-mono text-hmono bg-red border border-stroke-2 px-16 py-12 rounded-xl">
        RED
      </div>
      <div className="font-mono text-hmono bg-orange border border-stroke-2 px-16 py-12 rounded-xl">
        ORANGE
      </div>
      <div className="font-mono text-hmono bg-yellow border border-stroke-2 px-16 py-12 rounded-xl">
        YELLOW
      </div>
      <div className="font-mono text-hmono bg-green border border-stroke-2 px-16 py-12 rounded-xl">
        GREEN
      </div>
      <div className="font-mono text-hmono bg-blue border border-stroke-2 px-16 py-12 rounded-xl">
        BLUE
      </div>
      <div className="font-mono text-hmono bg-purple border border-stroke-2  px-16 py-12 rounded-xl">
        PURPLE
      </div>
    </div>
  );
}
