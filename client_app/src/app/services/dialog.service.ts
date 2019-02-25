
import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef, ComponentRef
} from '@angular/core';

export class DialogRef {

    constructor(private service:DialogService) {

    }

    close(){
        this.service.destroy();
    }

    getResult<T>():Promise<T>{
        return this.service.getPromise();
    }

}

@Injectable()
export class DialogService {

    private componentRef:ComponentRef<any>;
    private domElem;
    private resolve:Function;
    private promise:Promise<any>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) { }

    private appendComponentToBody(component: any) {
        // 1. Create a component reference from the component
        const componentRef:ComponentRef<any>  = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        componentRef.instance.dialogService = this;

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        this.componentRef = componentRef;
        this.domElem = domElem;
    }

    public destroy(){
        if (this.componentRef) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.domElem.parentNode.removeChild(this.domElem);
        }
        this.appRef = null;
        this.componentRef = null;
        this.resolve = null;
        this.promise = null;
        this.domElem = null;
    }

    public openDialog<T>(component:any):DialogRef {
        this.appendComponentToBody(component);
        this.promise = new Promise<T>(resolve=>{
            this.resolve = resolve;
        });
        return new DialogRef(this);
    }

    public getPromise<T>():Promise<T>{
        return this.promise;
    }

    public getResult<T>():Promise<T> {
        return this.promise;
    }

    public sendResult(result){
        this.resolve(result);
    }

}