// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { notImplemented } from "../_utils.ts";
export default class Dirent {
    constructor(entry){
        this.entry = entry;
    }
    isBlockDevice() {
        notImplemented("Deno does not yet support identification of block devices");
        return false;
    }
    isCharacterDevice() {
        notImplemented("Deno does not yet support identification of character devices");
        return false;
    }
    isDirectory() {
        return this.entry.isDirectory;
    }
    isFIFO() {
        notImplemented("Deno does not yet support identification of FIFO named pipes");
        return false;
    }
    isFile() {
        return this.entry.isFile;
    }
    isSocket() {
        notImplemented("Deno does not yet support identification of sockets");
        return false;
    }
    isSymbolicLink() {
        return this.entry.isSymlink;
    }
    get name() {
        return this.entry.name;
    }
    entry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvX2ZzL19mc19kaXJlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cbmltcG9ydCB7IG5vdEltcGxlbWVudGVkIH0gZnJvbSBcIi4uL191dGlscy50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVudHJ5OiBEZW5vLkRpckVudHJ5KSB7fVxuXG4gIGlzQmxvY2tEZXZpY2UoKTogYm9vbGVhbiB7XG4gICAgbm90SW1wbGVtZW50ZWQoXCJEZW5vIGRvZXMgbm90IHlldCBzdXBwb3J0IGlkZW50aWZpY2F0aW9uIG9mIGJsb2NrIGRldmljZXNcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDaGFyYWN0ZXJEZXZpY2UoKTogYm9vbGVhbiB7XG4gICAgbm90SW1wbGVtZW50ZWQoXG4gICAgICBcIkRlbm8gZG9lcyBub3QgeWV0IHN1cHBvcnQgaWRlbnRpZmljYXRpb24gb2YgY2hhcmFjdGVyIGRldmljZXNcIixcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRGlyZWN0b3J5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVudHJ5LmlzRGlyZWN0b3J5O1xuICB9XG5cbiAgaXNGSUZPKCk6IGJvb2xlYW4ge1xuICAgIG5vdEltcGxlbWVudGVkKFxuICAgICAgXCJEZW5vIGRvZXMgbm90IHlldCBzdXBwb3J0IGlkZW50aWZpY2F0aW9uIG9mIEZJRk8gbmFtZWQgcGlwZXNcIixcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyeS5pc0ZpbGU7XG4gIH1cblxuICBpc1NvY2tldCgpOiBib29sZWFuIHtcbiAgICBub3RJbXBsZW1lbnRlZChcIkRlbm8gZG9lcyBub3QgeWV0IHN1cHBvcnQgaWRlbnRpZmljYXRpb24gb2Ygc29ja2V0c1wiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1N5bWJvbGljTGluaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyeS5pc1N5bWxpbms7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyeS5uYW1lO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLFNBQVMsY0FBYyxRQUFRLGVBQWU7QUFFOUMsZUFBZSxNQUFNO0lBQ25CLFlBQW9CLE1BQXNCO3FCQUF0QjtJQUF1QjtJQUUzQyxnQkFBeUI7UUFDdkIsZUFBZTtRQUNmLE9BQU8sS0FBSztJQUNkO0lBRUEsb0JBQTZCO1FBQzNCLGVBQ0U7UUFFRixPQUFPLEtBQUs7SUFDZDtJQUVBLGNBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO0lBQy9CO0lBRUEsU0FBa0I7UUFDaEIsZUFDRTtRQUVGLE9BQU8sS0FBSztJQUNkO0lBRUEsU0FBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDMUI7SUFFQSxXQUFvQjtRQUNsQixlQUFlO1FBQ2YsT0FBTyxLQUFLO0lBQ2Q7SUFFQSxpQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7SUFDN0I7SUFFQSxJQUFJLE9BQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ3hCO0lBeENvQjtBQXlDdEIsQ0FBQyJ9