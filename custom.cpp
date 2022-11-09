#include "pxt.h"
#include "lib/customlib.h"

// The base of custom Event Bus ID.
static const uint16_t MICROBIT_CUSTOM_ID_BASE = 32768;

#ifndef CUSTOM_EVENT_ID_MY_CUSTOM
#define CUSTOM_EVENT_ID_MY_CUSTOM (MICROBIT_CUSTOM_ID_BASE+1)
#endif
// Event Value
#define MY_CUSTOM_EVT_A 0x01
#define MY_CUSTOM_EVT_B 0x02

namespace custom {
    
    //%
    int bar(int v) {
        return customlib::counter(v);
    }
    
    //%
    void onDataReceived(Action body) {
        registerWithDal(CUSTOM_EVENT_ID_MY_CUSTOM, MY_CUSTOM_EVT_A, body);
    }

    bool initialized = false;
    int waitTime = 1000;

    void update () {
        while (initialized) {
            MicroBitEvent(CUSTOM_EVENT_ID_MY_CUSTOM, MY_CUSTOM_EVT_A);
            fiber_sleep(waitTime);
        }
    }

    //%
    void startSending(int ms) {
        if (ms<0) {
            initialized = false;
            return;
        }
        waitTime = ms;
        if (initialized)
        {
            return;
        }
        initialized = true;
        create_fiber(update);
        //release_fiber();
    }

}