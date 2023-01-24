// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { validateRmOptions, validateRmOptionsSync } from "../internal/fs/utils.mjs";
import { denoErrorToNodeError } from "../internal/errors.ts";
export function rm(path, optionsOrCallback, maybeCallback) {
    const callback = typeof optionsOrCallback === "function" ? optionsOrCallback : maybeCallback;
    const options = typeof optionsOrCallback === "object" ? optionsOrCallback : undefined;
    if (!callback) throw new Error("No callback function supplied");
    validateRmOptions(path, options, false, (err, options)=>{
        if (err) {
            return callback(err);
        }
        Deno.remove(path, {
            recursive: options?.recursive
        }).then((_)=>callback(null), (err)=>{
            if (options?.force && err instanceof Deno.errors.NotFound) {
                callback(null);
            } else {
                callback(err instanceof Error ? denoErrorToNodeError(err, {
                    syscall: "rm"
                }) : err);
            }
        });
    });
}
export function rmSync(path, options) {
    options = validateRmOptionsSync(path, options, false);
    try {
        Deno.removeSync(path, {
            recursive: options?.recursive
        });
    } catch (err) {
        if (options?.force && err instanceof Deno.errors.NotFound) {
            return;
        }
        if (err instanceof Error) {
            throw denoErrorToNodeError(err, {
                syscall: "stat"
            });
        } else {
            throw err;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvX2ZzL19mc19ybS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuaW1wb3J0IHtcbiAgdmFsaWRhdGVSbU9wdGlvbnMsXG4gIHZhbGlkYXRlUm1PcHRpb25zU3luYyxcbn0gZnJvbSBcIi4uL2ludGVybmFsL2ZzL3V0aWxzLm1qc1wiO1xuaW1wb3J0IHsgZGVub0Vycm9yVG9Ob2RlRXJyb3IgfSBmcm9tIFwiLi4vaW50ZXJuYWwvZXJyb3JzLnRzXCI7XG50eXBlIHJtT3B0aW9ucyA9IHtcbiAgZm9yY2U/OiBib29sZWFuO1xuICBtYXhSZXRyaWVzPzogbnVtYmVyO1xuICByZWN1cnNpdmU/OiBib29sZWFuO1xuICByZXRyeURlbGF5PzogbnVtYmVyO1xufTtcblxudHlwZSBybUNhbGxiYWNrID0gKGVycjogRXJyb3IgfCBudWxsKSA9PiB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gcm0ocGF0aDogc3RyaW5nIHwgVVJMLCBjYWxsYmFjazogcm1DYWxsYmFjayk6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gcm0oXG4gIHBhdGg6IHN0cmluZyB8IFVSTCxcbiAgb3B0aW9uczogcm1PcHRpb25zLFxuICBjYWxsYmFjazogcm1DYWxsYmFjayxcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gcm0oXG4gIHBhdGg6IHN0cmluZyB8IFVSTCxcbiAgb3B0aW9uc09yQ2FsbGJhY2s6IHJtT3B0aW9ucyB8IHJtQ2FsbGJhY2ssXG4gIG1heWJlQ2FsbGJhY2s/OiBybUNhbGxiYWNrLFxuKSB7XG4gIGNvbnN0IGNhbGxiYWNrID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICA/IG9wdGlvbnNPckNhbGxiYWNrXG4gICAgOiBtYXliZUNhbGxiYWNrO1xuICBjb25zdCBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSBcIm9iamVjdFwiXG4gICAgPyBvcHRpb25zT3JDYWxsYmFja1xuICAgIDogdW5kZWZpbmVkO1xuXG4gIGlmICghY2FsbGJhY2spIHRocm93IG5ldyBFcnJvcihcIk5vIGNhbGxiYWNrIGZ1bmN0aW9uIHN1cHBsaWVkXCIpO1xuXG4gIHZhbGlkYXRlUm1PcHRpb25zKFxuICAgIHBhdGgsXG4gICAgb3B0aW9ucyxcbiAgICBmYWxzZSxcbiAgICAoZXJyOiBFcnJvciB8IG51bGwsIG9wdGlvbnM6IHJtT3B0aW9ucykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cbiAgICAgIERlbm8ucmVtb3ZlKHBhdGgsIHsgcmVjdXJzaXZlOiBvcHRpb25zPy5yZWN1cnNpdmUgfSlcbiAgICAgICAgLnRoZW4oKF8pID0+IGNhbGxiYWNrKG51bGwpLCAoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnM/LmZvcmNlICYmIGVyciBpbnN0YW5jZW9mIERlbm8uZXJyb3JzLk5vdEZvdW5kKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgICAgICAgPyBkZW5vRXJyb3JUb05vZGVFcnJvcihlcnIsIHsgc3lzY2FsbDogXCJybVwiIH0pXG4gICAgICAgICAgICAgICAgOiBlcnIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJtU3luYyhwYXRoOiBzdHJpbmcgfCBVUkwsIG9wdGlvbnM/OiBybU9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHZhbGlkYXRlUm1PcHRpb25zU3luYyhwYXRoLCBvcHRpb25zLCBmYWxzZSk7XG4gIHRyeSB7XG4gICAgRGVuby5yZW1vdmVTeW5jKHBhdGgsIHsgcmVjdXJzaXZlOiBvcHRpb25zPy5yZWN1cnNpdmUgfSk7XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGlmIChvcHRpb25zPy5mb3JjZSAmJiBlcnIgaW5zdGFuY2VvZiBEZW5vLmVycm9ycy5Ob3RGb3VuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRocm93IGRlbm9FcnJvclRvTm9kZUVycm9yKGVyciwgeyBzeXNjYWxsOiBcInN0YXRcIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRSxTQUNFLGlCQUFpQixFQUNqQixxQkFBcUIsUUFDaEIsMkJBQTJCO0FBQ2xDLFNBQVMsb0JBQW9CLFFBQVEsd0JBQXdCO0FBZ0I3RCxPQUFPLFNBQVMsR0FDZCxJQUFrQixFQUNsQixpQkFBeUMsRUFDekMsYUFBMEIsRUFDMUI7SUFDQSxNQUFNLFdBQVcsT0FBTyxzQkFBc0IsYUFDMUMsb0JBQ0EsYUFBYTtJQUNqQixNQUFNLFVBQVUsT0FBTyxzQkFBc0IsV0FDekMsb0JBQ0EsU0FBUztJQUViLElBQUksQ0FBQyxVQUFVLE1BQU0sSUFBSSxNQUFNLGlDQUFpQztJQUVoRSxrQkFDRSxNQUNBLFNBQ0EsS0FBSyxFQUNMLENBQUMsS0FBbUIsVUFBdUI7UUFDekMsSUFBSSxLQUFLO1lBQ1AsT0FBTyxTQUFTO1FBQ2xCLENBQUM7UUFDRCxLQUFLLE1BQU0sQ0FBQyxNQUFNO1lBQUUsV0FBVyxTQUFTO1FBQVUsR0FDL0MsSUFBSSxDQUFDLENBQUMsSUFBTSxTQUFTLElBQUksR0FBRyxDQUFDLE1BQWlCO1lBQzdDLElBQUksU0FBUyxTQUFTLGVBQWUsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN6RCxTQUFTLElBQUk7WUFDZixPQUFPO2dCQUNMLFNBQ0UsZUFBZSxRQUNYLHFCQUFxQixLQUFLO29CQUFFLFNBQVM7Z0JBQUssS0FDMUMsR0FBRztZQUVYLENBQUM7UUFDSDtJQUNKO0FBRUosQ0FBQztBQUVELE9BQU8sU0FBUyxPQUFPLElBQWtCLEVBQUUsT0FBbUIsRUFBRTtJQUM5RCxVQUFVLHNCQUFzQixNQUFNLFNBQVMsS0FBSztJQUNwRCxJQUFJO1FBQ0YsS0FBSyxVQUFVLENBQUMsTUFBTTtZQUFFLFdBQVcsU0FBUztRQUFVO0lBQ3hELEVBQUUsT0FBTyxLQUFjO1FBQ3JCLElBQUksU0FBUyxTQUFTLGVBQWUsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pEO1FBQ0YsQ0FBQztRQUNELElBQUksZUFBZSxPQUFPO1lBQ3hCLE1BQU0scUJBQXFCLEtBQUs7Z0JBQUUsU0FBUztZQUFPLEdBQUc7UUFDdkQsT0FBTztZQUNMLE1BQU0sSUFBSTtRQUNaLENBQUM7SUFDSDtBQUNGLENBQUMifQ==