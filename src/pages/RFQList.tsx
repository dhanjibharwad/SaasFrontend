import { useEffect, useState } from "react";
import axios from "axios";

export default function RFQList() {
  const [rfqs, setRfqs] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const fetchRFQs = async () => {
    const res = await axios.get("http://localhost:5000/api/rfq");
    setRfqs(res.data);
  };

  const createRFQ = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/rfq/create", { title, category: "General", description: "Test", deadline: "2025-12-31" });
    setTitle("");
    fetchRFQs();
  };

  useEffect(() => { fetchRFQs(); }, []);

  return (
    <div className="p-6">
      <form onSubmit={createRFQ} className="flex gap-2 mb-6">
        <input className="border p-2 rounded" placeholder="RFQ Title"
          value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Create</button>
      </form>
      <ul>
        {rfqs.map((rfq) => (
          <li key={rfq.id} className="p-2 border-b">{rfq.title} - {rfq.status}</li>
        ))}
      </ul>
    </div>
  );
}
