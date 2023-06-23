class Foo {
    volatile int i = 0;

    public synchronized void first(Runnable printFirst) throws 
InterruptedException {
        ++i;
        // printFirst.run() outputs "first". Do not change or remove this 
line.
        printFirst.run();
        notifyAll();
    }

    public synchronized void second(Runnable printSecond) throws 
InterruptedException {
        while(i != 1) {
            wait();
        }
        ++i;
        // printSecond.run() outputs "second". Do not change or remove 
this line.
        printSecond.run();
        notifyAll();
    }

    public synchronized void third(Runnable printThird) throws 
InterruptedException {
        while(i != 2) {
            wait();
        }
        // printThird.run() outputs "third". Do not change or remove this 
line.
        printThird.run();
    }
}
