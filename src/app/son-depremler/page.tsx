import { Menu } from "@components/molecules";
import { lastLastEarthquakesMenuItems } from "@content/menus";

export default function LastEarthquakesPage() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-8">
      <h1 className="text-4xl font-bold break-words mb-6 mx-4 xs:mx-8 mt-6">
        Son
        <br />
        Depremler
      </h1>
      <Menu data={lastLastEarthquakesMenuItems} />
    </main>
  );
}
