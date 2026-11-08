import { forwardRef, memo } from 'react';
import { sceneAttributes, type Attributes } from './timeline';

interface ArtworkProps {
  idPrefix: string;
  title?: string;
  description?: string;
  time?: number;
}
type Binding = (name: string) => { id: string; 'data-part': string } & Attributes[string];

const CURLS = [
  [-22, -25, 0.76, -34], [-18, -34, 0.91, -12], [-7, -38, 1, 14],
  [5, -39, 0.96, 4], [17, -34, 0.93, 29], [24, -24, 0.7, 52],
  [-26, -17, 0.55, -33], [-14, -26, 1, -18], [-1, -29, 1.04, 26],
  [12, -27, 1, 16], [23, -16, 0.62, 39], [-21, -16, 0.7, -28],
  [-9, -19, 0.85, 15], [3, -21, 0.86, 34], [15, -19, 0.73, 33],
  [-13, -38, 0.56, -37], [0, -43, 0.57, 24], [12, -39, 0.56, 28],
] as const;

function Eyes({ side, prefix, bind }: { side: string; prefix: string; bind: Binding }) {
  return (
    <g {...bind(`eye-${side}`)}>
      <path d="M-7 0Q-1-3.9 6.7-.4Q1.4 3.2-5.4 1.7Z" fill="#F6E9DB" />
      <g clipPath={`url(#${prefix}-eye-clip)`}>
        <g {...bind(`pupil-${side}`)}>
          <ellipse cx="0" cy="-.2" rx="3.15" ry="3.8" fill="#614635" />
          <ellipse cx=".1" cy="-.2" rx="1.85" ry="2.65" fill="#211D1A" />
          <circle cx="-1" cy="-1.45" r=".85" fill="#FFF5E5" />
        </g>
      </g>
      <path d="M-7-1.7Q-1-6 6.7-2.1" fill="none" stroke="#AE7C5E" strokeWidth=".65" opacity=".65" />
      <path d="M-7 0Q-1-3.9 6.7-.4" fill="none" stroke="#60483B" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M-5.4 2Q1.4 4.4 6.7-.4M-5.6 5Q0 7 5 4.7" fill="none" stroke="#986A52" strokeWidth=".65" opacity=".58" />
    </g>
  );
}

function Head({ prefix, bind }: { prefix: string; bind: Binding }) {
  const paint = (name: string) => `url(#${prefix}-${name})`;
  return (
    <g {...bind('head')}>
      <g {...bind('ear-r')}>
        <path d="M-24-10C-36-16-35 4-29 9Q-26 12-24 7L-23 4Z" fill={paint('skin')} />
        <path d="M-28-6Q-33-8-29 3M-29 2-26 5" fill="none" stroke="#AE785A" strokeWidth="1.15" />
      </g>
      <g {...bind('ear-l')}>
        <path d="M24-10C36-16 35 4 29 9Q26 12 24 7L23 4Z" fill={paint('skin')} />
        <path d="M28-6Q33-8 29 3M29 2 26 5" fill="none" stroke="#AE785A" strokeWidth="1.15" />
      </g>
      <path d="M-25-20C-28-7-24 10-17 19C-11 26-4 30 2 29C13 27 22 17 25 3L26-21Q2-40-25-20Z" fill={paint('skin')} stroke="#B88463" strokeWidth=".65" />
      <path d="M-23-5Q-26 14-13 23Q-5 30 3 28C-15 24-20 13-19 2Z" fill="#A47154" opacity=".18" />
      <path d="M-18-17Q-6-26 9-22Q21-18 22-8C11-15-6-15-18-10Z" fill="#F4D0AB" opacity=".22" />
      <g {...bind('features')}>
        <path d="M-20-14Q-13-18-4-14" fill="none" stroke="#332C27" strokeWidth="2.65" strokeLinecap="round" {...bind('brow-r')} />
        <path d="M4-14Q12-18 20-13.5" fill="none" stroke="#332C27" strokeWidth="2.5" strokeLinecap="round" {...bind('brow-l')} />
        <Eyes prefix={prefix} bind={bind} side="r" />
        <Eyes prefix={prefix} bind={bind} side="l" />
        <path d="M1-6C0 0-2 5-1 8Q3 11 8 7" fill="none" stroke="#B17A5B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M-.5 6Q2 3.5 6 5" fill="none" stroke="#F6CEAA" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M-3.5 8.5Q-1 7 1 8.5M6 8Q8.5 7 9 8" fill="none" stroke="#865944" strokeWidth=".8" />
        <path d="M-10 12Q-4 8.7 0 11Q5 9 10.5 11.8" fill="none" stroke="#584235" strokeWidth=".9" strokeLinecap="round" strokeDasharray=".8 .55" opacity=".62" />
        <path d="M-9 17Q0 17 9 14.5" {...bind('mouth')} fill="none" stroke="#7C4B40" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M-6 19Q.5 22 7 18" fill="none" stroke="#CE927C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M-19 11Q-18 20-10 24Q0 33 13 23Q20 18 21 10L19 17Q12 24 8 23Q1 27-6 24Q-13 24-19 11Z" fill="#3C322A" opacity=".77" />
        <path d="M-7 24Q0 22 7 24L6 27Q0 29-6 27Z" fill="#3C322A" opacity=".35" />
        <path d="m-18 13 1 1m1 2 1 1m1 2 1 1m-2-5 .8.7m2 4 1 1m28-9-1 1m-1 2-1 1m-1 2-1 1m-1 2-1 1M-4 25l.6 1m3-1 .5 1m3-1-.5 1" stroke="#46372E" strokeWidth=".75" opacity=".5" strokeLinecap="round" />
        <path d="M-18 11Q-17 14-16 15M17 9Q17 12 16 14" stroke="#B57E61" strokeWidth=".6" fill="none" opacity=".45" />
      </g>
      <path d="M-27-10Q-30-28-19-35Q-4-48 14-37Q32-31 27-10L23-20Q19-22 18-28Q1-22-18-27L-23-16Z" fill={paint('hair')} />
      <path d="M-26-17-24-6M25-17 24-6" stroke="#352E28" strokeWidth="3.3" strokeLinecap="round" />
      {CURLS.map(([x, y, scale, angle], i) => (
        <g key={i} transform={`translate(${x} ${y - 6}) rotate(${angle}) scale(${scale})`}>
          <path d="M-6 3C-13-2-7-11-1-9C8-12 13-2 7 4C4 9-4 10-6 5Z" fill={paint('curl')} />
          <path d="M-5 1C-6-5 3-8 6-3C8 3 1 7-2 4C-4 2-2-1 1 0" fill="none" stroke="#77634F" strokeWidth="1.1" opacity=".48" strokeLinecap="round" />
        </g>
      ))}
      <path d="M-23-10-24-3M24-10 24-3" stroke="#514336" strokeWidth=".7" strokeDasharray=".5 1.4" />
    </g>
  );
}

function Arm({ side, prefix, bind }: { side: string; prefix: string; bind: Binding }) {
  const paint = (name: string) => `url(#${prefix}-${name})`;
  return (
    <g>
      <g {...bind(`arm-${side}-upper`)}>
        <path d="M-13 0Q-15-10 0-12Q15-10 13 0L17 25 14 67Q0 75-13 67L-16 27Q-19 10-13 0Z" fill={paint('jacket-sleeve')} stroke="#A54A2C" strokeWidth=".7" />
        <path d="M-9 9-8 51M-10 61Q0 57 10 63" fill="none" stroke="#FFA276" strokeWidth=".9" opacity=".47" />
        <path d="M6 22 11 51 7 64" fill="none" stroke="#9C462C" strokeWidth="1.2" opacity=".45" />
      </g>
      <g {...bind(`arm-${side}-forearm`)}>
        <circle r="11.8" fill={paint('jacket-sleeve')} />
        <path d="M-12-3Q-17 12-12 33L-10 58Q0 63 10 58L13 30 12-3Q1-8-12-3Z" fill={paint('jacket-sleeve')} stroke="#AC4C2D" strokeWidth=".7" />
        <path d="M-10 54Q0 57 10 54L10 60Q0 63-10 60Z" fill="#CA592E" />
        <path d="M-7 13-6 47M-8 50 0 47" stroke="#FFA276" strokeWidth=".8" fill="none" opacity=".5" />
        <path d="M-6 60 6 60 5 73-5 73Z" fill={paint('skin')} />
        <path d="M7 54v3m0-8v2" stroke="#F4EFE7" strokeWidth="1.7" strokeLinecap="round" opacity=".8" />
      </g>
      <g {...bind(`hand-${side}`)}>
        <g {...bind(`hand-${side}-0`)}>
          <path d="M-5-1-6 8-11 10Q-15 9-15 12Q-13 18-8 22L-6 31Q-5 34-3 32L-2 25-1 36Q1 39 3 35L3 25 5 34Q7 37 9 33L8 23 11 29Q14 31 14 27L11 17Q10 11 5 9L5-1Z" fill={paint('skin')} stroke="#AE7B5C" strokeWidth=".65" strokeLinejoin="round" />
          <path d="m-5 12 1 9M-1 14 0 25m4-11 1 10m3-9 1 8M-8 19q4-4 10-1M-3 6 3 6" stroke="#AE7B5C" strokeWidth=".65" fill="none" strokeLinecap="round" opacity=".7" />
        </g>
        <g {...bind(`hand-${side}-1`)}>
          <path d="M-5-1-6 9-8 13Q-10 18-6 20L-4 14-4 24Q-3 27-1 25L0 18 1 26Q3 28 4 25L4 18 6 24Q8 25 9 22L8 13Q8 9 5 7L5-1Z" fill={paint('skin')} stroke="#AE7B5C" strokeWidth=".6" />
          <path d="M-3 13 4 12M-2 9 3 9" stroke="#AF7D60" strokeWidth=".65" fill="none" />
        </g>
        <g {...bind(`hand-${side}-2`)}>
          <path d="M-5-1-6 8Q-10 13-6 18L-1 21Q5 22 8 16L8 11Q7 8 4 8L5-1Z" fill={paint('skin')} stroke="#AE7B5C" strokeWidth=".65" />
          {side === 'r' ? <path d="M6 9 6 29" stroke="#25211E" strokeWidth="2.1" strokeLinecap="round" /> : null}
          <path d="M-3 12Q1 9 6 12M-2 16Q3 13 7 15" fill="none" stroke="#A77357" strokeWidth="1.1" strokeLinecap="round" />
          {side === 'r' ? <path d="m6 28 0 4" stroke="#E9D8C1" strokeWidth="1.3" /> : null}
        </g>
        <g {...bind(`hand-${side}-3`)}>
          <path d="M-5-1-6 8Q-9 13-5 20Q-2 24 2 22L3 33Q4 36 6 33L6 20Q11 17 8 12L5 8 5-1Z" fill={paint('skin')} stroke="#AE7B5C" strokeWidth=".65" />
          <path d="M-3 13 5 13M-2 17 5 17" fill="none" stroke="#AC7659" strokeWidth=".75" strokeLinecap="round" />
        </g>
        {side === 'l' ? <g>
          <path d="M-6-2 6-2 6 4-6 4Z" fill={paint('metal')} />
          <rect x="-3.8" y="-3.5" width="7.6" height="9" rx="2.3" fill="#DDD8CE" stroke="#777570" strokeWidth=".7" />
          <path d="M0-1v3l2 1" fill="none" stroke="#55514B" strokeWidth=".7" />
        </g> : null}
      </g>
    </g>
  );
}

function Leg({ side, prefix, bind }: { side: string; prefix: string; bind: Binding }) {
  const paint = (name: string) => `url(#${prefix}-${name})`;
  return (
    <g>
      <g {...bind(`leg-${side}-upper`)}>
        <path d="M-20-8Q0-14 19-7L17 84Q1 91-18 84Z" fill={paint('trouser')} />
        <path d="M-5 9-5 72M13 8 12 70" stroke="#615852" strokeWidth=".8" fill="none" opacity=".5" />
      </g>
      <g {...bind(`leg-${side}-lower`)}>
        <path d="M-18-6Q0-11 17-5L16 88Q0 93-17 88Z" fill={paint('trouser')} />
        <path d="M-5 7-4 78M-16 82Q0 86 15 81" stroke="#70645A" strokeWidth=".8" fill="none" opacity=".4" />
        <path d="M-17 85Q0 89 16 85L16 92-17 92Z" fill="#211E1C" />
      </g>
      <g {...bind(`shoe-${side}`)}>
        <path d="M-14-5Q-1-10 10-5L18 0Q24 3 21 8L-19 8Q-22 2-14-5Z" fill={paint('shoe')} stroke="#141211" strokeWidth=".8" />
        <path d="M-20 6Q2 9 22 5L22 9Q2 13-20 10Z" fill="#DDD2BE" />
        <path d="m-3-4 7 2m-10 0 7 2M11 0q5 0 6 3" stroke="#897C6C" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
    </g>
  );
}

export const WorkspaceArtwork = memo(forwardRef<SVGSVGElement, ArtworkProps>(function WorkspaceArtwork(
  { idPrefix: p, title = 'Mohamed at work', description = 'An illustrated creative workspace.', time = 0 }, ref,
) {
  const attrs = sceneAttributes(time);
  const bind: Binding = (name) => ({ id: `${p}-${name}`, 'data-part': name, ...attrs[name] });
  const paint = (name: string) => `url(#${p}-${name})`;
  return (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width="360" height="424" viewBox="0 0 360 424" preserveAspectRatio="xMidYMid slice"
      role="img" aria-labelledby={`${p}-title ${p}-desc`} data-profile-scene="" data-scene-time={time}
      style={{ display: 'block', width: '100%', height: '100%' }}>
      <title id={`${p}-title`}>{title}</title><desc id={`${p}-desc`}>{description}</desc>
      <defs>
        <linearGradient id={`${p}-wall`} x2="1" y2="1"><stop stopColor="#423B35" /><stop offset=".55" stopColor="#25211F" /><stop offset="1" stopColor="#151312" /></linearGradient>
        <radialGradient id={`${p}-light`} cx=".17" cy=".23" r=".8"><stop stopColor="#E2BC87" stopOpacity=".13" /><stop offset="1" stopColor="#E2BC87" stopOpacity="0" /></radialGradient>
        <linearGradient id={`${p}-skin`} x1=".15" x2="1" y2=".65"><stop stopColor="#EAC3A2" /><stop offset=".48" stopColor="#D5A483" /><stop offset="1" stopColor="#B77F5D" /></linearGradient>
        <radialGradient id={`${p}-hair`} cx=".3" cy=".15" r=".9"><stop stopColor="#4B4034" /><stop offset=".7" stopColor="#27241F" /><stop offset="1" stopColor="#191A18" /></radialGradient>
        <radialGradient id={`${p}-curl`} cx=".3" cy=".2" r=".8"><stop stopColor="#4C4034" /><stop offset=".45" stopColor="#302A24" /><stop offset="1" stopColor="#191A18" /></radialGradient>
        <linearGradient id={`${p}-jacket`} x2="1" y2=".3"><stop stopColor="#F46C38" /><stop offset=".46" stopColor="#F46C38" /><stop offset="1" stopColor="#CA592E" /></linearGradient>
        <linearGradient id={`${p}-jacket-sleeve`} x2="1" y2=".15"><stop stopColor="#CA592E" /><stop offset=".36" stopColor="#F46C38" /><stop offset=".7" stopColor="#ED6A37" /><stop offset="1" stopColor="#B6502C" /></linearGradient>
        <linearGradient id={`${p}-lapel`} x2="1" y2="1"><stop stopColor="#FF9464" /><stop offset=".3" stopColor="#F46C38" /><stop offset="1" stopColor="#CA592E" /></linearGradient>
        <linearGradient id={`${p}-trouser`} x2="1" y2=".05"><stop stopColor="#292522" /><stop offset=".43" stopColor="#423A34" /><stop offset="1" stopColor="#211E1C" /></linearGradient>
        <linearGradient id={`${p}-shoe`} x2=".6" y2="1"><stop stopColor="#4A423A" /><stop offset="1" stopColor="#201D1B" /></linearGradient>
        <linearGradient id={`${p}-board`} x2=".7" y2="1"><stop stopColor="#E9DDC9" /><stop offset="1" stopColor="#BFB29F" /></linearGradient>
        <linearGradient id={`${p}-desk`} x2=".1" y2="1"><stop stopColor="#5A4C3E" /><stop offset="1" stopColor="#302A25" /></linearGradient>
        <linearGradient id={`${p}-metal`} x2="1" y2=".25"><stop stopColor="#807D74" /><stop offset=".46" stopColor="#D8D3C8" /><stop offset="1" stopColor="#67665F" /></linearGradient>
        <clipPath id={`${p}-eye-clip`}><path d="M-7 0Q-1-3.9 6.7-.4Q1.4 3.2-5.4 1.7Z" /></clipPath>
        <clipPath id={`${p}-screen-clip`}><path d="m36 203 78-5v55l-78 5Z" /></clipPath>
      </defs>
      <rect width="360" height="424" fill={paint('wall')} />
      <g {...bind('camera')}>
        <path d="M0 18 360 0V360H0Z" fill={paint('wall')} />
        <path d="M0 0H360V424H0Z" fill={paint('light')} />
        <path d="M0 349 360 320V424H0Z" fill="#2C2723" />
        <path d="M0 349 360 320" stroke="#5B493B" strokeWidth="1.2" />
        <path d="M0 355 360 326" stroke="#F46C38" strokeWidth=".6" opacity=".18" />
        <path d="M10 36V323M14 36V323" stroke="#C4AD8A" strokeWidth=".7" opacity=".13" />
        <path d="M24 29h112" stroke="#F46C38" strokeWidth="2.5" strokeLinecap="round" opacity=".65" />
        {/* Planning board: movable physical cards, one actual bottleneck, then a new route. */}
        <path d="m202 100 145-6v118l-145 5Z" fill="#100F0E" opacity=".24" transform="translate(3 5)" />
        <path d="m200 95 145-6v118l-145 5Z" fill={paint('board')} stroke="#F4EFE7" strokeOpacity=".26" />
        <path d="m207 101 130-5" stroke="#F4EFE7" strokeOpacity=".6" />
        <circle cx="207" cy="102" r="2.8" fill="#F46C38" /><circle cx="338" cy="96" r="2.8" fill="#F46C38" />
        <g {...bind('broken-flow')} fill="none" stroke="#877C6E" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 4">
          <path d="M247 130h21v19h24M305 157v29h-10M248 177h-17v-22" />
        </g>
        <g {...bind('bottleneck')}><circle r="9" fill="#CA592E" fillOpacity=".13" stroke="#F46C38" strokeWidth="1.3" /><path d="M0-4v5m0 3v.4" stroke="#CA592E" strokeWidth="2" strokeLinecap="round" /></g>
        {[0, 1, 2].map((i) => <g key={i} {...bind(`card-${i}`)}>
          <rect x="-15" y="-13" width="32" height="29" rx="4" fill="#554636" opacity=".15" transform="translate(1 2)" />
          <rect x="-16" y="-14" width="32" height="29" rx="4" fill="#F4EFE7" stroke="#FFF8ED" strokeWidth=".8" />
          <g stroke="#4E453B" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {i === 0 ? <><path d="M-4 2c-7-7-2-13 4-13S11-5 4 2L3 6h-6ZM-2 9h4" /><path d="M0-17v2m-11 3 2 1m20-1-2 1" stroke="#CA592E" strokeWidth="1.1" /></> : i === 1 ? <><rect x="-8" y="-8" width="16" height="17" rx="2" /><path d="M-4-11v6m8-6v6M-8-2H8m-12 5h2m4 0h2m-8 4h2m4 0h2" /></> : <><circle r="8" /><circle r="4" /><path d="m0 0 10-10m-4 0h4v4" stroke="#CA592E" /></>}
          </g>
        </g>)}
        <g fill="none" stroke="#CA592E" strokeWidth="2" strokeLinecap="round">
          <path d="M248 151h9" pathLength="100" strokeDasharray="100" {...bind('flow-1')} />
          <path d="M294 151h9" pathLength="100" strokeDasharray="100" {...bind('flow-2')} />
          <path d="m253 147 4 4-4 4" {...bind('arrow-1')} /><path d="m299 147 4 4-4 4" {...bind('arrow-2')} />
        </g>
        {/* Chair remains in place; the hips settle onto its actual seat. */}
        <ellipse cx="204" cy="401" rx="38" ry="5" fill="#100F0E" opacity=".25" />
        <path d="M203 313v73m0 0-29 12m29-12 29 12" stroke={paint('metal')} strokeWidth="4" strokeLinecap="round" />
        <path d="M185 253Q207 238 226 249L228 304Q208 317 187 307Z" fill="#191817" stroke="#62564A" strokeWidth="1.3" />
        <path d="M191 255Q207 246 220 253v43q-14 9-27 4Z" fill="#37302B" />
        <path d="M181 309Q201 301 225 309v9q-22 9-43 1Z" fill="#28231F" stroke="#6A5847" strokeWidth="1" />
        <circle cx="173" cy="399" r="3.5" fill="#171513" /><circle cx="233" cy="399" r="3.5" fill="#171513" />
        {/* Desk and computer. The screen develops into a small functional interface. */}
        <ellipse cx="98" cy="400" rx="89" ry="8" fill="#100F0E" opacity=".28" />
        <path d="M33 301 40 395h7l-3-94m114-10-2 100h7l7-100" fill={paint('metal')} />
        <path d="m16 290 144-11 22 12-144 14Z" fill={paint('desk')} stroke="#7C6853" strokeWidth=".65" />
        <path d="m16 290 22 15 144-14v7L38 312 16 297Z" fill="#2C2520" />
        <path d="m38 305 144-14" stroke="#F46C38" strokeWidth="1.8" />
        <path d="m67 264 18-1 3 18 17 3-39 3 10-5Z" fill={paint('metal')} />
        <path d="m27 194 96-7v81l-96 7Z" fill="#141414" stroke="#837568" strokeWidth="1.4" />
        <path d="m32 199 86-6v66l-86 6Z" fill="#292725" />
        <g clipPath={`url(#${p}-screen-clip)`}>
          <path d="m36 203 78-5v55l-78 5Z" fill="#F4EFE7" />
          <g {...bind('client-screen')}>
            <circle cx="58" cy="221" r="11" fill="#DFD4C4" /><circle cx="58" cy="217" r="3.6" fill="#6A6258" />
            <path d="M51 229q1-12 14 0" fill="#6A6258" />
            <path d="m76 212 28-2m-28 7 23-2m-23 7 26-2" stroke="#B2A591" strokeWidth="2.7" strokeLinecap="round" />
            <path d="m46 243 54-4m-54 9 42-3" stroke="#CA592E" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g {...bind('build-screen')}>
            <path d="m36 203 78-5v8l-78 5Z" fill="#2B2825" /><circle cx="41" cy="206" r="1" fill="#F46C38" /><path d="m48 205 21-1.5" stroke="#F4EFE7" strokeWidth="1.2" opacity=".6" />
            <path d="m36 211 15-1v48l-15 1Z" fill="#DED5C7" /><path d="m40 219 7-.5m-7 7 7-.5m-7 7 7-.5" stroke="#9C8F7C" strokeWidth="1.8" />
            <g {...bind('screen-panel-1')}><path d="m57 217 49-3v8l-49 3Z" fill="#F46C38" /><path d="m61 220 22-1.5" stroke="#FFF7EC" strokeWidth="1.5" strokeLinecap="round" /></g>
            <g {...bind('screen-panel-2')}><path d="m57 231 20-1.5v17l-20 1.5Z" fill="#E6DDCF" /><path d="m61 236 12-.7m-12 5 9-.5" stroke="#9D8F7D" strokeWidth="1.5" /></g>
            <g {...bind('screen-panel-3')}><path d="m83 229 23-1.5v17L83 246Z" fill="#E6DDCF" /><path d="m87 234 14-.9m-14 5 10-.6" stroke="#9D8F7D" strokeWidth="1.5" /></g>
          </g>
        </g>
        <path d="M0 0 0 10 3 7 6 12 8 11 5 6 9 6Z" {...bind('screen-cursor')} fill="#28231E" stroke="#F4EFE7" strokeWidth=".6" />
        <g {...bind('delivered')}><circle cx="107" cy="202" r="9" fill="#C5FF41" stroke="#344029" strokeWidth="1" /><path d="m103 202 3 3 5-6" stroke="#283024" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
        <path d="m83 288 49-4 13 7-50 4Z" fill="#E5DCCC" stroke="#716658" strokeWidth=".7" />
        <path d="m88 289 43-3m-40 5 43-3m-36 5 32-2" stroke="#A39B8C" strokeWidth=".7" />
        <path d="M151 283q-5-6-10-1l-2 4q8 2 14-1Z" fill="#DDD3C1" stroke="#9C8E78" strokeWidth=".6" />
        {/* A propped client brief supports the writing gesture. */}
        <path d="m90 256 27-2 4 30-27 2Z" fill="#11100F" opacity=".2" transform="translate(2 2)" />
        <path d="m90 256 27-2 4 30-27 2Z" fill="#F4EFE7" stroke="#B7A892" strokeWidth=".6" />
        <path d="m96 261 15-1m-14 4 12-1" stroke="#C1B4A1" strokeWidth="1.6" strokeLinecap="round" />
        <g stroke="#CA592E" strokeWidth="1.25" strokeLinecap="round"><path d="m97 270 15-1" {...bind('note-1')} /><path d="m97 275 12-1" {...bind('note-2')} /><path d="m98 280 15-1" {...bind('note-3')} /></g>
        {/* Contact shadows are attached to planted feet, not to a bobbing container. */}
        <ellipse {...bind('ground-shadow')} rx="46" ry="5.5" fill="#100F0E" opacity=".2" />
        <ellipse {...bind('contact-r')} rx="13" ry="2" fill="#0E0D0C" /><ellipse {...bind('contact-l')} rx="13" ry="2" fill="#0E0D0C" />
        <g {...bind('character')}>
          <Leg side="l" prefix={p} bind={bind} /><Leg side="r" prefix={p} bind={bind} />
          <g {...bind('torso')}>
            <path d="M-30-111Q0-125 30-111L28 18Q0 26-29 18Z" fill="#1F1C1B" />
            <path d="M-15-123H15L18-103Q0-89-18-103Z" fill={paint('skin')} />
            <path d="M-19-106Q0-94 20-106L24 14Q0 23-25 13Z" fill="#F4EFE7" />
            <path d="M-13-100Q0-92 13-100" stroke="#D7CBB9" strokeWidth="1.3" fill="none" />
            <path d="M-17-115-40-112Q-49-108-48-96L-42 10Q-24 20-3 11L-7-58Z" fill={paint('jacket')} stroke="#A84A2C" strokeWidth=".75" />
            <path d="M17-115 40-112Q49-108 48-96L42 10Q24 20 3 11L7-58Z" fill={paint('jacket')} stroke="#A84A2C" strokeWidth=".75" />
            <path d="M-17-115-28-105-23-82-30-77-8-44-3-59Z" fill={paint('lapel')} stroke="#FFB18A" strokeWidth=".55" />
            <path d="M17-115 28-105 23-82 30-77 8-44 3-59Z" fill={paint('lapel')} stroke="#FFB18A" strokeWidth=".55" />
            <path d="M-39-102-35-20m70-82-2 76M-39 4Q-25 10-10 7M39 4Q25 10 10 7" fill="none" stroke="#FFA274" strokeWidth=".8" opacity=".68" />
            <path d="M-34-31-12-30v6l-22-1Zm46 1 22-1v5l-22 1Z" fill="#CA592E" stroke="#EF8457" strokeWidth=".5" />
            <path d="m19-79 14-1v3l-14 1Z" fill="#AC4B2B" /><path d="m21-80 2-7 4 5 4-4 1 5" fill="#F4EFE7" />
            <circle cx="10" cy="-30" r="2" fill="#382A23" /><circle cx="10" cy="-15" r="2" fill="#382A23" />
            <path d="M3-54 2 9" stroke="#923F28" strokeWidth=".9" opacity=".5" />
            <Head prefix={p} bind={bind} />
          </g>
          <Arm side="l" prefix={p} bind={bind} /><Arm side="r" prefix={p} bind={bind} />
        </g>
      </g>
    </svg>
  );
}));
