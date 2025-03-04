import MemberTable from "./MemberTable";

const BASE_URL = process.env.BASE_URL;

async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/api/member`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch members!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading members: ", error);
    return [];
  }
}

const Memberships = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold text-primary">Memberships</h1>
      <div>
        <MemberTable data={data} />
      </div>
    </div>
  );
};

export default Memberships;
