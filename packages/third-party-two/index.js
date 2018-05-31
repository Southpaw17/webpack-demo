export function SomeFunc() {
    console.log("I'm included in the bundle!");
}

export function UnusedFunc() {
    console.log("I'm never used in the application, Tree Shaking should take care of me!");
}