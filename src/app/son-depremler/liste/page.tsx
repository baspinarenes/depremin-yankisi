import StateablePart from "../StateablePart";

export default function LastEarthquakesListPage() {
  return (
    <>
      <main className="flex flex-col">
        <h1 className="max-w-5xl mx-auto w-full text-4xl font-bold break-words mb-6 px-4 xs:px-8 mt-6">
          Son
          <br />
          Depremlerin
          <br />
          Listesi
        </h1>
        <p className="max-w-5xl mx-auto w-full mb-6 px-4 xs:px-8">
          Bu veriler Afad&apos;dan alınmakta ve son bir yılda meydana gelen depremleri kapsamaktadır.
        </p>
        <input
          type="text"
          className="max-w-5xl mx-auto bg-gray-100 border border-gray-200 w-full h-10 px-4 xs:px-8 outline-gray-200 placeholder:text-sm placeholder:text text-gray-500 outline-0"
          placeholder="Yükleniyor..."
          disabled
        />
        <StateablePart />
      </main>
    </>
  );
}
