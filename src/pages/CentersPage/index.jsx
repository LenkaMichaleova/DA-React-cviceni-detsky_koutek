import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './style.css';

export const CentersPage = () => {
  const [center, setCenter] = useState([])

  useEffect(() => {
    const fetchCenter = async () => {
        const response = await fetch(`http://localhost:4000/api/centers`)
        const json = await response.json()
        setCenter(json.data)
    }
    fetchCenter()
  }, [])

  return (
    <div className="navigace navigace-mensi">
      <header>
        <h1>Pobočky</h1>
      </header>
      <main>
        <nav>
        {center.map((c) => (
          <span key={c.id} className="pobocky">
            <Link to={`/CentersPage/${c.id}`}>{c.name}</Link>
            <span> | </span>
          </span    >
        ))}
        </nav>
      </main>
      <Outlet />
    </div>
  );
};
