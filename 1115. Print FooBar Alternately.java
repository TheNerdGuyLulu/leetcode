class FooBar {
    private int n;
    private boolean isFoo = true;

    public FooBar(int n) {
        this.n = n;
    }

    public synchronized void foo(Runnable printFoo) throws 
InterruptedException {
        
        for (int i = 0; i < n; i++) {
            while(!isFoo) {
                wait();
            }
        	// printFoo.run() outputs "foo". Do not change or remove 
this line.
        	printFoo.run();
            isFoo = false;
            notify();
        }
    }

    public synchronized void bar(Runnable printBar) throws 
InterruptedException {
        
        for (int i = 0; i < n; i++) {
            while(isFoo) {
                wait();
            }
            // printBar.run() outputs "bar". Do not change or remove this 
line.
        	printBar.run();
            isFoo = true;
            notify();
        }
    }
}
