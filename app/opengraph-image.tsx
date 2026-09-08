import { ImageResponse } from 'next/og';

export const alt = 'Kanso Living — Japanese-minimalist furniture for a quieter home';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#f4f0e8',
        color: '#1f211d',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: '72px',
        width: '100%',
      }}
    >
      <div
        style={{
          border: '2px solid #273c52',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '62px',
          width: '100%',
        }}
      >
        <div style={{ color: '#273c52', display: 'flex', fontSize: 30, letterSpacing: 12 }}>
          KANSO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontFamily: 'serif', fontSize: 82, lineHeight: 1 }}>
            Less, but better lived.
          </div>
          <div style={{ display: 'flex', fontSize: 25, marginTop: 28, opacity: 0.7 }}>
            Japanese-minimalist furniture for quiet modern homes.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
