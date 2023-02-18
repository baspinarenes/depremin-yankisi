import { Menu } from "@components/molecules";
import { mainMenuItems, otherPlatforms } from "@content/menus";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-8">
      <h1 className="text-4xl font-bold break-words mb-6 mx-4 xs:mx-8 mt-6">
        Depremin
        <br />
        Yankısı
      </h1>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 mx-8">Hızlı Erişim</h2>
          <Menu data={mainMenuItems} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 mx-8">Diğer Yardım Platformları</h2>
          <Menu data={otherPlatforms} />
        </div>
      </div>
    </main>
  );
}
