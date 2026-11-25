import {describe, expect, it} from 'vitest';
import {attackError} from './attack-validation';
const match = {over:false,turn:'player',playerShots:[26]};
describe('Attack safety',()=>{
 it('rejects duplicate attacks without mutating shots',()=>{expect(attackError(match,26)).toBe('Already attacked — choose another element.');expect(match.playerShots).toEqual([26]);});
 it('rejects invalid element targets',()=>{for(const target of [null,0,119,1.5]) expect(attackError(match,target)).toBe('Select a valid element.');});
 it('rejects attacks outside the player turn',()=>{expect(attackError({...match,turn:'bot'},1)).toBe('Wait for your turn.');});
 it('rejects attacks after a mission ends',()=>{expect(attackError({...match,over:true},1)).toBe('No active mission.');});
 it('allows an untried element on the player turn',()=>{expect(attackError(match,118)).toBeNull();});
});
