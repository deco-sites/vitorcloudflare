interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  /**
   * @description The description of color.
   */
  color?: string;
}

export default function Section({ name = "Zisa", color = "pink" }: Props) {
  return (
    <div class={`bg-${color}-200 p-8 rounded-md shadow-md`}>
      <h2 class="text-2xl font-semibold mb-4">Zisa</h2>

      <div class="space-y-4">
        <button class={`btn btn-${color}`}>Click me</button>

        <input
          type="text"
          class="input input-bordered"
          placeholder="Type something"
        />

        <div class={`alert alert-${color}`}>
          {name}
        </div>
      </div>
    </div>
  );
}
