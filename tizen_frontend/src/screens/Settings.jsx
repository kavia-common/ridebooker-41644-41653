export default function Settings() {
  return (
    <div className="route card">
      <h2 style={{ marginTop: 0, fontSize: 32, fontWeight: 800 }}>Settings</h2>
      <div className="list" style={{ marginTop: 12 }}>
        <div className="list-item">
          <div>🌙 Theme</div>
          <div>Ocean Professional (default)</div>
          <div><button className="btn btn-ghost">Change</button></div>
        </div>
        <div className="list-item">
          <div>🔔 Notifications</div>
          <div>Enabled</div>
          <div><button className="btn btn-ghost">Toggle</button></div>
        </div>
        <div className="list-item">
          <div>🌐 Language</div>
          <div>English (US)</div>
          <div><button className="btn btn-ghost">Change</button></div>
        </div>
      </div>
    </div>
  )
}
