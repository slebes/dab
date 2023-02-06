// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
/* Copyright Joyent, Inc. and other Node contributors. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */ // This module ports:
// - https://github.com/libuv/libuv/blob/master/src/win/error.c
import * as winErrors from "./_winerror.ts";
export function uvTranslateSysError(sysErrno) {
    switch(sysErrno){
        case winErrors.ERROR_ACCESS_DENIED:
            return "EACCES";
        case winErrors.ERROR_NOACCESS:
            return "EACCES";
        case winErrors.WSAEACCES:
            return "EACCES";
        // case winErrors.ERROR_ELEVATION_REQUIRED:          return "EACCES";
        case winErrors.ERROR_CANT_ACCESS_FILE:
            return "EACCES";
        case winErrors.ERROR_ADDRESS_ALREADY_ASSOCIATED:
            return "EADDRINUSE";
        case winErrors.WSAEADDRINUSE:
            return "EADDRINUSE";
        case winErrors.WSAEADDRNOTAVAIL:
            return "EADDRNOTAVAIL";
        case winErrors.WSAEAFNOSUPPORT:
            return "EAFNOSUPPORT";
        case winErrors.WSAEWOULDBLOCK:
            return "EAGAIN";
        case winErrors.WSAEALREADY:
            return "EALREADY";
        case winErrors.ERROR_INVALID_FLAGS:
            return "EBADF";
        case winErrors.ERROR_INVALID_HANDLE:
            return "EBADF";
        case winErrors.ERROR_LOCK_VIOLATION:
            return "EBUSY";
        case winErrors.ERROR_PIPE_BUSY:
            return "EBUSY";
        case winErrors.ERROR_SHARING_VIOLATION:
            return "EBUSY";
        case winErrors.ERROR_OPERATION_ABORTED:
            return "ECANCELED";
        case winErrors.WSAEINTR:
            return "ECANCELED";
        case winErrors.ERROR_NO_UNICODE_TRANSLATION:
            return "ECHARSET";
        case winErrors.ERROR_CONNECTION_ABORTED:
            return "ECONNABORTED";
        case winErrors.WSAECONNABORTED:
            return "ECONNABORTED";
        case winErrors.ERROR_CONNECTION_REFUSED:
            return "ECONNREFUSED";
        case winErrors.WSAECONNREFUSED:
            return "ECONNREFUSED";
        case winErrors.ERROR_NETNAME_DELETED:
            return "ECONNRESET";
        case winErrors.WSAECONNRESET:
            return "ECONNRESET";
        case winErrors.ERROR_ALREADY_EXISTS:
            return "EEXIST";
        case winErrors.ERROR_FILE_EXISTS:
            return "EEXIST";
        case winErrors.ERROR_BUFFER_OVERFLOW:
            return "EFAULT";
        case winErrors.WSAEFAULT:
            return "EFAULT";
        case winErrors.ERROR_HOST_UNREACHABLE:
            return "EHOSTUNREACH";
        case winErrors.WSAEHOSTUNREACH:
            return "EHOSTUNREACH";
        case winErrors.ERROR_INSUFFICIENT_BUFFER:
            return "EINVAL";
        case winErrors.ERROR_INVALID_DATA:
            return "EINVAL";
        case winErrors.ERROR_INVALID_NAME:
            return "EINVAL";
        case winErrors.ERROR_INVALID_PARAMETER:
            return "EINVAL";
        // case winErrors.ERROR_SYMLINK_NOT_SUPPORTED:       return "EINVAL";
        case winErrors.WSAEINVAL:
            return "EINVAL";
        case winErrors.WSAEPFNOSUPPORT:
            return "EINVAL";
        case winErrors.ERROR_BEGINNING_OF_MEDIA:
            return "EIO";
        case winErrors.ERROR_BUS_RESET:
            return "EIO";
        case winErrors.ERROR_CRC:
            return "EIO";
        case winErrors.ERROR_DEVICE_DOOR_OPEN:
            return "EIO";
        case winErrors.ERROR_DEVICE_REQUIRES_CLEANING:
            return "EIO";
        case winErrors.ERROR_DISK_CORRUPT:
            return "EIO";
        case winErrors.ERROR_EOM_OVERFLOW:
            return "EIO";
        case winErrors.ERROR_FILEMARK_DETECTED:
            return "EIO";
        case winErrors.ERROR_GEN_FAILURE:
            return "EIO";
        case winErrors.ERROR_INVALID_BLOCK_LENGTH:
            return "EIO";
        case winErrors.ERROR_IO_DEVICE:
            return "EIO";
        case winErrors.ERROR_NO_DATA_DETECTED:
            return "EIO";
        case winErrors.ERROR_NO_SIGNAL_SENT:
            return "EIO";
        case winErrors.ERROR_OPEN_FAILED:
            return "EIO";
        case winErrors.ERROR_SETMARK_DETECTED:
            return "EIO";
        case winErrors.ERROR_SIGNAL_REFUSED:
            return "EIO";
        case winErrors.WSAEISCONN:
            return "EISCONN";
        case winErrors.ERROR_CANT_RESOLVE_FILENAME:
            return "ELOOP";
        case winErrors.ERROR_TOO_MANY_OPEN_FILES:
            return "EMFILE";
        case winErrors.WSAEMFILE:
            return "EMFILE";
        case winErrors.WSAEMSGSIZE:
            return "EMSGSIZE";
        case winErrors.ERROR_FILENAME_EXCED_RANGE:
            return "ENAMETOOLONG";
        case winErrors.ERROR_NETWORK_UNREACHABLE:
            return "ENETUNREACH";
        case winErrors.WSAENETUNREACH:
            return "ENETUNREACH";
        case winErrors.WSAENOBUFS:
            return "ENOBUFS";
        case winErrors.ERROR_BAD_PATHNAME:
            return "ENOENT";
        case winErrors.ERROR_DIRECTORY:
            return "ENOTDIR";
        case winErrors.ERROR_ENVVAR_NOT_FOUND:
            return "ENOENT";
        case winErrors.ERROR_FILE_NOT_FOUND:
            return "ENOENT";
        case winErrors.ERROR_INVALID_DRIVE:
            return "ENOENT";
        case winErrors.ERROR_INVALID_REPARSE_DATA:
            return "ENOENT";
        case winErrors.ERROR_MOD_NOT_FOUND:
            return "ENOENT";
        case winErrors.ERROR_PATH_NOT_FOUND:
            return "ENOENT";
        case winErrors.WSAHOST_NOT_FOUND:
            return "ENOENT";
        case winErrors.WSANO_DATA:
            return "ENOENT";
        case winErrors.ERROR_NOT_ENOUGH_MEMORY:
            return "ENOMEM";
        case winErrors.ERROR_OUTOFMEMORY:
            return "ENOMEM";
        case winErrors.ERROR_CANNOT_MAKE:
            return "ENOSPC";
        case winErrors.ERROR_DISK_FULL:
            return "ENOSPC";
        case winErrors.ERROR_EA_TABLE_FULL:
            return "ENOSPC";
        case winErrors.ERROR_END_OF_MEDIA:
            return "ENOSPC";
        case winErrors.ERROR_HANDLE_DISK_FULL:
            return "ENOSPC";
        case winErrors.ERROR_NOT_CONNECTED:
            return "ENOTCONN";
        case winErrors.WSAENOTCONN:
            return "ENOTCONN";
        case winErrors.ERROR_DIR_NOT_EMPTY:
            return "ENOTEMPTY";
        case winErrors.WSAENOTSOCK:
            return "ENOTSOCK";
        case winErrors.ERROR_NOT_SUPPORTED:
            return "ENOTSUP";
        case winErrors.ERROR_BROKEN_PIPE:
            return "EOF";
        case winErrors.ERROR_PRIVILEGE_NOT_HELD:
            return "EPERM";
        case winErrors.ERROR_BAD_PIPE:
            return "EPIPE";
        case winErrors.ERROR_NO_DATA:
            return "EPIPE";
        case winErrors.ERROR_PIPE_NOT_CONNECTED:
            return "EPIPE";
        case winErrors.WSAESHUTDOWN:
            return "EPIPE";
        case winErrors.WSAEPROTONOSUPPORT:
            return "EPROTONOSUPPORT";
        case winErrors.ERROR_WRITE_PROTECT:
            return "EROFS";
        case winErrors.ERROR_SEM_TIMEOUT:
            return "ETIMEDOUT";
        case winErrors.WSAETIMEDOUT:
            return "ETIMEDOUT";
        case winErrors.ERROR_NOT_SAME_DEVICE:
            return "EXDEV";
        case winErrors.ERROR_INVALID_FUNCTION:
            return "EISDIR";
        case winErrors.ERROR_META_EXPANSION_TOO_LONG:
            return "E2BIG";
        case winErrors.WSAESOCKTNOSUPPORT:
            return "ESOCKTNOSUPPORT";
        default:
            return "UNKNOWN";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvaW50ZXJuYWxfYmluZGluZy9fbGlidXZfd2luZXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cbi8qIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLy8gVGhpcyBtb2R1bGUgcG9ydHM6XG4vLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9saWJ1di9saWJ1di9ibG9iL21hc3Rlci9zcmMvd2luL2Vycm9yLmNcblxuaW1wb3J0ICogYXMgd2luRXJyb3JzIGZyb20gXCIuL193aW5lcnJvci50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXZUcmFuc2xhdGVTeXNFcnJvcihzeXNFcnJubzogbnVtYmVyKTogc3RyaW5nIHtcbiAgc3dpdGNoIChzeXNFcnJubykge1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0FDQ0VTU19ERU5JRUQ6XG4gICAgICByZXR1cm4gXCJFQUNDRVNcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9OT0FDQ0VTUzpcbiAgICAgIHJldHVybiBcIkVBQ0NFU1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVBQ0NFUzpcbiAgICAgIHJldHVybiBcIkVBQ0NFU1wiO1xuICAgIC8vIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0VMRVZBVElPTl9SRVFVSVJFRDogICAgICAgICAgcmV0dXJuIFwiRUFDQ0VTXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfQ0FOVF9BQ0NFU1NfRklMRTpcbiAgICAgIHJldHVybiBcIkVBQ0NFU1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0FERFJFU1NfQUxSRUFEWV9BU1NPQ0lBVEVEOlxuICAgICAgcmV0dXJuIFwiRUFERFJJTlVTRVwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVBRERSSU5VU0U6XG4gICAgICByZXR1cm4gXCJFQUREUklOVVNFXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRUFERFJOT1RBVkFJTDpcbiAgICAgIHJldHVybiBcIkVBRERSTk9UQVZBSUxcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFQUZOT1NVUFBPUlQ6XG4gICAgICByZXR1cm4gXCJFQUZOT1NVUFBPUlRcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFV09VTERCTE9DSzpcbiAgICAgIHJldHVybiBcIkVBR0FJTlwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVBTFJFQURZOlxuICAgICAgcmV0dXJuIFwiRUFMUkVBRFlcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX0ZMQUdTOlxuICAgICAgcmV0dXJuIFwiRUJBREZcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX0hBTkRMRTpcbiAgICAgIHJldHVybiBcIkVCQURGXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfTE9DS19WSU9MQVRJT046XG4gICAgICByZXR1cm4gXCJFQlVTWVwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1BJUEVfQlVTWTpcbiAgICAgIHJldHVybiBcIkVCVVNZXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfU0hBUklOR19WSU9MQVRJT046XG4gICAgICByZXR1cm4gXCJFQlVTWVwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX09QRVJBVElPTl9BQk9SVEVEOlxuICAgICAgcmV0dXJuIFwiRUNBTkNFTEVEXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRUlOVFI6XG4gICAgICByZXR1cm4gXCJFQ0FOQ0VMRURcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9OT19VTklDT0RFX1RSQU5TTEFUSU9OOlxuICAgICAgcmV0dXJuIFwiRUNIQVJTRVRcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9DT05ORUNUSU9OX0FCT1JURUQ6XG4gICAgICByZXR1cm4gXCJFQ09OTkFCT1JURURcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFQ09OTkFCT1JURUQ6XG4gICAgICByZXR1cm4gXCJFQ09OTkFCT1JURURcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9DT05ORUNUSU9OX1JFRlVTRUQ6XG4gICAgICByZXR1cm4gXCJFQ09OTlJFRlVTRURcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFQ09OTlJFRlVTRUQ6XG4gICAgICByZXR1cm4gXCJFQ09OTlJFRlVTRURcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9ORVROQU1FX0RFTEVURUQ6XG4gICAgICByZXR1cm4gXCJFQ09OTlJFU0VUXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRUNPTk5SRVNFVDpcbiAgICAgIHJldHVybiBcIkVDT05OUkVTRVRcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9BTFJFQURZX0VYSVNUUzpcbiAgICAgIHJldHVybiBcIkVFWElTVFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0ZJTEVfRVhJU1RTOlxuICAgICAgcmV0dXJuIFwiRUVYSVNUXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfQlVGRkVSX09WRVJGTE9XOlxuICAgICAgcmV0dXJuIFwiRUZBVUxUXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRUZBVUxUOlxuICAgICAgcmV0dXJuIFwiRUZBVUxUXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfSE9TVF9VTlJFQUNIQUJMRTpcbiAgICAgIHJldHVybiBcIkVIT1NUVU5SRUFDSFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVIT1NUVU5SRUFDSDpcbiAgICAgIHJldHVybiBcIkVIT1NUVU5SRUFDSFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0lOU1VGRklDSUVOVF9CVUZGRVI6XG4gICAgICByZXR1cm4gXCJFSU5WQUxcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX0RBVEE6XG4gICAgICByZXR1cm4gXCJFSU5WQUxcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX05BTUU6XG4gICAgICByZXR1cm4gXCJFSU5WQUxcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjpcbiAgICAgIHJldHVybiBcIkVJTlZBTFwiO1xuICAgIC8vIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1NZTUxJTktfTk9UX1NVUFBPUlRFRDogICAgICAgcmV0dXJuIFwiRUlOVkFMXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRUlOVkFMOlxuICAgICAgcmV0dXJuIFwiRUlOVkFMXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRVBGTk9TVVBQT1JUOlxuICAgICAgcmV0dXJuIFwiRUlOVkFMXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfQkVHSU5OSU5HX09GX01FRElBOlxuICAgICAgcmV0dXJuIFwiRUlPXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfQlVTX1JFU0VUOlxuICAgICAgcmV0dXJuIFwiRUlPXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfQ1JDOlxuICAgICAgcmV0dXJuIFwiRUlPXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfREVWSUNFX0RPT1JfT1BFTjpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0RFVklDRV9SRVFVSVJFU19DTEVBTklORzpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0RJU0tfQ09SUlVQVDpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0VPTV9PVkVSRkxPVzpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0ZJTEVNQVJLX0RFVEVDVEVEOlxuICAgICAgcmV0dXJuIFwiRUlPXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfR0VOX0ZBSUxVUkU6XG4gICAgICByZXR1cm4gXCJFSU9cIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX0JMT0NLX0xFTkdUSDpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0lPX0RFVklDRTpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX05PX0RBVEFfREVURUNURUQ6XG4gICAgICByZXR1cm4gXCJFSU9cIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9OT19TSUdOQUxfU0VOVDpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX09QRU5fRkFJTEVEOlxuICAgICAgcmV0dXJuIFwiRUlPXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfU0VUTUFSS19ERVRFQ1RFRDpcbiAgICAgIHJldHVybiBcIkVJT1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1NJR05BTF9SRUZVU0VEOlxuICAgICAgcmV0dXJuIFwiRUlPXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRUlTQ09OTjpcbiAgICAgIHJldHVybiBcIkVJU0NPTk5cIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9DQU5UX1JFU09MVkVfRklMRU5BTUU6XG4gICAgICByZXR1cm4gXCJFTE9PUFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1RPT19NQU5ZX09QRU5fRklMRVM6XG4gICAgICByZXR1cm4gXCJFTUZJTEVcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFTUZJTEU6XG4gICAgICByZXR1cm4gXCJFTUZJTEVcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFTVNHU0laRTpcbiAgICAgIHJldHVybiBcIkVNU0dTSVpFXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfRklMRU5BTUVfRVhDRURfUkFOR0U6XG4gICAgICByZXR1cm4gXCJFTkFNRVRPT0xPTkdcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9ORVRXT1JLX1VOUkVBQ0hBQkxFOlxuICAgICAgcmV0dXJuIFwiRU5FVFVOUkVBQ0hcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFTkVUVU5SRUFDSDpcbiAgICAgIHJldHVybiBcIkVORVRVTlJFQUNIXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRU5PQlVGUzpcbiAgICAgIHJldHVybiBcIkVOT0JVRlNcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9CQURfUEFUSE5BTUU6XG4gICAgICByZXR1cm4gXCJFTk9FTlRcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9ESVJFQ1RPUlk6XG4gICAgICByZXR1cm4gXCJFTk9URElSXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfRU5WVkFSX05PVF9GT1VORDpcbiAgICAgIHJldHVybiBcIkVOT0VOVFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0ZJTEVfTk9UX0ZPVU5EOlxuICAgICAgcmV0dXJuIFwiRU5PRU5UXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfSU5WQUxJRF9EUklWRTpcbiAgICAgIHJldHVybiBcIkVOT0VOVFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0lOVkFMSURfUkVQQVJTRV9EQVRBOlxuICAgICAgcmV0dXJuIFwiRU5PRU5UXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfTU9EX05PVF9GT1VORDpcbiAgICAgIHJldHVybiBcIkVOT0VOVFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1BBVEhfTk9UX0ZPVU5EOlxuICAgICAgcmV0dXJuIFwiRU5PRU5UXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBSE9TVF9OT1RfRk9VTkQ6XG4gICAgICByZXR1cm4gXCJFTk9FTlRcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FOT19EQVRBOlxuICAgICAgcmV0dXJuIFwiRU5PRU5UXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfTk9UX0VOT1VHSF9NRU1PUlk6XG4gICAgICByZXR1cm4gXCJFTk9NRU1cIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9PVVRPRk1FTU9SWTpcbiAgICAgIHJldHVybiBcIkVOT01FTVwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0NBTk5PVF9NQUtFOlxuICAgICAgcmV0dXJuIFwiRU5PU1BDXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfRElTS19GVUxMOlxuICAgICAgcmV0dXJuIFwiRU5PU1BDXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfRUFfVEFCTEVfRlVMTDpcbiAgICAgIHJldHVybiBcIkVOT1NQQ1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0VORF9PRl9NRURJQTpcbiAgICAgIHJldHVybiBcIkVOT1NQQ1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0hBTkRMRV9ESVNLX0ZVTEw6XG4gICAgICByZXR1cm4gXCJFTk9TUENcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9OT1RfQ09OTkVDVEVEOlxuICAgICAgcmV0dXJuIFwiRU5PVENPTk5cIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFTk9UQ09OTjpcbiAgICAgIHJldHVybiBcIkVOT1RDT05OXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfRElSX05PVF9FTVBUWTpcbiAgICAgIHJldHVybiBcIkVOT1RFTVBUWVwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVOT1RTT0NLOlxuICAgICAgcmV0dXJuIFwiRU5PVFNPQ0tcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9OT1RfU1VQUE9SVEVEOlxuICAgICAgcmV0dXJuIFwiRU5PVFNVUFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX0JST0tFTl9QSVBFOlxuICAgICAgcmV0dXJuIFwiRU9GXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfUFJJVklMRUdFX05PVF9IRUxEOlxuICAgICAgcmV0dXJuIFwiRVBFUk1cIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9CQURfUElQRTpcbiAgICAgIHJldHVybiBcIkVQSVBFXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfTk9fREFUQTpcbiAgICAgIHJldHVybiBcIkVQSVBFXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfUElQRV9OT1RfQ09OTkVDVEVEOlxuICAgICAgcmV0dXJuIFwiRVBJUEVcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5XU0FFU0hVVERPV046XG4gICAgICByZXR1cm4gXCJFUElQRVwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVQUk9UT05PU1VQUE9SVDpcbiAgICAgIHJldHVybiBcIkVQUk9UT05PU1VQUE9SVFwiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1dSSVRFX1BST1RFQ1Q6XG4gICAgICByZXR1cm4gXCJFUk9GU1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLkVSUk9SX1NFTV9USU1FT1VUOlxuICAgICAgcmV0dXJuIFwiRVRJTUVET1VUXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuV1NBRVRJTUVET1VUOlxuICAgICAgcmV0dXJuIFwiRVRJTUVET1VUXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfTk9UX1NBTUVfREVWSUNFOlxuICAgICAgcmV0dXJuIFwiRVhERVZcIjtcbiAgICBjYXNlIHdpbkVycm9ycy5FUlJPUl9JTlZBTElEX0ZVTkNUSU9OOlxuICAgICAgcmV0dXJuIFwiRUlTRElSXCI7XG4gICAgY2FzZSB3aW5FcnJvcnMuRVJST1JfTUVUQV9FWFBBTlNJT05fVE9PX0xPTkc6XG4gICAgICByZXR1cm4gXCJFMkJJR1wiO1xuICAgIGNhc2Ugd2luRXJyb3JzLldTQUVTT0NLVE5PU1VQUE9SVDpcbiAgICAgIHJldHVybiBcIkVTT0NLVE5PU1VQUE9SVFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJVTktOT1dOXCI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7QUFDMUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQkMsR0FFRCxxQkFBcUI7QUFDckIsK0RBQStEO0FBRS9ELFlBQVksZUFBZSxpQkFBaUI7QUFFNUMsT0FBTyxTQUFTLG9CQUFvQixRQUFnQixFQUFVO0lBQzVELE9BQVE7UUFDTixLQUFLLFVBQVUsbUJBQW1CO1lBQ2hDLE9BQU87UUFDVCxLQUFLLFVBQVUsY0FBYztZQUMzQixPQUFPO1FBQ1QsS0FBSyxVQUFVLFNBQVM7WUFDdEIsT0FBTztRQUNULHFFQUFxRTtRQUNyRSxLQUFLLFVBQVUsc0JBQXNCO1lBQ25DLE9BQU87UUFDVCxLQUFLLFVBQVUsZ0NBQWdDO1lBQzdDLE9BQU87UUFDVCxLQUFLLFVBQVUsYUFBYTtZQUMxQixPQUFPO1FBQ1QsS0FBSyxVQUFVLGdCQUFnQjtZQUM3QixPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSxjQUFjO1lBQzNCLE9BQU87UUFDVCxLQUFLLFVBQVUsV0FBVztZQUN4QixPQUFPO1FBQ1QsS0FBSyxVQUFVLG1CQUFtQjtZQUNoQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLG9CQUFvQjtZQUNqQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLG9CQUFvQjtZQUNqQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSx1QkFBdUI7WUFDcEMsT0FBTztRQUNULEtBQUssVUFBVSx1QkFBdUI7WUFDcEMsT0FBTztRQUNULEtBQUssVUFBVSxRQUFRO1lBQ3JCLE9BQU87UUFDVCxLQUFLLFVBQVUsNEJBQTRCO1lBQ3pDLE9BQU87UUFDVCxLQUFLLFVBQVUsd0JBQXdCO1lBQ3JDLE9BQU87UUFDVCxLQUFLLFVBQVUsZUFBZTtZQUM1QixPQUFPO1FBQ1QsS0FBSyxVQUFVLHdCQUF3QjtZQUNyQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSxxQkFBcUI7WUFDbEMsT0FBTztRQUNULEtBQUssVUFBVSxhQUFhO1lBQzFCLE9BQU87UUFDVCxLQUFLLFVBQVUsb0JBQW9CO1lBQ2pDLE9BQU87UUFDVCxLQUFLLFVBQVUsaUJBQWlCO1lBQzlCLE9BQU87UUFDVCxLQUFLLFVBQVUscUJBQXFCO1lBQ2xDLE9BQU87UUFDVCxLQUFLLFVBQVUsU0FBUztZQUN0QixPQUFPO1FBQ1QsS0FBSyxVQUFVLHNCQUFzQjtZQUNuQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSx5QkFBeUI7WUFDdEMsT0FBTztRQUNULEtBQUssVUFBVSxrQkFBa0I7WUFDL0IsT0FBTztRQUNULEtBQUssVUFBVSxrQkFBa0I7WUFDL0IsT0FBTztRQUNULEtBQUssVUFBVSx1QkFBdUI7WUFDcEMsT0FBTztRQUNULHFFQUFxRTtRQUNyRSxLQUFLLFVBQVUsU0FBUztZQUN0QixPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSx3QkFBd0I7WUFDckMsT0FBTztRQUNULEtBQUssVUFBVSxlQUFlO1lBQzVCLE9BQU87UUFDVCxLQUFLLFVBQVUsU0FBUztZQUN0QixPQUFPO1FBQ1QsS0FBSyxVQUFVLHNCQUFzQjtZQUNuQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLDhCQUE4QjtZQUMzQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGtCQUFrQjtZQUMvQixPQUFPO1FBQ1QsS0FBSyxVQUFVLGtCQUFrQjtZQUMvQixPQUFPO1FBQ1QsS0FBSyxVQUFVLHVCQUF1QjtZQUNwQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGlCQUFpQjtZQUM5QixPQUFPO1FBQ1QsS0FBSyxVQUFVLDBCQUEwQjtZQUN2QyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSxzQkFBc0I7WUFDbkMsT0FBTztRQUNULEtBQUssVUFBVSxvQkFBb0I7WUFDakMsT0FBTztRQUNULEtBQUssVUFBVSxpQkFBaUI7WUFDOUIsT0FBTztRQUNULEtBQUssVUFBVSxzQkFBc0I7WUFDbkMsT0FBTztRQUNULEtBQUssVUFBVSxvQkFBb0I7WUFDakMsT0FBTztRQUNULEtBQUssVUFBVSxVQUFVO1lBQ3ZCLE9BQU87UUFDVCxLQUFLLFVBQVUsMkJBQTJCO1lBQ3hDLE9BQU87UUFDVCxLQUFLLFVBQVUseUJBQXlCO1lBQ3RDLE9BQU87UUFDVCxLQUFLLFVBQVUsU0FBUztZQUN0QixPQUFPO1FBQ1QsS0FBSyxVQUFVLFdBQVc7WUFDeEIsT0FBTztRQUNULEtBQUssVUFBVSwwQkFBMEI7WUFDdkMsT0FBTztRQUNULEtBQUssVUFBVSx5QkFBeUI7WUFDdEMsT0FBTztRQUNULEtBQUssVUFBVSxjQUFjO1lBQzNCLE9BQU87UUFDVCxLQUFLLFVBQVUsVUFBVTtZQUN2QixPQUFPO1FBQ1QsS0FBSyxVQUFVLGtCQUFrQjtZQUMvQixPQUFPO1FBQ1QsS0FBSyxVQUFVLGVBQWU7WUFDNUIsT0FBTztRQUNULEtBQUssVUFBVSxzQkFBc0I7WUFDbkMsT0FBTztRQUNULEtBQUssVUFBVSxvQkFBb0I7WUFDakMsT0FBTztRQUNULEtBQUssVUFBVSxtQkFBbUI7WUFDaEMsT0FBTztRQUNULEtBQUssVUFBVSwwQkFBMEI7WUFDdkMsT0FBTztRQUNULEtBQUssVUFBVSxtQkFBbUI7WUFDaEMsT0FBTztRQUNULEtBQUssVUFBVSxvQkFBb0I7WUFDakMsT0FBTztRQUNULEtBQUssVUFBVSxpQkFBaUI7WUFDOUIsT0FBTztRQUNULEtBQUssVUFBVSxVQUFVO1lBQ3ZCLE9BQU87UUFDVCxLQUFLLFVBQVUsdUJBQXVCO1lBQ3BDLE9BQU87UUFDVCxLQUFLLFVBQVUsaUJBQWlCO1lBQzlCLE9BQU87UUFDVCxLQUFLLFVBQVUsaUJBQWlCO1lBQzlCLE9BQU87UUFDVCxLQUFLLFVBQVUsZUFBZTtZQUM1QixPQUFPO1FBQ1QsS0FBSyxVQUFVLG1CQUFtQjtZQUNoQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGtCQUFrQjtZQUMvQixPQUFPO1FBQ1QsS0FBSyxVQUFVLHNCQUFzQjtZQUNuQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLG1CQUFtQjtZQUNoQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLFdBQVc7WUFDeEIsT0FBTztRQUNULEtBQUssVUFBVSxtQkFBbUI7WUFDaEMsT0FBTztRQUNULEtBQUssVUFBVSxXQUFXO1lBQ3hCLE9BQU87UUFDVCxLQUFLLFVBQVUsbUJBQW1CO1lBQ2hDLE9BQU87UUFDVCxLQUFLLFVBQVUsaUJBQWlCO1lBQzlCLE9BQU87UUFDVCxLQUFLLFVBQVUsd0JBQXdCO1lBQ3JDLE9BQU87UUFDVCxLQUFLLFVBQVUsY0FBYztZQUMzQixPQUFPO1FBQ1QsS0FBSyxVQUFVLGFBQWE7WUFDMUIsT0FBTztRQUNULEtBQUssVUFBVSx3QkFBd0I7WUFDckMsT0FBTztRQUNULEtBQUssVUFBVSxZQUFZO1lBQ3pCLE9BQU87UUFDVCxLQUFLLFVBQVUsa0JBQWtCO1lBQy9CLE9BQU87UUFDVCxLQUFLLFVBQVUsbUJBQW1CO1lBQ2hDLE9BQU87UUFDVCxLQUFLLFVBQVUsaUJBQWlCO1lBQzlCLE9BQU87UUFDVCxLQUFLLFVBQVUsWUFBWTtZQUN6QixPQUFPO1FBQ1QsS0FBSyxVQUFVLHFCQUFxQjtZQUNsQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLHNCQUFzQjtZQUNuQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLDZCQUE2QjtZQUMxQyxPQUFPO1FBQ1QsS0FBSyxVQUFVLGtCQUFrQjtZQUMvQixPQUFPO1FBQ1Q7WUFDRSxPQUFPO0lBQ1g7QUFDRixDQUFDIn0=