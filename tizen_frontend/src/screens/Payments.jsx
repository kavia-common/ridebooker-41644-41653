export default function Payments() {
  return (
    <div className="route card">
      <h2 style={{ marginTop: 0, fontSize: 32, fontWeight: 800 }}>Payment Methods</h2>
      <div className="list" style={{ marginTop: 12 }}>
        <div className="list-item">
          <div>💳 Visa</div>
          <div>**** **** **** 4242</div>
          <div className="helper">Default</div>
        </div>
        <div className="list-item">
          <div>🏦 Bank</div>
          <div>Connected account</div>
          <div><button className="btn btn-ghost">Manage</button></div>
        </div>
      </div>
    </div>
  )
}
