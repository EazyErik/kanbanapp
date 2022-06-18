export interface Task{

    task:string;
    id?:string;
    description:string;
    status:KanbanStatus;

}

export enum KanbanStatus{
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"


}