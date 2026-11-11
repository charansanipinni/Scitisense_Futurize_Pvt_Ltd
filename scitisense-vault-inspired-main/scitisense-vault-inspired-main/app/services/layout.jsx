export default function ServicesLayout({ children, }) {
    return (<div style={{
            background: "#f6f9fb",
            minHeight: "100vh",
            color: "#172b3a",
            fontFamily: "var(--font-display), -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        }}>
      {children}
    </div>);
}
