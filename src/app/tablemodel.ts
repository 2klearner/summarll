export class Tables{
    id:number=0;
    tablerow:string='';
    tablenumber:string='';
    tablecapacity:string='';
    tabletype: string='';
    tableusername:string='';
    tablestatus:string='';

}

export class Reservation {
    id: number = 0;
    name: string = '';
    date: Date | undefined;
    time: Date | undefined;
    tablerow: string | undefined;
    status: string | undefined;

}