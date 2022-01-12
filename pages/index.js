import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alza</title>
        <meta name="description" content="My Alza.cz clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello!</h1>
    </div>
  );
}
