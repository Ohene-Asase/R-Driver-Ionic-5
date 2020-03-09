export interface IRequest{
    name:string,
    destination: string,
    purpose: string,
    date: string,
    due_time:string,
    no_of_people:string
}


export interface IReal {
    name: string,
    destination:string,
    purpose:string,
    data:string
}

export interface IHistory{
   destination: string,
   purpose:string,
   no_of_people:number,
   date:string,
   due_time:string
   

}


