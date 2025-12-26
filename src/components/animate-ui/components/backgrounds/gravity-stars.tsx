'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type GlowAnimation = 'instant' | 'ease' | 'spring';
type StarsInteractionType = 'bounce' | 'merge';

type GravityStarsProps = {
  starsCount?: number;
  starsSize?: number;
  starsOpacity?: number;
  glowIntensity?: number;
  glowAnimation?: GlowAnimation;
  movementSpeed?: number;
  starsInteraction?: boolean;
  starsInteractionType?: StarsInteractionType;
} & React.ComponentProps<'div'>;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  mass: number;
  glowMultiplier?: number;
  glowVelocity?: number;
};

function GravityStarsBackground({
  starsCount = 75,
  starsSize = 2,
  starsOpacity = 0.75,
  glowIntensity = 15,
  glowAnimation = 'ease',
  movementSpeed = 0.3,
  starsInteraction = false,
  starsInteractionType = 'bounce',
  className,
  ...props
}: GravityStarsProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const animRef = React.useRef<number | null>(null);
  const starsRef = React.useRef<Particle[]>([]);
  const [dpr, setDpr] = React.useState(1);
  const [canvasSize, setCanvasSize] = React.useState({
    width: 800,
    height: 600,
  });

  const readColor = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return '#ffffff';
    const cs = getComputedStyle(el);
    return cs.color || '#ffffff';
  }, []);

  const initStars = React.useCallback(
    (w: number, h: number) => {
      starsRef.current = Array.from({ length: starsCount }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = movementSpeed * (0.5 + Math.random() * 0.5);
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * starsSize + 1,
          opacity: starsOpacity,
          baseOpacity: starsOpacity,
          mass: Math.random() * 0.5 + 0.5,
          glowMultiplier: 1,
          glowVelocity: 0,
        };
      });
    },
    [starsCount, movementSpeed, starsOpacity, starsSize],
  );

  const redistributeStars = React.useCallback((w: number, h: number) => {
    starsRef.current.forEach((p) => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
    });
  }, []);

  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    setDpr(nextDpr);
    canvas.width = Math.max(1, Math.floor(rect.width * nextDpr));
    canvas.height = Math.max(1, Math.floor(rect.height * nextDpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    setCanvasSize({ width: rect.width, height: rect.height });
    if (starsRef.current.length === 0) {
      initStars(rect.width, rect.height);
    } else {
      redistributeStars(rect.width, rect.height);
    }
  }, [initStars, redistributeStars]);

  const updateStars = React.useCallback(() => {
    const w = canvasSize.width;
    const h = canvasSize.height;

    for (let i = 0; i < starsRef.current.length; i++) {
      const p = starsRef.current[i];

      // Keep opacity and glow at base values (no mouse interaction)
      p.opacity = p.baseOpacity;
      p.glowMultiplier = 1;

      if (starsInteraction) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const o = starsRef.current[j];
          const dx2 = o.x - p.x;
          const dy2 = o.y - p.y;
          const d = Math.hypot(dx2, dy2);
          const minD = p.size + o.size + 5;
          if (d < minD && d > 0) {
            if (starsInteractionType === 'bounce') {
              const nx = dx2 / d;
              const ny = dy2 / d;
              const rvx = p.vx - o.vx;
              const rvy = p.vy - o.vy;
              const speed = rvx * nx + rvy * ny;
              if (speed < 0) continue;
              const impulse = (2 * speed) / (p.mass + o.mass);
              p.vx -= impulse * o.mass * nx;
              p.vy -= impulse * o.mass * ny;
              o.vx += impulse * p.mass * nx;
              o.vy += impulse * p.mass * ny;
              const overlap = minD - d;
              const sx = nx * overlap * 0.5;
              const sy = ny * overlap * 0.5;
              p.x -= sx;
              p.y -= sy;
              o.x += sx;
              o.y += sy;
            } else {
              const mergeForce = (minD - d) / minD;
              p.glowMultiplier = (p.glowMultiplier || 1) + mergeForce * 0.5;
              o.glowMultiplier = (o.glowMultiplier || 1) + mergeForce * 0.5;
              const af = mergeForce * 0.01;
              p.vx += dx2 * af;
              p.vy += dy2 * af;
              o.vx -= dx2 * af;
              o.vy -= dy2 * af;
            }
          }
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // Add slight random movement to keep stars active
      p.vx += (Math.random() - 0.5) * 0.001;
      p.vy += (Math.random() - 0.5) * 0.001;

      // Maintain constant speed by normalizing velocity to target speed
      const currentSpeed = Math.hypot(p.vx, p.vy);
      const targetSpeed = movementSpeed * (0.5 + Math.random() * 0.5);
      if (currentSpeed > 0) {
        const speedRatio = targetSpeed / currentSpeed;
        // Only adjust if speed is too low or too high (maintain movement)
        if (currentSpeed < targetSpeed * 0.5 || currentSpeed > targetSpeed * 1.5) {
          p.vx *= speedRatio;
          p.vy *= speedRatio;
        }
      } else {
        // If star is idle, give it a random direction
        const angle = Math.random() * Math.PI * 2;
        p.vx = Math.cos(angle) * targetSpeed;
        p.vy = Math.sin(angle) * targetSpeed;
      }

      // Wrap around edges for infinite loop effect
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    }
  }, [
    canvasSize.width,
    canvasSize.height,
    movementSpeed,
    starsInteraction,
    starsInteractionType,
  ]);

  const drawStars = React.useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const color = readColor();
      for (const p of starsRef.current) {
        ctx.save();
        ctx.shadowColor = color;
        ctx.shadowBlur = glowIntensity * (p.glowMultiplier || 1) * 2;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    [dpr, glowIntensity, readColor],
  );

  const animate = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    updateStars();
    drawStars(ctx);
    animRef.current = requestAnimationFrame(animate);
  }, [updateStars, drawStars]);

  React.useEffect(() => {
    resizeCanvas();
    const container = containerRef.current;
    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(resizeCanvas)
        : null;
    if (container && ro) ro.observe(container);
    const onResize = () => resizeCanvas();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (ro && container) ro.disconnect();
    };
  }, [resizeCanvas]);

  React.useEffect(() => {
    if (starsRef.current.length === 0) {
      initStars(canvasSize.width, canvasSize.height);
    } else {
      starsRef.current.forEach((p) => {
        p.baseOpacity = starsOpacity;
        p.opacity = starsOpacity;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 0) {
          const ratio = movementSpeed / spd;
          p.vx *= ratio;
          p.vy *= ratio;
        }
      });
    }
  }, [
    starsCount,
    starsOpacity,
    movementSpeed,
    canvasSize.width,
    canvasSize.height,
    initStars,
  ]);

  React.useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      data-slot="gravity-stars-background"
      className={cn('relative size-full overflow-hidden', className)}
      {...props}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

export { GravityStarsBackground, type GravityStarsProps };
