export class SampleUser{
    srno:number;
    username:string;
    password:string;
    feature:string;

    constructor(srno:number,username:string,password:string,feature:string){
        this.srno=srno;
        this.username=username;
        this.password=password;
        this.feature=feature;
    }
}