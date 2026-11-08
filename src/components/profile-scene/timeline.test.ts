import { describe, expect, it } from 'vitest';
import { CHARACTER_SCALE, DURATION, FLOOR, WALKS, sampleScene, sceneAttributes, walkAt } from './timeline';
const distance = (a: {x:number;y:number}, b: {x:number;y:number}) => Math.hypot(a.x-b.x,a.y-b.y);

describe('Mohamed workspace choreography', () => {
  it('keeps bone lengths fixed through all reaches, elbow transitions and sit/stand poses', () => {
    for(let t=0;t<DURATION;t+=1/60){const f=sampleScene(t);
      for(const arm of f.arms){expect(distance(arm.start,arm.joint)).toBeCloseTo(68,5);expect(distance(arm.joint,arm.end)).toBeCloseTo(70,5);}
      for(const leg of f.legs){expect(distance(leg.start,leg.joint)).toBeCloseTo(84,5);expect(distance(leg.joint,leg.end)).toBeCloseTo(92,5);}
    }
  });
  it('plants the stance foot in world space and lands both feet at arrival', () => {
    for(const walk of WALKS){for(let step=0;step<=walk.steps;step++){
      const phase=(u:number)=>walk.start+(step+u)/(walk.steps+1)*(walk.end-walk.start);
      const a=walkAt(phase(.2),walk),b=walkAt(phase(.8),walk),stance=1-step%2;
      expect(a.feet[stance]).toEqual(b.feet[stance]);expect(a.feet[stance].y).toBe(FLOOR);expect(a.feet[step%2].y).toBeLessThan(FLOOR);
    }const end=walkAt(walk.end,walk);expect(end.x).toBe(walk.to);expect(end.feet[0].x).toBe(walk.to-16);expect(end.feet[1].x).toBe(walk.to+16);}
  });
  it('keeps the hand on each card during all three design drags', () => {
    for(const[start,end,card]of[[11.4,12.4,2],[13,13.8,1],[14,14.6,0]]){
      for(let t=start;t<=end;t+=.03){const f=sampleScene(t),w=f.arms[1].end;
        expect(distance({x:f.pose.x+w.x*CHARACTER_SCALE+16,y:f.pose.y+w.y*CHARACTER_SCALE},f.cards[card])).toBeLessThan(.1);}
    }
  });
  it('has no limb teleportation at chapter or pose boundaries', () => {
    for(let t=0;t<DURATION;t+=1/120){const a=sampleScene(t),b=sampleScene(t+1/120);
      const world=(f:typeof a,p:{x:number;y:number})=>({x:f.pose.x+p.x*CHARACTER_SCALE,y:f.pose.y+p.y*CHARACTER_SCALE});
      for(let i=0;i<2;i++)for(const point of['joint','end']as const)expect(distance(world(a,a.arms[i][point]),world(b,b.arms[i][point]))).toBeLessThan(8);
    }
  });
  it('matches the loop boundary and resets the board outside the camera crop', () => {
    expect(sceneAttributes(DURATION)).toEqual(sceneAttributes(0));
    const a=sampleScene(0),b=sampleScene(DURATION-.001);expect(distance(a.arms[0].end,b.arms[0].end)).toBeLessThan(.01);expect(b.camera).toBeCloseTo(a.camera,6);
    const reset=sampleScene(27.6);for(const card of reset.cards)expect((card.x-16)*reset.camera+reset.cameraX).toBeGreaterThan(360);
  });
});
