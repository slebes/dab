// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { intoCallbackAPIWithIntercept, notImplemented } from "../_utils.ts";
import { fromFileUrl } from "../path.ts";
function maybeEncode(data, encoding) {
    if (encoding === "buffer") {
        return new TextEncoder().encode(data);
    }
    return data;
}
function getEncoding(optOrCallback) {
    if (!optOrCallback || typeof optOrCallback === "function") {
        return null;
    } else {
        if (optOrCallback.encoding) {
            if (optOrCallback.encoding === "utf8" || optOrCallback.encoding === "utf-8") {
                return "utf8";
            } else if (optOrCallback.encoding === "buffer") {
                return "buffer";
            } else {
                notImplemented();
            }
        }
        return null;
    }
}
export function readlink(path, optOrCallback, callback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    let cb;
    if (typeof optOrCallback === "function") {
        cb = optOrCallback;
    } else {
        cb = callback;
    }
    const encoding = getEncoding(optOrCallback);
    intoCallbackAPIWithIntercept(Deno.readLink, (data)=>maybeEncode(data, encoding), cb, path);
}
export function readlinkSync(path, opt) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    return maybeEncode(Deno.readLinkSync(path), getEncoding(opt));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvX2ZzL19mc19yZWFkbGluay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuaW1wb3J0IHtcbiAgaW50b0NhbGxiYWNrQVBJV2l0aEludGVyY2VwdCxcbiAgTWF5YmVFbXB0eSxcbiAgbm90SW1wbGVtZW50ZWQsXG59IGZyb20gXCIuLi9fdXRpbHMudHNcIjtcbmltcG9ydCB7IGZyb21GaWxlVXJsIH0gZnJvbSBcIi4uL3BhdGgudHNcIjtcblxudHlwZSBSZWFkbGlua0NhbGxiYWNrID0gKFxuICBlcnI6IE1heWJlRW1wdHk8RXJyb3I+LFxuICBsaW5rU3RyaW5nOiBNYXliZUVtcHR5PHN0cmluZyB8IFVpbnQ4QXJyYXk+LFxuKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgUmVhZGxpbmtPcHRpb25zIHtcbiAgZW5jb2Rpbmc/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5mdW5jdGlvbiBtYXliZUVuY29kZShcbiAgZGF0YTogc3RyaW5nLFxuICBlbmNvZGluZzogc3RyaW5nIHwgbnVsbCxcbik6IHN0cmluZyB8IFVpbnQ4QXJyYXkge1xuICBpZiAoZW5jb2RpbmcgPT09IFwiYnVmZmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGRhdGEpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZXRFbmNvZGluZyhcbiAgb3B0T3JDYWxsYmFjaz86IFJlYWRsaW5rT3B0aW9ucyB8IFJlYWRsaW5rQ2FsbGJhY2ssXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFvcHRPckNhbGxiYWNrIHx8IHR5cGVvZiBvcHRPckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0T3JDYWxsYmFjay5lbmNvZGluZykge1xuICAgICAgaWYgKFxuICAgICAgICBvcHRPckNhbGxiYWNrLmVuY29kaW5nID09PSBcInV0ZjhcIiB8fFxuICAgICAgICBvcHRPckNhbGxiYWNrLmVuY29kaW5nID09PSBcInV0Zi04XCJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJ1dGY4XCI7XG4gICAgICB9IGVsc2UgaWYgKG9wdE9yQ2FsbGJhY2suZW5jb2RpbmcgPT09IFwiYnVmZmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYnVmZmVyXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RJbXBsZW1lbnRlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZGxpbmsoXG4gIHBhdGg6IHN0cmluZyB8IFVSTCxcbiAgb3B0T3JDYWxsYmFjazogUmVhZGxpbmtDYWxsYmFjayB8IFJlYWRsaW5rT3B0aW9ucyxcbiAgY2FsbGJhY2s/OiBSZWFkbGlua0NhbGxiYWNrLFxuKTogdm9pZCB7XG4gIHBhdGggPSBwYXRoIGluc3RhbmNlb2YgVVJMID8gZnJvbUZpbGVVcmwocGF0aCkgOiBwYXRoO1xuXG4gIGxldCBjYjogUmVhZGxpbmtDYWxsYmFjayB8IHVuZGVmaW5lZDtcbiAgaWYgKHR5cGVvZiBvcHRPckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYiA9IG9wdE9yQ2FsbGJhY2s7XG4gIH0gZWxzZSB7XG4gICAgY2IgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGNvbnN0IGVuY29kaW5nID0gZ2V0RW5jb2Rpbmcob3B0T3JDYWxsYmFjayk7XG5cbiAgaW50b0NhbGxiYWNrQVBJV2l0aEludGVyY2VwdDxzdHJpbmcsIFVpbnQ4QXJyYXkgfCBzdHJpbmc+KFxuICAgIERlbm8ucmVhZExpbmssXG4gICAgKGRhdGE6IHN0cmluZyk6IHN0cmluZyB8IFVpbnQ4QXJyYXkgPT4gbWF5YmVFbmNvZGUoZGF0YSwgZW5jb2RpbmcpLFxuICAgIGNiLFxuICAgIHBhdGgsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkbGlua1N5bmMoXG4gIHBhdGg6IHN0cmluZyB8IFVSTCxcbiAgb3B0PzogUmVhZGxpbmtPcHRpb25zLFxuKTogc3RyaW5nIHwgVWludDhBcnJheSB7XG4gIHBhdGggPSBwYXRoIGluc3RhbmNlb2YgVVJMID8gZnJvbUZpbGVVcmwocGF0aCkgOiBwYXRoO1xuXG4gIHJldHVybiBtYXliZUVuY29kZShEZW5vLnJlYWRMaW5rU3luYyhwYXRoKSwgZ2V0RW5jb2Rpbmcob3B0KSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLFNBQ0UsNEJBQTRCLEVBRTVCLGNBQWMsUUFDVCxlQUFlO0FBQ3RCLFNBQVMsV0FBVyxRQUFRLGFBQWE7QUFXekMsU0FBUyxZQUNQLElBQVksRUFDWixRQUF1QixFQUNGO0lBQ3JCLElBQUksYUFBYSxVQUFVO1FBQ3pCLE9BQU8sSUFBSSxjQUFjLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBQ0QsT0FBTztBQUNUO0FBRUEsU0FBUyxZQUNQLGFBQWtELEVBQ25DO0lBQ2YsSUFBSSxDQUFDLGlCQUFpQixPQUFPLGtCQUFrQixZQUFZO1FBQ3pELE9BQU8sSUFBSTtJQUNiLE9BQU87UUFDTCxJQUFJLGNBQWMsUUFBUSxFQUFFO1lBQzFCLElBQ0UsY0FBYyxRQUFRLEtBQUssVUFDM0IsY0FBYyxRQUFRLEtBQUssU0FDM0I7Z0JBQ0EsT0FBTztZQUNULE9BQU8sSUFBSSxjQUFjLFFBQVEsS0FBSyxVQUFVO2dCQUM5QyxPQUFPO1lBQ1QsT0FBTztnQkFDTDtZQUNGLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztBQUNIO0FBRUEsT0FBTyxTQUFTLFNBQ2QsSUFBa0IsRUFDbEIsYUFBaUQsRUFDakQsUUFBMkIsRUFDckI7SUFDTixPQUFPLGdCQUFnQixNQUFNLFlBQVksUUFBUSxJQUFJO0lBRXJELElBQUk7SUFDSixJQUFJLE9BQU8sa0JBQWtCLFlBQVk7UUFDdkMsS0FBSztJQUNQLE9BQU87UUFDTCxLQUFLO0lBQ1AsQ0FBQztJQUVELE1BQU0sV0FBVyxZQUFZO0lBRTdCLDZCQUNFLEtBQUssUUFBUSxFQUNiLENBQUMsT0FBc0MsWUFBWSxNQUFNLFdBQ3pELElBQ0E7QUFFSixDQUFDO0FBRUQsT0FBTyxTQUFTLGFBQ2QsSUFBa0IsRUFDbEIsR0FBcUIsRUFDQTtJQUNyQixPQUFPLGdCQUFnQixNQUFNLFlBQVksUUFBUSxJQUFJO0lBRXJELE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxPQUFPLFlBQVk7QUFDMUQsQ0FBQyJ9