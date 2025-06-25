export const PreviewProps = {
  title: "Typography",
};

export default function Preview() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-display font-black">Display</h1>
      <h1 className="text-h1 font-semibold">Heading 1</h1>
      <h2 className="text-h2 font-medium">Heading 2</h2>
      <h3 className="text-h3 font-normal">Heading 3</h3>
      <h3 className="text-hmono font-light font-mono uppercase">
        Heading Mono
      </h3>
      <h4 className="text-h4 font-normal">Heading 4</h4>
      <code className="text-mono font-mono font-light">Monotext</code>
      <p className="text-body font-light">Body</p>
      <p className="text-subtext font-light">Subtext</p>
    </div>
  );
}
