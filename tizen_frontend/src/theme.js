export const theme = {
  // Color palette based on Ocean Professional
  colors: {
    primary: '#2563EB', // blue
    secondary: '#F59E0B', // amber
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    subtleText: '#6B7280',
    border: '#E5E7EB',
    focus: '#93C5FD',
    overlay: 'rgba(17,24,39,0.5)',
  },
  // Spacing scale
  spacing: {
    xs: 6,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 28,
    xxl: 36,
  },
  // Rounded corners
  radius: {
    sm: 8,
    md: 14,
    lg: 20,
    xl: 28,
    pill: 999,
  },
  // Subtle shadows
  elevation: {
    sm: '0 2px 6px rgba(0,0,0,0.06)',
    md: '0 8px 20px rgba(0,0,0,0.08)',
    lg: '0 16px 40px rgba(0,0,0,0.12)',
  },
  // Gradients
  gradients: {
    map: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(243,244,246,1))',
    header: 'linear-gradient(90deg, rgba(37,99,235,0.12), rgba(245,158,11,0.10))',
    buttonPrimary: 'linear-gradient(135deg, #2563EB, #1E40AF)',
  },
  layout: {
    // Tizen TV canvas is 1920x1080, but we design responsive blocks
    maxWidth: 1720,
    sidebarWidth: 380,
    headerHeight: 120,
    footerHeight: 90,
  },
}
