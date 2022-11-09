// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function () {
    custom.startSending(1000)
})
custom.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.AB, function () {
    custom.startSending(100)
})
input.onButtonPressed(Button.B, function () {
    custom.startSending(-1)
})
