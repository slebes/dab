// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Buffer } from "../buffer.ts";
export const MAX_RANDOM_VALUES = 65536;
export const MAX_SIZE = 4294967295;
function generateRandomBytes(size) {
    if (size > MAX_SIZE) {
        throw new RangeError(`The value of "size" is out of range. It must be >= 0 && <= ${MAX_SIZE}. Received ${size}`);
    }
    const bytes = Buffer.allocUnsafe(size);
    //Work around for getRandomValues max generation
    if (size > MAX_RANDOM_VALUES) {
        for(let generated = 0; generated < size; generated += MAX_RANDOM_VALUES){
            crypto.getRandomValues(bytes.slice(generated, generated + MAX_RANDOM_VALUES));
        }
    } else {
        crypto.getRandomValues(bytes);
    }
    return bytes;
}
export default function randomBytes(size, cb) {
    if (typeof cb === "function") {
        let err = null, bytes;
        try {
            bytes = generateRandomBytes(size);
        } catch (e) {
            //NodeJS nonsense
            //If the size is out of range it will throw sync, otherwise throw async
            if (e instanceof RangeError && e.message.includes('The value of "size" is out of range')) {
                throw e;
            } else if (e instanceof Error) {
                err = e;
            } else {
                err = new Error("[non-error thrown]");
            }
        }
        setTimeout(()=>{
            if (err) {
                cb(err);
            } else {
                cb(null, bytes);
            }
        }, 0);
    } else {
        return generateRandomBytes(size);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvX2NyeXB0by9yYW5kb21CeXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcIi4uL2J1ZmZlci50c1wiO1xuXG5leHBvcnQgY29uc3QgTUFYX1JBTkRPTV9WQUxVRVMgPSA2NTUzNjtcbmV4cG9ydCBjb25zdCBNQVhfU0laRSA9IDQyOTQ5NjcyOTU7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZTogbnVtYmVyKSB7XG4gIGlmIChzaXplID4gTUFYX1NJWkUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBUaGUgdmFsdWUgb2YgXCJzaXplXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlID49IDAgJiYgPD0gJHtNQVhfU0laRX0uIFJlY2VpdmVkICR7c2l6ZX1gLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBieXRlcyA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKTtcblxuICAvL1dvcmsgYXJvdW5kIGZvciBnZXRSYW5kb21WYWx1ZXMgbWF4IGdlbmVyYXRpb25cbiAgaWYgKHNpemUgPiBNQVhfUkFORE9NX1ZBTFVFUykge1xuICAgIGZvciAobGV0IGdlbmVyYXRlZCA9IDA7IGdlbmVyYXRlZCA8IHNpemU7IGdlbmVyYXRlZCArPSBNQVhfUkFORE9NX1ZBTFVFUykge1xuICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhcbiAgICAgICAgYnl0ZXMuc2xpY2UoZ2VuZXJhdGVkLCBnZW5lcmF0ZWQgKyBNQVhfUkFORE9NX1ZBTFVFUyksXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuLyoqXG4gKiBAcGFyYW0gc2l6ZSBCdWZmZXIgbGVuZ3RoLCBtdXN0IGJlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUJ5dGVzKHNpemU6IG51bWJlcik6IEJ1ZmZlcjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUJ5dGVzKFxuICBzaXplOiBudW1iZXIsXG4gIGNiPzogKGVycjogRXJyb3IgfCBudWxsLCBidWY/OiBCdWZmZXIpID0+IHZvaWQsXG4pOiB2b2lkO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tQnl0ZXMoXG4gIHNpemU6IG51bWJlcixcbiAgY2I/OiAoZXJyOiBFcnJvciB8IG51bGwsIGJ1Zj86IEJ1ZmZlcikgPT4gdm9pZCxcbik6IEJ1ZmZlciB8IHZvaWQge1xuICBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsZXQgZXJyOiBFcnJvciB8IG51bGwgPSBudWxsLCBieXRlczogQnVmZmVyO1xuICAgIHRyeSB7XG4gICAgICBieXRlcyA9IGdlbmVyYXRlUmFuZG9tQnl0ZXMoc2l6ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9Ob2RlSlMgbm9uc2Vuc2VcbiAgICAgIC8vSWYgdGhlIHNpemUgaXMgb3V0IG9mIHJhbmdlIGl0IHdpbGwgdGhyb3cgc3luYywgb3RoZXJ3aXNlIHRocm93IGFzeW5jXG4gICAgICBpZiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBSYW5nZUVycm9yICYmXG4gICAgICAgIGUubWVzc2FnZS5pbmNsdWRlcygnVGhlIHZhbHVlIG9mIFwic2l6ZVwiIGlzIG91dCBvZiByYW5nZScpXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGVyciA9IGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnIgPSBuZXcgRXJyb3IoXCJbbm9uLWVycm9yIHRocm93bl1cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYihlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IobnVsbCwgYnl0ZXMpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZW5lcmF0ZVJhbmRvbUJ5dGVzKHNpemUpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLFNBQVMsTUFBTSxRQUFRLGVBQWU7QUFFdEMsT0FBTyxNQUFNLG9CQUFvQixNQUFNO0FBQ3ZDLE9BQU8sTUFBTSxXQUFXLFdBQVc7QUFFbkMsU0FBUyxvQkFBb0IsSUFBWSxFQUFFO0lBQ3pDLElBQUksT0FBTyxVQUFVO1FBQ25CLE1BQU0sSUFBSSxXQUNSLENBQUMsMkRBQTJELEVBQUUsU0FBUyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQzFGO0lBQ0osQ0FBQztJQUVELE1BQU0sUUFBUSxPQUFPLFdBQVcsQ0FBQztJQUVqQyxnREFBZ0Q7SUFDaEQsSUFBSSxPQUFPLG1CQUFtQjtRQUM1QixJQUFLLElBQUksWUFBWSxHQUFHLFlBQVksTUFBTSxhQUFhLGtCQUFtQjtZQUN4RSxPQUFPLGVBQWUsQ0FDcEIsTUFBTSxLQUFLLENBQUMsV0FBVyxZQUFZO1FBRXZDO0lBQ0YsT0FBTztRQUNMLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPO0FBQ1Q7QUFVQSxlQUFlLFNBQVMsWUFDdEIsSUFBWSxFQUNaLEVBQThDLEVBQy9CO0lBQ2YsSUFBSSxPQUFPLE9BQU8sWUFBWTtRQUM1QixJQUFJLE1BQW9CLElBQUksRUFBRTtRQUM5QixJQUFJO1lBQ0YsUUFBUSxvQkFBb0I7UUFDOUIsRUFBRSxPQUFPLEdBQUc7WUFDVixpQkFBaUI7WUFDakIsdUVBQXVFO1lBQ3ZFLElBQ0UsYUFBYSxjQUNiLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyx3Q0FDbkI7Z0JBQ0EsTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLGFBQWEsT0FBTztnQkFDN0IsTUFBTTtZQUNSLE9BQU87Z0JBQ0wsTUFBTSxJQUFJLE1BQU07WUFDbEIsQ0FBQztRQUNIO1FBQ0EsV0FBVyxJQUFNO1lBQ2YsSUFBSSxLQUFLO2dCQUNQLEdBQUc7WUFDTCxPQUFPO2dCQUNMLEdBQUcsSUFBSSxFQUFFO1lBQ1gsQ0FBQztRQUNILEdBQUc7SUFDTCxPQUFPO1FBQ0wsT0FBTyxvQkFBb0I7SUFDN0IsQ0FBQztBQUNILENBQUMifQ==