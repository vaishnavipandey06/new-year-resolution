export default function AdminPanel({ data, setData }) {
  return (
    <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-lg p-4 rounded-xl text-white w-72">
      <h2 className="text-lg font-bold mb-2">Admin Panel</h2>

      <input
        className="w-full mb-2 p-2 rounded bg-white/10"
        placeholder="Name"
        value={data.name}
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

      <input
        className="w-full p-2 rounded bg-white/10"
        placeholder="Role"
        value={data.role}
        onChange={(e) =>
          setData({ ...data, role: e.target.value })
        }
      />

      <textarea
        className="w-full mt-2 p-2 rounded bg-white/10"
        placeholder="Description"
        value={data.description}
        onChange={(e) =>
          setData({ ...data, description: e.target.value })
        }
      />

     </div>
  );
}
