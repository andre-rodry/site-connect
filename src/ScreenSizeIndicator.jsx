import { useState, useEffect, useRef } from 'react';

const ScreenSizeIndicator = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    type: '',
    color: '',
    icon: ''
  });

  const ref = useRef(null);

  // 🔹 posição só no eixo Y (barra horizontal)
  const [positionY, setPositionY] = useState(20);

  const isDragging = useRef(false);
  const offsetY = useRef(0);

  const getScreenType = (width) => {
    if (width < 250) return { type: 'XS', color: '#6b7280', icon: '📏' };
    if (width < 576) return { type: 'Mobile', color: '#ef4444', icon: '📱' };
    if (width < 768) return { type: 'Mobile+', color: '#f59e0b', icon: '📱' };
    if (width < 992) return { type: 'Tablet', color: '#10b981', icon: '📱' };
    if (width < 1280) return { type: 'Notebook', color: '#3b82f6', icon: '💻' };
    return { type: 'Desktop', color: '#8b5cf6', icon: '🖥️' };
  };

  useEffect(() => {
    const handleResize = () => {
      const screenInfo = getScreenType(window.innerWidth);
      setScreenSize({
        width: window.innerWidth,
        ...screenInfo
      });

      // mantém dentro da tela
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setPositionY((y) =>
          Math.min(Math.max(0, y), window.innerHeight - rect.height)
        );
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🟢 DRAG
  const handlePointerDown = (e) => {
    isDragging.current = true;
    const rect = ref.current.getBoundingClientRect();
    offsetY.current = e.clientY - rect.top;
    ref.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const maxY = window.innerHeight - rect.height;

    setPositionY(
      Math.min(Math.max(0, e.clientY - offsetY.current), maxY)
    );
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // 🔴 limite visual de 1280px
  const showLimit = screenSize.width >= 1280;
  const sideOffset = (screenSize.width - 1280) / 2;

  // largura e posição da faixa
  const barWidth =
    screenSize.width <= 1280 ? '100vw' : '1280px';

  const barLeft =
    screenSize.width <= 1280 ? 0 : sideOffset;

  return (
    <>
      {/* 🔴 GUIAS DO VIEWPORT 1280px */}
      {showLimit && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: sideOffset,
              width: '2px',
              height: '100vh',
              backgroundColor: 'red',
              zIndex: 9998,
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: sideOffset + 1280,
              width: '2px',
              height: '100vh',
              backgroundColor: 'red',
              zIndex: 9998,
              pointerEvents: 'none'
            }}
          />
        </>
      )}

      {/* 🟣 BARRA INDICADORA (LIMITADA À GUIA 1280px) */}
      <div
        ref={ref}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          position: 'fixed',
          top: positionY,
          left: barLeft,
          width: barWidth,
          height: '48px',
          backgroundColor: screenSize.color,
          color: 'white',
          opacity: 0.75,
          backdropFilter: 'blur(6px)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'grab',
          userSelect: 'none',
          touchAction: 'none'
        }}
      >
        <span style={{ fontSize: '18px' }}>{screenSize.icon}</span>
        <span>
          {screenSize.type} — {screenSize.width}px
        </span>
      </div>
    </>
  );
};

export default ScreenSizeIndicator;
