// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { fromFileUrl } from "../path.ts";
export function mkdir(path, options, callback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    let mode = 0o777;
    let recursive = false;
    if (typeof options == "function") {
        callback = options;
    } else if (typeof options === "number") {
        mode = options;
    } else if (typeof options === "boolean") {
        recursive = options;
    } else if (options) {
        if (options.recursive !== undefined) recursive = options.recursive;
        if (options.mode !== undefined) mode = options.mode;
    }
    if (typeof recursive !== "boolean") {
        throw new Deno.errors.InvalidData("invalid recursive option , must be a boolean");
    }
    Deno.mkdir(path, {
        recursive,
        mode
    }).then(()=>{
        if (typeof callback === "function") {
            callback(null);
        }
    }, (err)=>{
        if (typeof callback === "function") {
            callback(err);
        }
    });
}
export function mkdirSync(path, options) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    let mode = 0o777;
    let recursive = false;
    if (typeof options === "number") {
        mode = options;
    } else if (typeof options === "boolean") {
        recursive = options;
    } else if (options) {
        if (options.recursive !== undefined) recursive = options.recursive;
        if (options.mode !== undefined) mode = options.mode;
    }
    if (typeof recursive !== "boolean") {
        throw new Deno.errors.InvalidData("invalid recursive option , must be a boolean");
    }
    Deno.mkdirSync(path, {
        recursive,
        mode
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvX2ZzL19mc19ta2Rpci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuaW1wb3J0IHR5cGUgeyBDYWxsYmFja1dpdGhFcnJvciB9IGZyb20gXCIuL19mc19jb21tb24udHNcIjtcbmltcG9ydCB7IGZyb21GaWxlVXJsIH0gZnJvbSBcIi4uL3BhdGgudHNcIjtcblxuLyoqXG4gKiBUT0RPOiBBbHNvIGFjY2VwdCAncGF0aCcgcGFyYW1ldGVyIGFzIGEgTm9kZSBwb2x5ZmlsbCBCdWZmZXIgdHlwZSBvbmNlIHRoZXNlXG4gKiBhcmUgaW1wbGVtZW50ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZGVub2xhbmQvZGVuby9pc3N1ZXMvMzQwM1xuICovXG50eXBlIE1rZGlyT3B0aW9ucyA9XG4gIHwgeyByZWN1cnNpdmU/OiBib29sZWFuOyBtb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkIH1cbiAgfCBudW1iZXJcbiAgfCBib29sZWFuO1xuXG5leHBvcnQgZnVuY3Rpb24gbWtkaXIoXG4gIHBhdGg6IHN0cmluZyB8IFVSTCxcbiAgb3B0aW9ucz86IE1rZGlyT3B0aW9ucyB8IENhbGxiYWNrV2l0aEVycm9yLFxuICBjYWxsYmFjaz86IENhbGxiYWNrV2l0aEVycm9yLFxuKTogdm9pZCB7XG4gIHBhdGggPSBwYXRoIGluc3RhbmNlb2YgVVJMID8gZnJvbUZpbGVVcmwocGF0aCkgOiBwYXRoO1xuXG4gIGxldCBtb2RlID0gMG83Nzc7XG4gIGxldCByZWN1cnNpdmUgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiKSB7XG4gICAgbW9kZSA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgcmVjdXJzaXZlID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjdXJzaXZlICE9PSB1bmRlZmluZWQpIHJlY3Vyc2l2ZSA9IG9wdGlvbnMucmVjdXJzaXZlO1xuICAgIGlmIChvcHRpb25zLm1vZGUgIT09IHVuZGVmaW5lZCkgbW9kZSA9IG9wdGlvbnMubW9kZTtcbiAgfVxuICBpZiAodHlwZW9mIHJlY3Vyc2l2ZSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICB0aHJvdyBuZXcgRGVuby5lcnJvcnMuSW52YWxpZERhdGEoXG4gICAgICBcImludmFsaWQgcmVjdXJzaXZlIG9wdGlvbiAsIG11c3QgYmUgYSBib29sZWFuXCIsXG4gICAgKTtcbiAgfVxuICBEZW5vLm1rZGlyKHBhdGgsIHsgcmVjdXJzaXZlLCBtb2RlIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWtkaXJTeW5jKHBhdGg6IHN0cmluZyB8IFVSTCwgb3B0aW9ucz86IE1rZGlyT3B0aW9ucyk6IHZvaWQge1xuICBwYXRoID0gcGF0aCBpbnN0YW5jZW9mIFVSTCA/IGZyb21GaWxlVXJsKHBhdGgpIDogcGF0aDtcbiAgbGV0IG1vZGUgPSAwbzc3NztcbiAgbGV0IHJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIikge1xuICAgIG1vZGUgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIikge1xuICAgIHJlY3Vyc2l2ZSA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnJlY3Vyc2l2ZSAhPT0gdW5kZWZpbmVkKSByZWN1cnNpdmUgPSBvcHRpb25zLnJlY3Vyc2l2ZTtcbiAgICBpZiAob3B0aW9ucy5tb2RlICE9PSB1bmRlZmluZWQpIG1vZGUgPSBvcHRpb25zLm1vZGU7XG4gIH1cbiAgaWYgKHR5cGVvZiByZWN1cnNpdmUgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgdGhyb3cgbmV3IERlbm8uZXJyb3JzLkludmFsaWREYXRhKFxuICAgICAgXCJpbnZhbGlkIHJlY3Vyc2l2ZSBvcHRpb24gLCBtdXN0IGJlIGEgYm9vbGVhblwiLFxuICAgICk7XG4gIH1cblxuICBEZW5vLm1rZGlyU3luYyhwYXRoLCB7IHJlY3Vyc2l2ZSwgbW9kZSB9KTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7QUFFMUUsU0FBUyxXQUFXLFFBQVEsYUFBYTtBQVd6QyxPQUFPLFNBQVMsTUFDZCxJQUFrQixFQUNsQixPQUEwQyxFQUMxQyxRQUE0QixFQUN0QjtJQUNOLE9BQU8sZ0JBQWdCLE1BQU0sWUFBWSxRQUFRLElBQUk7SUFFckQsSUFBSSxPQUFPO0lBQ1gsSUFBSSxZQUFZLEtBQUs7SUFFckIsSUFBSSxPQUFPLFdBQVcsWUFBWTtRQUNoQyxXQUFXO0lBQ2IsT0FBTyxJQUFJLE9BQU8sWUFBWSxVQUFVO1FBQ3RDLE9BQU87SUFDVCxPQUFPLElBQUksT0FBTyxZQUFZLFdBQVc7UUFDdkMsWUFBWTtJQUNkLE9BQU8sSUFBSSxTQUFTO1FBQ2xCLElBQUksUUFBUSxTQUFTLEtBQUssV0FBVyxZQUFZLFFBQVEsU0FBUztRQUNsRSxJQUFJLFFBQVEsSUFBSSxLQUFLLFdBQVcsT0FBTyxRQUFRLElBQUk7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTyxjQUFjLFdBQVc7UUFDbEMsTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FDL0IsZ0RBQ0E7SUFDSixDQUFDO0lBQ0QsS0FBSyxLQUFLLENBQUMsTUFBTTtRQUFFO1FBQVc7SUFBSyxHQUNoQyxJQUFJLENBQUMsSUFBTTtRQUNWLElBQUksT0FBTyxhQUFhLFlBQVk7WUFDbEMsU0FBUyxJQUFJO1FBQ2YsQ0FBQztJQUNILEdBQUcsQ0FBQyxNQUFRO1FBQ1YsSUFBSSxPQUFPLGFBQWEsWUFBWTtZQUNsQyxTQUFTO1FBQ1gsQ0FBQztJQUNIO0FBQ0osQ0FBQztBQUVELE9BQU8sU0FBUyxVQUFVLElBQWtCLEVBQUUsT0FBc0IsRUFBUTtJQUMxRSxPQUFPLGdCQUFnQixNQUFNLFlBQVksUUFBUSxJQUFJO0lBQ3JELElBQUksT0FBTztJQUNYLElBQUksWUFBWSxLQUFLO0lBRXJCLElBQUksT0FBTyxZQUFZLFVBQVU7UUFDL0IsT0FBTztJQUNULE9BQU8sSUFBSSxPQUFPLFlBQVksV0FBVztRQUN2QyxZQUFZO0lBQ2QsT0FBTyxJQUFJLFNBQVM7UUFDbEIsSUFBSSxRQUFRLFNBQVMsS0FBSyxXQUFXLFlBQVksUUFBUSxTQUFTO1FBQ2xFLElBQUksUUFBUSxJQUFJLEtBQUssV0FBVyxPQUFPLFFBQVEsSUFBSTtJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPLGNBQWMsV0FBVztRQUNsQyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsV0FBVyxDQUMvQixnREFDQTtJQUNKLENBQUM7SUFFRCxLQUFLLFNBQVMsQ0FBQyxNQUFNO1FBQUU7UUFBVztJQUFLO0FBQ3pDLENBQUMifQ==