
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 * icon: a Unicode identifier for an icon from the Font Awesome icon set.
 *       http://fontawesome.io/icons
 */
//% weight=100 color=#696969 icon="\uf1b2"
namespace custom {

    
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% shim=custom::bar
    export function bar(value: number): number {
        // for the simulator
        return (value + 1) % 10;
    }
    
    export let lastString: string;
    let onReceivedStringHandler: (receivedString: string) => void;
    
    let initialized = false;
    function init() {
        if (initialized) return;
        initialized = true;
        onDataReceived(handleDataReceived);
    }

    let count = 0;

    function handleDataReceived() {
        lastString = convertToText(count++);
        count %= 10;
        if (onReceivedStringHandler) {
            onReceivedStringHandler(lastString);
        }
    }

    /**
     * Registers code to run when the device receives a string.
     */
    //% block = "on string received"
    //% blockGap = 16
    //% draggableParameters=reporter
    //% weight=18
    export function onReceivedString(cb: (receivedString: string) => void) {
        init();
        onReceivedStringHandler = cb;
    }

    /**
     * Used internally by the library.
     */
    //% weight=0
    //% blockId=data_received_event
    //% block="on data received"
    //% blockGap=8
    //% deprecated=true blockHidden=1 shim=custom::onDataReceived
    export function onDataReceived(body: () => void) {
        return;
    }

    
    /**
     * startSending
     * @param ms sleep time(ms), eg: 1000
     */
    //% block = "start sending"
    //% shim=custom::startSending
    export function startSending(ms: number) {
        return;
    }
}
