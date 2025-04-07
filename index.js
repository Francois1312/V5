import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [weightData, setWeightData] = useState([
    { date: "01/04", weight: 90 },
    { date: "08/04", weight: 89.2 },
    { date: "15/04", weight: 88.6 },
  ]);

  const [dailyLog, setDailyLog] = useState({
    sleep: "",
    hrv: "",
    mood: "",
    motivation: "",
    weight: "",
    nutritionScore: "",
    nutritionNotes: "",
  });

  const objectives = [
    { date: "25 mai", name: "Tour du Léman" },
    { date: "15 juin", name: "Neirivue-Moléson" },
    { date: "Fin juin", name: "La Favorite" },
    { date: "Août", name: "Race Across Switzerland" },
    { date: "19 oct.", name: "Hyrox Genève" },
    { date: "mi-nov.", name: "Corrida Bulloise" },
  ];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Road to Hybrid</h1>

      <section style={{ marginTop: 30 }}>
        <h2>Suivi du poids</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weightData}>
            <XAxis dataKey="date" />
            <YAxis domain={[85, 91]} />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p>Objectif : passer sous 85 kg d'ici août.</p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Objectifs à venir</h2>
        <ul>
          {objectives.map((obj, index) => (
            <li key={index}>{obj.date} – {obj.name}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Plan du jour</h2>
        <p>Aujourd'hui : sortie vélo en Z2, 1h30 tranquille au soleil.</p>
        <button style={{ marginTop: 10 }}>Ajuster ma semaine</button>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Suivi quotidien</h2>
        <input placeholder="Heures de sommeil" value={dailyLog.sleep} onChange={(e) => setDailyLog({ ...dailyLog, sleep: e.target.value })} /><br />
        <input placeholder="VFC / HRV" value={dailyLog.hrv} onChange={(e) => setDailyLog({ ...dailyLog, hrv: e.target.value })} /><br />
        <input placeholder="Humeur / Fatigue (1-10)" value={dailyLog.mood} onChange={(e) => setDailyLog({ ...dailyLog, mood: e.target.value })} /><br />
        <input placeholder="Motivation (1-10)" value={dailyLog.motivation} onChange={(e) => setDailyLog({ ...dailyLog, motivation: e.target.value })} /><br />
        <input placeholder="Poids du jour" value={dailyLog.weight} onChange={(e) => setDailyLog({ ...dailyLog, weight: e.target.value })} /><br />
        <input placeholder="Note nutrition (1-5)" value={dailyLog.nutritionScore} onChange={(e) => setDailyLog({ ...dailyLog, nutritionScore: e.target.value })} /><br />
        <textarea placeholder="Commentaire nutrition / remarques..." value={dailyLog.nutritionNotes} onChange={(e) => setDailyLog({ ...dailyLog, nutritionNotes: e.target.value })} /><br />
      </section>
    </div>
  );
}
